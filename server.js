const http = require("node:http");
const fs = require("node:fs/promises");
const path = require("node:path");

const PORT = Number(process.env.PORT) || 3000;
const ROOT_DIR = __dirname;

const STATIC_ROUTES = new Map([
  ["/", "index.html"],
  ["/index.html", "index.html"],
  ["/styles.css", "styles.css"],
  ["/script.js", "script.js"]
]);

const CONTENT_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8"
};

const GENDER_MAP = {
  m: { gender: "masculine", article: "der", label: "Masculine" },
  f: { gender: "feminine", article: "die", label: "Feminine" },
  n: { gender: "neuter", article: "das", label: "Neuter" }
};

const translationCache = new Map();
const sentenceTranslationCache = new Map();
const grammarCheckCache = new Map();
const breakdownGlossMap = new Map(Object.entries({
  ich: "I",
  du: "you",
  er: "he",
  sie: "she / they",
  es: "it",
  wir: "we",
  ihr: "you (plural)",
  sieh: "look",
  siehst: "see",
  habe: "have",
  hast: "have",
  hat: "has",
  haben: "have",
  bin: "am",
  bist: "are",
  ist: "is",
  sind: "are",
  ein: "a / an",
  eine: "a / an",
  einen: "a / an (masc. acc.)",
  einem: "a / an (dat.)",
  der: "the (masc.)",
  die: "the (fem. / plural)",
  das: "the (neut.)",
  den: "the (masc. acc.)",
  dem: "the (dat.)",
  ichs: "I's"
}));

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store"
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, text, contentType = "text/plain; charset=utf-8") {
  res.writeHead(statusCode, {
    "Content-Type": contentType
  });
  res.end(text);
}

async function serveStatic(res, routePath) {
  const fileName = STATIC_ROUTES.get(routePath);
  if (!fileName) {
    sendText(res, 404, "Not Found");
    return;
  }

  try {
    const filePath = path.join(ROOT_DIR, fileName);
    const data = await fs.readFile(filePath);
    const ext = path.extname(fileName);
    sendText(res, 200, data, CONTENT_TYPES[ext] || "application/octet-stream");
  } catch (error) {
    sendText(res, 500, `Static file error: ${error.message}`);
  }
}

function normalizeInputWord(rawWord) {
  return String(rawWord || "")
    .trim()
    .replace(/^(der|die|das|den|dem|des|ein|eine|einen|einem|einer)\s+/i, "")
    .replace(/[.,!?;:]+$/g, "")
    .normalize("NFC");
}

function capitalizeGermanNoun(word) {
  if (!word) return word;
  const first = word[0].toLocaleUpperCase("de-DE");
  return `${first}${word.slice(1)}`;
}

function unique(values) {
  return [...new Set(values)];
}

function buildLookupCandidates(word) {
  const trimmed = word.trim();
  if (!trimmed) return [];

  const capitalized = capitalizeGermanNoun(trimmed);
  return capitalized === trimmed
    ? [trimmed]
    : unique([capitalized, trimmed]);
}

function countToken(source, token) {
  let count = 0;
  let index = 0;
  while (true) {
    const next = source.indexOf(token, index);
    if (next === -1) break;
    count += 1;
    index = next + token.length;
  }
  return count;
}

function extractGermanNounTemplates(wikitext) {
  const lines = String(wikitext || "").split(/\r?\n/);
  const templates = [];

  let inGermanSection = false;
  let inGermanNounSubsection = false;
  let collectingTemplate = false;
  let templateDepth = 0;
  let templateBuffer = "";

  for (const line of lines) {
    const isLevel2Header = /^==[^=].*==\s*$/.test(line);
    const isGermanHeader = isLevel2Header && line.includes("{{Sprache|Deutsch}}");

    if (!collectingTemplate && isGermanHeader) {
      inGermanSection = true;
      inGermanNounSubsection = false;
      continue;
    }

    if (!collectingTemplate && inGermanSection && isLevel2Header && !isGermanHeader) {
      inGermanSection = false;
      inGermanNounSubsection = false;
      continue;
    }

    if (!inGermanSection) {
      continue;
    }

    if (!collectingTemplate && /^===/.test(line)) {
      inGermanNounSubsection = line.includes("{{Wortart|Substantiv|Deutsch}}");
    }

    if (!inGermanNounSubsection) {
      continue;
    }

    if (!collectingTemplate && line.includes("{{Deutsch Substantiv Übersicht")) {
      collectingTemplate = true;
      templateBuffer = `${line}\n`;
      templateDepth = countToken(line, "{{") - countToken(line, "}}");

      if (templateDepth <= 0) {
        templates.push(templateBuffer);
        collectingTemplate = false;
        templateBuffer = "";
      }
      continue;
    }

    if (collectingTemplate) {
      templateBuffer += `${line}\n`;
      templateDepth += countToken(line, "{{");
      templateDepth -= countToken(line, "}}");

      if (templateDepth <= 0) {
        templates.push(templateBuffer);
        collectingTemplate = false;
        templateDepth = 0;
        templateBuffer = "";
      }
    }
  }

  return templates;
}

function extractGenusLetters(templates) {
  const letters = [];

  for (const template of templates) {
    const genusMatches = [...template.matchAll(/\|\s*Genus(?:\s+\d+)?\s*=\s*([^\n|]+)/gi)];
    for (const match of genusMatches) {
      const rawValue = (match[1] || "").toLowerCase();
      const foundLetters = rawValue.match(/[mfn]/g) || [];
      for (const letter of foundLetters) {
        if (GENDER_MAP[letter]) {
          letters.push(letter);
        }
      }
    }
  }

  return unique(letters);
}

function extractGermanNounHeaderGenusLetters(wikitext) {
  const lines = String(wikitext || "").split(/\r?\n/);
  const letters = [];
  let inGermanSection = false;

  for (const line of lines) {
    const isLevel2Header = /^==[^=].*==\s*$/.test(line);
    const isGermanHeader = isLevel2Header && line.includes("{{Sprache|Deutsch}}");

    if (isGermanHeader) {
      inGermanSection = true;
      continue;
    }

    if (inGermanSection && isLevel2Header && !isGermanHeader) {
      inGermanSection = false;
      continue;
    }

    if (!inGermanSection) continue;
    if (!/^===/.test(line)) continue;
    if (!line.includes("{{Wortart|Substantiv|Deutsch}}")) continue;

    const headerMarkers = [...line.matchAll(/\{\{\s*([mfn]{1,3})\s*\}\}/gi)];
    for (const match of headerMarkers) {
      const marker = String(match[1] || "").toLowerCase();
      const foundLetters = marker.match(/[mfn]/g) || [];
      for (const letter of foundLetters) {
        if (GENDER_MAP[letter]) {
          letters.push(letter);
        }
      }
    }
  }

  return unique(letters);
}

function extractGenusLettersFromPage(wikitext) {
  const templateLetters = extractGenusLetters(extractGermanNounTemplates(wikitext));
  if (templateLetters.length > 0) {
    return templateLetters;
  }

  return extractGermanNounHeaderGenusLetters(wikitext);
}

function extractWikiLinkTargets(text) {
  const targets = [];
  for (const match of String(text || "").matchAll(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)) {
    const target = String(match[1] || "").trim();
    if (target) {
      targets.push(target);
    }
  }
  return targets;
}

function normalizeWiktionaryLemmaCandidate(value) {
  return String(value || "")
    .trim()
    .replace(/^Substantiv\s+/i, "")
    .replace(/^Verb\s+/i, "")
    .replace(/^Adjektiv\s+/i, "")
    .replace(/^Adverb\s+/i, "")
    .replace(/^Pronomen\s+/i, "")
    .replace(/[„“"'.;,!?]+$/g, "")
    .trim()
    .normalize("NFC");
}

function extractLemmaReferences(wikitext) {
  const refs = [];
  const source = String(wikitext || "");

  for (const templateMatch of source.matchAll(/\{\{\s*Grundformverweis[^{}]*\}\}/gi)) {
    const template = String(templateMatch[0] || "");
    const inner = template.replace(/^\{\{/, "").replace(/\}\}$/, "");
    const parts = inner.split("|").slice(1);

    for (const part of parts) {
      const value = part.includes("=")
        ? part.split("=").slice(1).join("=")
        : part;

      const linked = extractWikiLinkTargets(value);
      if (linked.length > 0) {
        refs.push(...linked);
        continue;
      }

      const plain = normalizeWiktionaryLemmaCandidate(value);
      if (/^[\p{L}\p{M}0-9-]+(?: [\p{L}\p{M}0-9-]+)*$/u.test(plain)) {
        refs.push(plain);
      }
    }
  }

  for (const match of source.matchAll(/Substantivs?\s+'''?\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/gi)) {
    const target = normalizeWiktionaryLemmaCandidate(match[1]);
    if (target) {
      refs.push(target);
    }
  }

  return unique(refs);
}

function heuristicGuess(word) {
  const lower = String(word || "").toLowerCase();
  const rules = [
    {
      suffixes: ["ung", "heit", "keit", "schaft", "tion", "tät", "ik", "ei", "ur"],
      gender: "feminine",
      article: "die",
      confidence: "medium",
      reason: "common feminine noun suffix"
    },
    {
      suffixes: ["chen", "lein", "ment", "um", "tum", "ma"],
      gender: "neuter",
      article: "das",
      confidence: "medium",
      reason: "common neuter noun suffix"
    },
    {
      suffixes: ["ling", "ismus", "or", "er"],
      gender: "masculine",
      article: "der",
      confidence: "low",
      reason: "common masculine noun suffix"
    }
  ];

  for (const rule of rules) {
    const matchedSuffix = rule.suffixes.find((suffix) => lower.endsWith(suffix));
    if (!matchedSuffix) continue;

    return {
      gender: rule.gender,
      article: rule.article,
      confidence: rule.confidence,
      reason: `ends with -${matchedSuffix} (${rule.reason})`
    };
  }

  return null;
}

function normalizeEnglishMeaningText(text, sourceWord) {
  const raw = String(text || "").trim();
  if (!raw) return null;

  const cleaned = raw
    .replace(/\s+/g, " ")
    .replace(/\.$/, "")
    .trim();

  if (!cleaned) return null;

  if (cleaned.toLowerCase() === String(sourceWord || "").toLowerCase()) {
    return null;
  }

  return cleaned.toLowerCase();
}

function normalizeSentenceTranslationText(text) {
  const raw = String(text || "").trim();
  if (!raw) return null;

  return raw.replace(/\s+/g, " ").trim();
}

function uniqueNonEmptyStrings(values) {
  const seen = new Set();
  const result = [];

  for (const value of values) {
    const normalized = String(value || "").trim();
    if (!normalized) continue;
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(normalized);
  }

  return result;
}

async function translateTextViaMyMemory(text, sourceLang, targetLang) {
  const sourceText = String(text || "").trim();
  if (!sourceText) return null;

  const cacheKey = `${sourceLang}|${targetLang}|${sourceText}`;
  if (sentenceTranslationCache.has(cacheKey)) {
    return sentenceTranslationCache.get(cacheKey);
  }

  try {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", sourceText);
    url.searchParams.set("langpair", `${sourceLang}|${targetLang}`);

    const response = await fetch(url, {
      headers: {
        "User-Agent": "GermanGenderTrainer/1.0 (local study app)"
      }
    });

    if (!response.ok) {
      sentenceTranslationCache.set(cacheKey, null);
      return null;
    }

    const data = await response.json();
    const candidates = [];

    if (Array.isArray(data.matches)) {
      const sortedMatches = [...data.matches].sort((a, b) => Number(b.match || 0) - Number(a.match || 0));
      for (const match of sortedMatches) {
        if (!match || typeof match.translation !== "string") continue;
        const normalized = normalizeSentenceTranslationText(match.translation);
        if (normalized) {
          candidates.push(normalized);
        }
      }
    }

    if (data.responseData?.translatedText) {
      const normalized = normalizeSentenceTranslationText(data.responseData.translatedText);
      if (normalized) {
        candidates.push(normalized);
      }
    }

    const result = uniqueNonEmptyStrings(candidates)[0] || null;
    sentenceTranslationCache.set(cacheKey, result);
    return result;
  } catch {
    sentenceTranslationCache.set(cacheKey, null);
    return null;
  }
}

async function translateGermanToEnglishWord(word) {
  const key = String(word || "").toLowerCase();
  if (!key) return null;

  if (translationCache.has(key)) {
    return translationCache.get(key);
  }

  try {
    const url = new URL("https://api.mymemory.translated.net/get");
    url.searchParams.set("q", word);
    url.searchParams.set("langpair", "de|en");

    const response = await fetch(url, {
      headers: {
        "User-Agent": "GermanGenderTrainer/1.0 (local study app)"
      }
    });

    if (!response.ok) {
      translationCache.set(key, null);
      return null;
    }

    const data = await response.json();
    const candidates = [];

    if (Array.isArray(data.matches)) {
      const sortedMatches = [...data.matches].sort((a, b) => Number(b.match || 0) - Number(a.match || 0));
      for (const match of sortedMatches) {
        if (!match || typeof match.translation !== "string") continue;
        const normalized = normalizeEnglishMeaningText(match.translation, word);
        if (normalized) {
          candidates.push(normalized);
        }
      }
    }

    if (data.responseData?.translatedText) {
      const normalized = normalizeEnglishMeaningText(data.responseData.translatedText, word);
      if (normalized) {
        candidates.push(normalized);
      }
    }

    const uniqueCandidates = unique(candidates);
    const result = uniqueCandidates[0] || null;
    translationCache.set(key, result);
    return result;
  } catch {
    translationCache.set(key, null);
    return null;
  }
}

async function translateGermanSentenceToEnglish(sentence) {
  return translateTextViaMyMemory(sentence, "de", "en");
}

async function translateEnglishSentenceToGerman(sentence) {
  return translateTextViaMyMemory(sentence, "en", "de");
}

function normalizeSentenceInput(rawSentence) {
  return String(rawSentence || "")
    .replace(/\s+/g, " ")
    .trim()
    .normalize("NFC");
}

async function checkGermanGrammarWithLanguageTool(sentence) {
  const text = normalizeSentenceInput(sentence);
  if (!text) {
    return [];
  }

  if (grammarCheckCache.has(text)) {
    return grammarCheckCache.get(text);
  }

  const body = new URLSearchParams();
  body.set("language", "de-DE");
  body.set("text", text);

  const response = await fetch("https://api.languagetool.org/v2/check", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      "User-Agent": "GermanGenderTrainer/1.0 (local study app)"
    },
    body
  });

  if (!response.ok) {
    throw new Error(`Grammar check failed with status ${response.status}`);
  }

  const data = await response.json();
  const matches = Array.isArray(data.matches) ? data.matches : [];
  grammarCheckCache.set(text, matches);
  return matches;
}

function mapLanguageToolIssue(match) {
  const replacements = Array.isArray(match?.replacements)
    ? match.replacements
      .map((replacement) => String(replacement?.value || "").trim())
      .filter(Boolean)
    : [];

  return {
    message: String(match?.message || "Possible issue found."),
    shortMessage: String(match?.shortMessage || "").trim() || null,
    offset: Number(match?.offset || 0),
    length: Number(match?.length || 0),
    issueType: String(match?.rule?.issueType || "unknown"),
    category: String(match?.rule?.category?.name || "General"),
    ruleId: String(match?.rule?.id || "unknown"),
    contextText: String(match?.context?.text || "").trim() || null,
    contextOffset: Number(match?.context?.offset || 0),
    contextLength: Number(match?.context?.length || 0),
    replacements: uniqueNonEmptyStrings(replacements).slice(0, 6)
  };
}

function getBeginnerIssueTeachingHint(issue) {
  const ruleId = String(issue?.ruleId || "");
  const category = String(issue?.category || "");
  const message = String(issue?.message || "");
  const shortMessage = String(issue?.shortMessage || "");
  const issueType = String(issue?.issueType || "");
  const contextText = String(issue?.contextText || "");

  const combined = [ruleId, category, message, shortMessage, issueType].join(" ").toLocaleLowerCase("de-DE");
  const contextLower = contextText.toLocaleLowerCase("de-DE");

  if (combined.includes("groß-/kleinschreibung")
    || ruleId.includes("UPPERCASE")
    || ruleId.includes("LOWERCASE")) {
    return {
      topic: "capitalization",
      explanation: "German uses capitals at the start of a sentence, and all nouns are capitalized (for example: Auto, Schule, Mann)."
    };
  }

  if (combined.includes("akkusativ")
    || combined.includes("dativ")
    || combined.includes("genitiv")
    || combined.includes("nominativ")
    || combined.includes("kasus")) {
    return {
      topic: "case",
      explanation: "German articles/endings change by case (nominative, accusative, dative, genitive). Check which role the noun has in the sentence."
    };
  }

  if (combined.includes("wortstellung")
    || combined.includes("word_order")
    || combined.includes("verb_position")
    || combined.includes("verbstellung")
    || combined.includes("reihenfolge")) {
    return {
      topic: "word order",
      explanation: "German sentence order matters. In main clauses, the finite verb is usually in position 2, and other parts move around it."
    };
  }

  const articleWords = /\b(der|die|das|den|dem|des|ein|eine|einen|einem|einer|mein|meine|meinen|dein|deine|deinen)\b/;
  if (combined.includes("artikel")
    || combined.includes("begleiter")
    || combined.includes("determiner")
    || articleWords.test(contextLower)) {
    return {
      topic: "article",
      explanation: "German nouns need the correct article (der/die/das or ein/eine) based on gender and case. Check the noun gender and the sentence role."
    };
  }

  if (combined.includes("rechtschreib")
    || combined.includes("spell")
    || String(issueType).toLocaleLowerCase("de-DE") === "misspelling") {
    return {
      topic: "spelling",
      explanation: "The spelling looks unusual. In German, small spelling changes can also change the meaning completely."
    };
  }

  if (String(issueType).toLocaleLowerCase("de-DE") === "style" || combined.includes("stil")) {
    return {
      topic: "style",
      explanation: "This is mostly a style suggestion. Your sentence may be understandable, but another phrasing sounds more natural in German."
    };
  }

  return {
    topic: "grammar",
    explanation: "The checker found something unusual here. Compare the suggestion with the context and keep the verb, article, and noun endings in agreement."
  };
}

function addTeachingHintToIssue(issue) {
  return {
    ...issue,
    beginnerHint: getBeginnerIssueTeachingHint(issue)
  };
}

function isBlockingLanguageIssue(issue, options = {}) {
  const strictMode = Boolean(options.strictMode);
  const type = String(issue?.issueType || "").toLowerCase();
  if (!type) return true;
  if (strictMode) return true;
  return type !== "style";
}

function parseSentenceValidationMode(rawMode) {
  return String(rawMode || "").toLowerCase() === "strict" ? "strict" : "grammar";
}

function rangesOverlap(aStart, aEnd, bStart, bEnd) {
  return aStart < bEnd && bStart < aEnd;
}

function applyIssuesToSentence(sentence, issues, pickReplacement) {
  const text = String(sentence || "");
  let output = text;
  const usedRanges = [];

  const usable = (Array.isArray(issues) ? issues : [])
    .map((issue, index) => ({ issue, index }))
    .filter(({ issue }) => {
      const offset = Number(issue?.offset);
      const length = Number(issue?.length);
      return Number.isFinite(offset)
        && Number.isFinite(length)
        && offset >= 0
        && length >= 0
        && offset + length <= text.length;
    })
    .sort((a, b) => Number(b.issue.offset) - Number(a.issue.offset));

  for (const { issue, index } of usable) {
    const offset = Number(issue.offset);
    const length = Number(issue.length);
    const replacement = String(pickReplacement(issue, index) || "");
    if (!replacement) continue;

    const overlaps = usedRanges.some((range) => rangesOverlap(offset, offset + length, range.start, range.end));
    if (overlaps) continue;

    output = `${output.slice(0, offset)}${replacement}${output.slice(offset + length)}`;
    usedRanges.push({ start: offset, end: offset + length });
  }

  return output;
}

function normalizeSentenceForCompare(sentence) {
  return String(sentence || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?]+$/, "")
    .toLocaleLowerCase("de-DE");
}

function tokenizeGermanWords(sentence) {
  const tokens = String(sentence || "").match(/[A-Za-zÄÖÜäöüß]+(?:'[A-Za-zÄÖÜäöüß]+)*/g) || [];
  return unique(tokens).slice(0, 16);
}

async function buildEnglishBreakdown(sentence) {
  const tokens = tokenizeGermanWords(sentence);
  const mapped = [];

  for (const token of tokens) {
    const localGloss = breakdownGlossMap.get(token.toLocaleLowerCase("de-DE"));
    const english = localGloss || await translateGermanToEnglishWord(token);
    if (!english) continue;
    mapped.push({
      de: token,
      en: english === "i" ? "I" : english
    });
  }

  return mapped;
}

async function buildSentenceAlternatives({ originalSentence, correctedSentence, issues, englishTranslation }) {
  const candidates = [];
  const pushCandidate = (sentence, origin, note) => {
    const normalized = normalizeSentenceInput(sentence);
    if (!normalized) return;
    if (candidates.some((item) => normalizeSentenceForCompare(item.german) === normalizeSentenceForCompare(normalized))) {
      return;
    }
    candidates.push({ german: normalized, origin, note });
  };

  pushCandidate(correctedSentence || originalSentence, "corrected", "Best corrected version from grammar suggestions.");

  const issuesWithAlternatives = (Array.isArray(issues) ? issues : [])
    .filter((issue) => {
      const issueType = String(issue?.issueType || "").toLowerCase();
      return Array.isArray(issue.replacements)
        && issue.replacements.length > 1
        && issueType !== "misspelling";
    })
    .slice(0, 2);

  for (const issue of issuesWithAlternatives) {
    const variant = applyIssuesToSentence(originalSentence, issues, (currentIssue) => {
      if (currentIssue === issue) {
        return currentIssue.replacements[1] || currentIssue.replacements[0] || "";
      }
      return currentIssue.replacements[0] || "";
    });
    pushCandidate(variant, "alternative-correction", "Another valid option suggested by the grammar checker.");
  }

  if (englishTranslation) {
    const backTranslated = await translateEnglishSentenceToGerman(englishTranslation);
    if (backTranslated) {
      pushCandidate(backTranslated, "back-translation", "One possible German wording generated from the English meaning.");
    }
  }

  return candidates.slice(0, 3);
}

async function enrichAlternativesWithEnglish(alternatives) {
  const result = [];

  for (const candidate of alternatives) {
    const english = await translateGermanSentenceToEnglish(candidate.german);
    const breakdown = await buildEnglishBreakdown(candidate.german);
    result.push({
      ...candidate,
      english: english || null,
      breakdown
    });
  }

  return result;
}

async function validateGermanSentence(rawSentence, options = {}) {
  const sentence = normalizeSentenceInput(rawSentence);
  if (!sentence) {
    return {
      ok: false,
      error: "Please type a German sentence first."
    };
  }

  const mode = parseSentenceValidationMode(options.mode);
  const strictMode = mode === "strict";
  const [englishTranslation, rawMatches] = await Promise.all([
    translateGermanSentenceToEnglish(sentence),
    checkGermanGrammarWithLanguageTool(sentence)
  ]);

  const issues = rawMatches.map(mapLanguageToolIssue).map(addTeachingHintToIssue);
  const blockingIssues = issues.filter((issue) => isBlockingLanguageIssue(issue, { strictMode }));
  const styleIssueCount = issues.filter((issue) => String(issue.issueType || "").toLowerCase() === "style").length;
  const grammarLikeIssueCount = issues.length - styleIssueCount;
  const correctedSentence = blockingIssues.length > 0
    ? applyIssuesToSentence(sentence, blockingIssues, (issue) => issue.replacements[0] || "")
    : sentence;

  const isCorrect = blockingIssues.length === 0;
  const alternatives = await buildSentenceAlternatives({
    originalSentence: sentence,
    correctedSentence,
    issues: blockingIssues,
    englishTranslation
  });

  return {
    ok: true,
    sentence,
    englishTranslation: englishTranslation || null,
    validation: {
      mode,
      strictMode,
      isCorrect,
      issueCount: blockingIssues.length,
      totalDetectedIssueCount: issues.length,
      grammarIssueCount: grammarLikeIssueCount,
      styleIssueCount,
      correctedSentence,
      summary: isCorrect
        ? (strictMode
          ? "No grammar/spelling/style issues found by the validator."
          : "No grammar/spelling errors found by the validator.")
        : `${blockingIssues.length} ${strictMode ? "grammar/style" : "grammar/spelling"} issue${blockingIssues.length === 1 ? "" : "s"} found.`,
      issues: blockingIssues.slice(0, 8)
    },
    alternatives: await enrichAlternativesWithEnglish(alternatives)
  };
}

async function fetchWiktionaryWikitext(page) {
  const url = new URL("https://de.wiktionary.org/w/api.php");
  url.searchParams.set("action", "parse");
  url.searchParams.set("page", page);
  url.searchParams.set("prop", "wikitext");
  url.searchParams.set("format", "json");

  const response = await fetch(url, {
    headers: {
      "User-Agent": "GermanGenderTrainer/1.0 (local study app)"
    }
  });

  if (!response.ok) {
    return {
      ok: false,
      type: "http_error",
      status: response.status,
      message: `Wiktionary request failed with status ${response.status}`
    };
  }

  const data = await response.json();
  if (data.error) {
    return {
      ok: false,
      type: data.error.code || "api_error",
      status: 404,
      message: data.error.info || "Wiktionary API error"
    };
  }

  return {
    ok: true,
    title: data.parse?.title || page,
    wikitext: data.parse?.wikitext?.["*"] || ""
  };
}

function extractDwdsGenderLetters(html) {
  const source = String(html || "");
  const letters = [];
  const grammarAnchorRegex = /dwdswb-ft-blocklabel[^>]*>\s*Grammatik\s*<\/span>\s*<span[^>]*dwdswb-ft-blocktext/gi;

  for (const match of source.matchAll(grammarAnchorRegex)) {
    const start = Number(match.index || 0);
    const windowText = source.slice(start, start + 1200);
    const nounGenderMatches = [...windowText.matchAll(/Substantiv\s*\((Maskulinum|Femininum|Neutrum)\)/gi)];
    for (const nounMatch of nounGenderMatches) {
      const marker = String(nounMatch[1] || "").toLowerCase();
      if (marker.startsWith("mask")) letters.push("m");
      if (marker.startsWith("fem")) letters.push("f");
      if (marker.startsWith("neu")) letters.push("n");
    }
    if (letters.length > 0) break;
  }

  return unique(letters);
}

function extractDwdsLemmaFromFinalUrl(finalUrl) {
  try {
    const url = new URL(finalUrl);
    if (!url.pathname.startsWith("/wb/")) return null;
    const encoded = url.pathname.slice("/wb/".length);
    if (!encoded) return null;
    return decodeURIComponent(encoded).trim() || null;
  } catch {
    return null;
  }
}

async function fetchDwdsHtml(page) {
  const url = new URL(`https://www.dwds.de/wb/${encodeURIComponent(page)}`);

  const response = await fetch(url, {
    headers: {
      "User-Agent": "GermanGenderTrainer/1.0 (local study app)"
    },
    redirect: "follow"
  });

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      type: "http_error",
      message: `DWDS request failed with status ${response.status}`
    };
  }

  const html = await response.text();
  if (!html || /<title>\s*404/i.test(html) || /keine Treffer/i.test(html)) {
    return {
      ok: false,
      status: 404,
      type: "missingtitle",
      message: "DWDS page not found"
    };
  }

  return {
    ok: true,
    finalUrl: response.url,
    html
  };
}

async function lookupWordGenderViaDwds(rawWord) {
  const normalizedInput = normalizeInputWord(rawWord);
  if (!normalizedInput) {
    return {
      found: false,
      reason: "empty_query",
      message: "Please enter a word."
    };
  }

  const candidates = buildLookupCandidates(normalizedInput);
  let lastError = null;

  for (const candidate of candidates) {
    const result = await fetchDwdsHtml(candidate);
    if (!result.ok) {
      if (result.type !== "missingtitle") {
        lastError = result;
      }
      continue;
    }

    const genusLetters = extractDwdsGenderLetters(result.html);
    if (genusLetters.length === 0) {
      continue;
    }

    const finalLemma = extractDwdsLemmaFromFinalUrl(result.finalUrl) || capitalizeGermanNoun(candidate);
    let resolvedFromForm = null;
    const lookupPath = [];

    try {
      const finalUrl = new URL(result.finalUrl);
      const originalForm = finalUrl.searchParams.get("o");
      const resolvedInput = originalForm || candidate;
      if (normalizeInputWord(resolvedInput) !== normalizeInputWord(finalLemma)) {
        resolvedFromForm = resolvedInput;
        lookupPath.push(resolvedInput, finalLemma);
      }
    } catch {
      if (normalizeInputWord(candidate) !== normalizeInputWord(finalLemma)) {
        resolvedFromForm = candidate;
        lookupPath.push(candidate, finalLemma);
      }
    }

    const englishMeaning = await translateGermanToEnglishWord(finalLemma);
    return {
      found: true,
      source: "dwds.de",
      normalizedWord: finalLemma,
      ambiguous: genusLetters.length > 1,
      ...(resolvedFromForm ? { resolvedFromForm } : {}),
      ...(lookupPath.length > 1 ? { lookupPath } : {}),
      ...(englishMeaning ? { englishMeaning } : {}),
      results: genusLetters.map((letter) => ({
        genus: letter,
        ...GENDER_MAP[letter]
      }))
    };
  }

  if (lastError) {
    throw new Error(lastError.message || "DWDS lookup failed");
  }

  return {
    found: false,
    reason: "not_found",
    message: "This word was not found in the DWDS noun lookup.",
    normalizedWord: capitalizeGermanNoun(normalizedInput)
  };
}

async function lookupWordGenderViaWiktionary(rawWord) {
  const normalizedInput = normalizeInputWord(rawWord);
  if (!normalizedInput) {
    return {
      found: false,
      reason: "empty_query",
      message: "Please enter a word.",
      source: "backend"
    };
  }

  const candidates = buildLookupCandidates(normalizedInput);
  const queue = candidates.map((candidate) => ({
    title: candidate,
    depth: 0,
    path: [candidate]
  }));
  const visited = new Set();
  let lastNonMissingError = null;
  let noGenderPageFallback = null;
  let bestResolutionPath = null;

  while (queue.length > 0 && visited.size < 20) {
    const current = queue.shift();
    if (!current || !current.title) continue;

    const visitedKey = String(current.title).toLocaleLowerCase("de-DE");
    if (visited.has(visitedKey)) {
      continue;
    }
    visited.add(visitedKey);

    const result = await fetchWiktionaryWikitext(current.title);
    if (!result.ok) {
      if (result.type !== "missingtitle") {
        lastNonMissingError = result;
      }
      continue;
    }

    const genusLetters = extractGenusLettersFromPage(result.wikitext);

    if (genusLetters.length > 0) {
      const englishMeaning = await translateGermanToEnglishWord(result.title);
      const resolvedPath = [...(current.path || [])];
      bestResolutionPath = resolvedPath;
      return {
        found: true,
        source: "de.wiktionary.org",
        normalizedWord: result.title,
        ambiguous: genusLetters.length > 1,
        ...(resolvedPath.length > 1 ? {
          resolvedFromForm: resolvedPath[0],
          lookupPath: resolvedPath
        } : {}),
        ...(englishMeaning ? { englishMeaning } : {}),
        results: genusLetters.map((letter) => ({
          genus: letter,
          ...GENDER_MAP[letter]
        }))
      };
    }

    if (!noGenderPageFallback) {
      noGenderPageFallback = {
        title: result.title
      };
    }

    if (current.depth >= 2) {
      continue;
    }

    const lemmaRefs = extractLemmaReferences(result.wikitext)
      .map(normalizeWiktionaryLemmaCandidate)
      .filter(Boolean)
      .filter((lemma) => lemma.toLocaleLowerCase("de-DE") !== result.title.toLocaleLowerCase("de-DE"));

    for (const lemma of lemmaRefs.slice(0, 8)) {
      const nextKey = lemma.toLocaleLowerCase("de-DE");
      if (visited.has(nextKey)) continue;
      queue.push({
        title: lemma,
        depth: current.depth + 1,
        path: [...(current.path || [current.title]), lemma]
      });
    }
  }

  if (lastNonMissingError && !noGenderPageFallback) {
    throw new Error(lastNonMissingError.message || "Live dictionary lookup failed");
  }

  if (!noGenderPageFallback) {
    return {
      found: false,
      reason: "not_found",
      message: "This word was not found in the live Wiktionary lookup.",
      source: "de.wiktionary.org",
      normalizedWord: capitalizeGermanNoun(normalizedInput),
      heuristicGuess: heuristicGuess(normalizedInput)
    };
  }

  return {
    found: false,
    reason: "no_german_noun_gender_found",
    message: "Found a page, but no German noun gender could be extracted (including inflected-form resolution).",
    source: "de.wiktionary.org",
    normalizedWord: noGenderPageFallback.title,
    ...(bestResolutionPath && bestResolutionPath.length > 1 ? { lookupPath: bestResolutionPath } : {}),
    heuristicGuess: heuristicGuess(normalizedInput)
  };
}

async function lookupWordGenderLive(rawWord) {
  let wiktionaryResult = null;
  let wiktionaryError = null;

  try {
    wiktionaryResult = await lookupWordGenderViaWiktionary(rawWord);
    if (wiktionaryResult.found) {
      return wiktionaryResult;
    }
  } catch (error) {
    wiktionaryError = error;
  }

  let dwdsResult = null;
  let dwdsError = null;

  try {
    dwdsResult = await lookupWordGenderViaDwds(rawWord);
    if (dwdsResult.found) {
      return dwdsResult;
    }
  } catch (error) {
    dwdsError = error;
  }

  if (wiktionaryError && dwdsError) {
    throw new Error("The dictionary lookup is not available right now.");
  }

  const normalizedInput = normalizeInputWord(rawWord);
  const wikiGuess = wiktionaryResult?.heuristicGuess || heuristicGuess(normalizedInput);
  const mergedPath = Array.isArray(wiktionaryResult?.lookupPath)
    ? wiktionaryResult.lookupPath
    : (Array.isArray(dwdsResult?.lookupPath) ? dwdsResult.lookupPath : null);

  return {
    found: false,
    reason: "not_found_multisource",
    message: "This noun could not be found yet. Try the singular base form (for example: Berge -> Berg).",
    normalizedWord: capitalizeGermanNoun(normalizedInput),
    ...(mergedPath ? { lookupPath: mergedPath } : {}),
    ...(wikiGuess ? { heuristicGuess: wikiGuess } : {}),
    source: "multi-dictionary"
  };
}

const server = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (requestUrl.pathname === "/api/sentence/translate") {
    if (req.method !== "GET") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    try {
      const text = normalizeSentenceInput(requestUrl.searchParams.get("text") || "");
      if (!text) {
        sendJson(res, 400, { error: "Please type a German sentence first." });
        return;
      }

      const englishTranslation = await translateGermanSentenceToEnglish(text);
      sendJson(res, 200, {
        ok: true,
        sentence: text,
        englishTranslation: englishTranslation || null,
        source: "api.mymemory.translated.net"
      });
    } catch (error) {
      sendJson(res, 502, {
        error: error.message || "Live sentence translation failed"
      });
    }
    return;
  }

  if (requestUrl.pathname === "/api/sentence/validate") {
    if (req.method !== "GET") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    try {
      const result = await validateGermanSentence(requestUrl.searchParams.get("text") || "", {
        mode: requestUrl.searchParams.get("mode") || "grammar"
      });
      if (!result.ok) {
        sendJson(res, 400, result);
        return;
      }

      sendJson(res, 200, {
        ...result,
        sources: {
          translation: "api.mymemory.translated.net",
          validation: "api.languagetool.org"
        }
      });
    } catch (error) {
      sendJson(res, 502, {
        error: error.message || "Sentence validation failed"
      });
    }
    return;
  }

  if (requestUrl.pathname === "/api/gender") {
    if (req.method !== "GET") {
      sendJson(res, 405, { error: "Method not allowed" });
      return;
    }

    try {
      const word = requestUrl.searchParams.get("word") || "";
      const result = await lookupWordGenderLive(word);
      sendJson(res, 200, result);
    } catch (error) {
      sendJson(res, 502, {
        error: error.message || "Live lookup failed"
      });
    }
    return;
  }

  if (req.method !== "GET") {
    sendText(res, 405, "Method Not Allowed");
    return;
  }

  await serveStatic(res, requestUrl.pathname);
});

server.listen(PORT, () => {
  console.log(`German Gender Trainer running at http://localhost:${PORT}`);
});
