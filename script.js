const words = [
  { word: "Tisch", article: "der", gender: "masculine", meaning: "table", tip: "Many everyday objects like der Tisch are masculine." },
  { word: "Stuhl", article: "der", gender: "masculine", meaning: "chair", tip: "Practice with rooms: der Tisch, der Stuhl." },
  { word: "Apfel", article: "der", gender: "masculine", meaning: "apple", tip: "Food vocabulary is mixed, so memorize with the article each time." },
  { word: "Lehrer", article: "der", gender: "masculine", meaning: "male teacher", tip: "People with -er are often masculine: der Lehrer." },
  { word: "Hund", article: "der", gender: "masculine", meaning: "dog", tip: "Animals can vary; always learn article + noun together." },
  { word: "Tag", article: "der", gender: "masculine", meaning: "day", tip: "Time word: der Tag. Repeat with Guten Tag." },
  { word: "Zug", article: "der", gender: "masculine", meaning: "train", tip: "Travel set: der Zug, das Ticket, die Reise." },
  { word: "Computer", article: "der", gender: "masculine", meaning: "computer", tip: "Borrowed nouns are often masculine, but not always." },

  { word: "Frau", article: "die", gender: "feminine", meaning: "woman", tip: "People can be gendered nouns: die Frau, der Mann." },
  { word: "Tasche", article: "die", gender: "feminine", meaning: "bag", tip: "Many nouns ending in -e are feminine (common pattern, not a rule)." },
  { word: "Schule", article: "die", gender: "feminine", meaning: "school", tip: "Try phrase memory: die Schule ist groß." },
  { word: "Lampe", article: "die", gender: "feminine", meaning: "lamp", tip: "Room vocabulary pair: die Lampe + der Tisch." },
  { word: "Zeitung", article: "die", gender: "feminine", meaning: "newspaper", tip: "Words ending in -ung are usually feminine." },
  { word: "Stadt", article: "die", gender: "feminine", meaning: "city", tip: "Location word: die Stadt. Practice with in der Stadt." },
  { word: "Milch", article: "die", gender: "feminine", meaning: "milk", tip: "Many liquids are feminine, but memorize case-by-case." },
  { word: "Musik", article: "die", gender: "feminine", meaning: "music", tip: "Abstract nouns are often feminine: die Musik, die Sprache." },

  { word: "Haus", article: "das", gender: "neuter", meaning: "house", tip: "Classic beginner noun: das Haus." },
  { word: "Kind", article: "das", gender: "neuter", meaning: "child", tip: "Many young beings use neuter: das Kind." },
  { word: "Auto", article: "das", gender: "neuter", meaning: "car", tip: "Vehicles vary, so store article with the noun." },
  { word: "Buch", article: "das", gender: "neuter", meaning: "book", tip: "Study phrase: das Buch lesen." },
  { word: "Wasser", article: "das", gender: "neuter", meaning: "water", tip: "Common substance noun: das Wasser." },
  { word: "Fenster", article: "das", gender: "neuter", meaning: "window", tip: "Room vocabulary set: das Fenster, die Tür, der Tisch." },
  { word: "Mädchen", article: "das", gender: "neuter", meaning: "girl", tip: "Words ending in -chen are always neuter." },
  { word: "Telefon", article: "das", gender: "neuter", meaning: "telephone", tip: "Borrowed nouns are mixed: compare das Telefon vs der Computer." }
];

const accusativeSteps = [
  {
    shortLabel: "What",
    title: "Step 1: What is the Accusative?",
    explanation:
      "The accusative case usually marks the direct object. The direct object receives the action in the sentence.",
    bullets: [
      "Ask: Who/what receives the action?",
      "Example: Ich lese das Buch. (What am I reading? das Buch.)",
      "You will often see it with common verbs like haben, sehen, kaufen, brauchen."
    ],
    exampleLines: [
      "Nominative subject: <em>Ich</em> lese das Buch.",
      "Accusative object: Ich lese <em>das Buch</em>."
    ],
    miniCheck: {
      prompt: "Which part is the direct object (accusative) in: Ich kaufe eine Tasche?",
      options: ["Ich", "kaufe", "eine Tasche", "keine - this sentence has no object"],
      correctIndex: 2,
      explanation: "Eine Tasche receives the action (buying), so it is the accusative object."
    }
  },
  {
    shortLabel: "Find It",
    title: "Step 2: Find the Accusative in a Sentence",
    explanation:
      "First find the verb, then ask 'what?' or 'whom?' after the verb. The answer is usually the accusative object.",
    bullets: [
      "Ich sehe den Hund. -> What do I see? den Hund.",
      "Wir haben ein Auto. -> What do we have? ein Auto.",
      "Sie kennt den Lehrer. -> Whom does she know? den Lehrer."
    ],
    exampleLines: [
      "Ich sehe <em>den Hund</em>.",
      "Wir haben <em>ein Auto</em>."
    ],
    miniCheck: {
      prompt: "In 'Wir brauchen das Wasser', what is the accusative object?",
      options: ["Wir", "brauchen", "das Wasser", "There is no accusative object"],
      correctIndex: 2,
      explanation: "Das Wasser is the thing needed, so it is the direct object."
    }
  },
  {
    shortLabel: "Articles",
    title: "Step 3: Articles in the Accusative",
    explanation:
      "For beginners, the key rule is simple: in singular, only masculine changes (der -> den). Feminine and neuter stay the same. Plural die also stays die.",
    bullets: [
      "Masculine: der Mann -> den Mann",
      "Feminine: die Frau -> die Frau (no change)",
      "Neuter: das Kind -> das Kind (no change)",
      "Plural: die Kinder -> die Kinder (no change)"
    ],
    exampleLines: [
      "Ich sehe <em>den Mann</em>.",
      "Ich sehe <em>die Frau</em>.",
      "Ich sehe <em>das Kind</em>."
    ],
    miniCheck: {
      prompt: "Choose the correct phrase: Ich habe ___ Hund.",
      options: ["der Hund", "den Hund", "die Hund", "das Hund"],
      correctIndex: 1,
      explanation: "Hund is masculine, so der changes to den in the accusative."
    }
  },
  {
    shortLabel: "Verbs",
    title: "Step 4: Common Verbs That Use the Accusative",
    explanation:
      "Many very common verbs take a direct object in the accusative. Learn them with a simple sentence pattern.",
    bullets: [
      "haben (to have): Ich habe ein Buch.",
      "sehen (to see): Ich sehe den Zug.",
      "brauchen (to need): Ich brauche die Tasche.",
      "kaufen (to buy): Ich kaufe das Brot."
    ],
    exampleLines: [
      "Pattern: Subject + verb + <em>accusative object</em>",
      "Ich brauche <em>die Tasche</em>."
    ],
    miniCheck: {
      prompt: "Complete the pattern with a correct accusative object: Ich sehe ...",
      options: ["der Lehrer", "den Lehrer", "dem Lehrer", "des Lehrers"],
      correctIndex: 1,
      explanation: "Lehrer is masculine, so as a direct object it becomes den Lehrer."
    }
  },
  {
    shortLabel: "More",
    title: "Step 5: Pronouns and Common Accusative Prepositions",
    explanation:
      "You will also meet accusative forms with pronouns and with some prepositions. Start small and memorize the most common forms.",
    bullets: [
      "Pronouns: ich -> mich, du -> dich, er -> ihn, sie -> sie, es -> es",
      "Common accusative prepositions: durch, für, ohne, gegen, um",
      "Example: Das Geschenk ist für dich."
    ],
    exampleLines: [
      "Er sieht <em>mich</em>.",
      "Das ist für <em>dich</em>."
    ],
    miniCheck: {
      prompt: "Choose the correct pronoun: Sie sieht ___ (he).",
      options: ["er", "ihm", "ihn", "sein"],
      correctIndex: 2,
      explanation: "The accusative form of er is ihn."
    }
  }
];

const accusativeQuizQuestions = [
  {
    category: "Article Change",
    prompt: "Ich sehe ___ Mann.",
    hint: "Masculine singular direct object",
    options: ["der", "den", "dem", "die"],
    correctIndex: 1,
    explanation: "Masculine singular article changes from der to den in the accusative."
  },
  {
    category: "No Change (Feminine)",
    prompt: "Ich habe ___ Tasche.",
    hint: "Tasche is feminine",
    options: ["die", "den", "der", "das"],
    correctIndex: 0,
    explanation: "Feminine die stays die in the accusative."
  },
  {
    category: "No Change (Neuter)",
    prompt: "Wir brauchen ___ Buch.",
    hint: "Buch is neuter",
    options: ["den", "das", "dem", "die"],
    correctIndex: 1,
    explanation: "Neuter das stays das in the accusative."
  },
  {
    category: "Find Object",
    prompt: "What is the accusative object in: Ich kenne den Lehrer.",
    hint: "Ask: Whom do I know?",
    options: ["Ich", "kenne", "den Lehrer", "No object"],
    correctIndex: 2,
    explanation: "Den Lehrer receives the action and is the direct object."
  },
  {
    category: "Pronouns",
    prompt: "Er hört ___ (I/me).",
    hint: "Accusative pronoun",
    options: ["ich", "mir", "mich", "mein"],
    correctIndex: 2,
    explanation: "The accusative form of ich is mich."
  },
  {
    category: "Prepositions",
    prompt: "Das Geschenk ist für ___.",
    hint: "Use the accusative pronoun for 'you' (singular informal)",
    options: ["du", "dich", "dir", "dein"],
    correctIndex: 1,
    explanation: "Für takes the accusative, so the correct pronoun is dich."
  },
  {
    category: "Plural",
    prompt: "Ich sehe ___ Kinder.",
    hint: "Plural article in accusative",
    options: ["die", "den", "der", "das"],
    correctIndex: 0,
    explanation: "Plural die stays die in the accusative."
  },
  {
    category: "Article Choice",
    prompt: "Choose the correct sentence.",
    hint: "Only one sentence has the correct accusative masculine article",
    options: ["Ich sehe der Hund.", "Ich sehe den Hund.", "Ich sehe dem Hund.", "Ich sehe des Hund."],
    correctIndex: 1,
    explanation: "Hund is a masculine direct object, so den Hund is correct."
  }
];

const possessiveSteps = [
  {
    shortLabel: "What",
    title: "Step 1: What are Possessive Articles?",
    explanation:
      "Possessive articles show ownership and stand before a noun. In English: my, your, his, her, our.",
    bullets: [
      "German examples: mein Buch, deine Tasche, sein Auto.",
      "They change their ending depending on noun gender and case.",
      "Start by learning the stem first (mein-, dein-, sein-, ihr-)."
    ],
    exampleLines: [
      "English: my book -> <em>mein Buch</em>",
      "English: my bag -> <em>meine Tasche</em>"
    ],
    miniCheck: {
      prompt: "What does a possessive article tell you?",
      options: ["Only the verb tense", "Ownership / relationship to the noun", "Plural only", "Question type"],
      correctIndex: 1,
      explanation: "Possessive articles show who something belongs to (my/your/his/her...)."
    }
  },
  {
    shortLabel: "Nominative",
    title: "Step 2: Basic Endings in the Nominative",
    explanation:
      "For beginner nouns in the nominative, possessive articles often follow the same pattern as ein-words.",
    bullets: [
      "Masculine: mein Hund",
      "Neuter: mein Auto",
      "Feminine: meine Tasche",
      "Plural: meine Bücher"
    ],
    exampleLines: [
      "Das ist <em>mein Hund</em>.",
      "Das sind <em>meine Bücher</em>."
    ],
    miniCheck: {
      prompt: "Choose the correct phrase for 'my bag' (die Tasche):",
      options: ["mein Tasche", "meine Tasche", "meinen Tasche", "meiner Tasche"],
      correctIndex: 1,
      explanation: "Tasche is feminine, so nominative uses meine."
    }
  },
  {
    shortLabel: "Accusative",
    title: "Step 3: Possessive Articles in the Accusative",
    explanation:
      "In the accusative, the main beginner change is masculine singular. The possessive article gets -en (like meinen).",
    bullets: [
      "Masculine accusative: meinen Hund",
      "Feminine accusative: meine Tasche (no extra change here)",
      "Neuter accusative: mein Auto",
      "Plural accusative: meine Bücher"
    ],
    exampleLines: [
      "Ich sehe <em>meinen Hund</em>.",
      "Ich habe <em>mein Auto</em>."
    ],
    miniCheck: {
      prompt: "Complete: Ich kenne ___ Lehrer. (my)",
      options: ["mein", "meine", "meinen", "meinem"],
      correctIndex: 2,
      explanation: "Lehrer is masculine and is the direct object here, so accusative uses meinen."
    }
  },
  {
    shortLabel: "Practice",
    title: "Step 4: Build Full Phrases and Sentences",
    explanation:
      "Pick the owner first, then noun gender, then case. Say the full phrase out loud to build automatic memory.",
    bullets: [
      "Good habit: memorize chunks, not isolated words.",
      "Example chunks: mein Buch, meine Tasche, meinen Hund.",
      "Then place them in sentences: Ich habe mein Buch. / Ich sehe meinen Hund."
    ],
    exampleLines: [
      "Chunk first: <em>dein Auto</em>",
      "Sentence: Ich sehe <em>dein Auto</em>."
    ],
    miniCheck: {
      prompt: "Which is correct for 'our books' (nominative plural)?",
      options: ["unser Bücher", "unsere Bücher", "unseren Bücher", "unseres Bücher"],
      correctIndex: 1,
      explanation: "Plural nominative uses -e here: unsere Bücher."
    }
  }
];

const possessiveQuizQuestions = [
  {
    category: "Nominative Feminine",
    prompt: "Das ist ___ Tasche. (my)",
    hint: "die Tasche, nominative",
    options: ["mein", "meine", "meinen", "meiner"],
    correctIndex: 1,
    explanation: "Feminine nominative uses meine."
  },
  {
    category: "Nominative Neuter",
    prompt: "Das ist ___ Auto. (his)",
    hint: "das Auto, nominative",
    options: ["sein", "seine", "seinen", "seinem"],
    correctIndex: 0,
    explanation: "Neuter nominative uses sein (no -e)."
  },
  {
    category: "Accusative Masculine",
    prompt: "Ich sehe ___ Hund. (your, informal singular)",
    hint: "der Hund -> accusative direct object",
    options: ["dein", "deine", "deinen", "deinem"],
    correctIndex: 2,
    explanation: "Masculine accusative takes -en: deinen Hund."
  },
  {
    category: "Plural",
    prompt: "Das sind ___ Bücher. (our)",
    hint: "plural nominative",
    options: ["unser", "unsere", "unseren", "unseres"],
    correctIndex: 1,
    explanation: "Plural nominative uses unsere."
  },
  {
    category: "Formal You",
    prompt: "Ist das ___ Schule? (your, formal)",
    hint: "die Schule, nominative",
    options: ["Ihr", "Ihre", "Ihren", "Ihrem"],
    correctIndex: 1,
    explanation: "Formal possessive stem is Ihr-, and feminine nominative is Ihre."
  },
  {
    category: "Sentence Choice",
    prompt: "Choose the correct sentence:",
    hint: "Accusative masculine object",
    options: ["Ich kenne mein Bruder.", "Ich kenne meinen Bruder.", "Ich kenne meine Bruder.", "Ich kenne meinem Bruder."],
    correctIndex: 1,
    explanation: "Bruder is masculine and direct object here, so meinen Bruder."
  },
  {
    category: "Nominative Masculine",
    prompt: "Das ist ___ Lehrer. (her)",
    hint: "der Lehrer, nominative",
    options: ["ihr", "ihre", "ihren", "ihrem"],
    correctIndex: 0,
    explanation: "Masculine nominative uses ihr (no ending)."
  },
  {
    category: "Accusative Neuter",
    prompt: "Ich habe ___ Buch. (my)",
    hint: "das Buch, accusative",
    options: ["mein", "meine", "meinen", "meinem"],
    correctIndex: 0,
    explanation: "Neuter accusative stays mein (no -e/-en here)."
  }
];

const possessiveOwnerMap = {
  ich: { stem: "mein", label: "my" },
  du: { stem: "dein", label: "your (informal singular)" },
  er: { stem: "sein", label: "his" },
  sie: { stem: "ihr", label: "her" },
  wir: { stem: "unser", label: "our" },
  ihr: { stem: "euer", label: "your (plural informal)" },
  Sie: { stem: "Ihr", label: "your (formal)" }
};

const drillPhraseMap = {
  "der Hund": {
    accusative: "den Hund",
    note: "Masculine singular changes: der -> den."
  },
  "die Frau": {
    accusative: "die Frau",
    note: "Feminine does not change in the accusative."
  },
  "das Kind": {
    accusative: "das Kind",
    note: "Neuter does not change in the accusative."
  },
  "die Kinder": {
    accusative: "die Kinder",
    note: "Plural die stays die in the accusative."
  },
  "der Lehrer": {
    accusative: "den Lehrer",
    note: "Masculine singular changes: der -> den."
  },
  "das Buch": {
    accusative: "das Buch",
    note: "Neuter does not change in the accusative."
  }
};

const form = document.getElementById("lookup-form");
const input = document.getElementById("word-input");
const submitButton = form.querySelector("button[type='submit']");
const resultCard = document.getElementById("result-card");
const wordList = document.getElementById("word-list");
const stats = document.getElementById("stats");
const randomBtn = document.getElementById("random-btn");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn[data-filter]"));
const genderBatchWordInput = document.getElementById("gender-batch-word-input");
const genderBatchAddBtn = document.getElementById("gender-batch-add-btn");
const genderBatchTagsWrap = document.getElementById("gender-batch-tags");
const genderBatchCountChip = document.getElementById("gender-batch-count");
const genderBatchModeToggle = document.getElementById("gender-batch-mode-toggle");
const genderBatchModeSimpleBtn = document.getElementById("gender-batch-mode-simple-btn");
const genderBatchModeComplexBtn = document.getElementById("gender-batch-mode-complex-btn");
const genderBatchGenerateBtn = document.getElementById("gender-batch-generate-btn");
const genderBatchClearBtn = document.getElementById("gender-batch-clear-btn");
const genderBatchStatus = document.getElementById("gender-batch-status");
const genderBatchResults = document.getElementById("gender-batch-results");

const tabButtons = Array.from(document.querySelectorAll(".tab-btn"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));

const accStepProgress = document.getElementById("acc-step-progress");
const accStepperDots = document.getElementById("acc-stepper-dots");
const accStepContent = document.getElementById("acc-step-content");
const accPrevStepBtn = document.getElementById("acc-prev-step");
const accNextStepBtn = document.getElementById("acc-next-step");
const accPhraseSelect = document.getElementById("acc-phrase-select");
const accVerbSelect = document.getElementById("acc-verb-select");
const accDrillResult = document.getElementById("acc-drill-result");
const accQuizScore = document.getElementById("acc-quiz-score");
const accQuizCard = document.getElementById("acc-quiz-card");
const accQuizOptions = document.getElementById("acc-quiz-options");
const accQuizFeedback = document.getElementById("acc-quiz-feedback");
const accQuizCheckBtn = document.getElementById("acc-quiz-check");
const accQuizNextBtn = document.getElementById("acc-quiz-next");
const accQuizResetBtn = document.getElementById("acc-quiz-reset");

const posStepProgress = document.getElementById("pos-step-progress");
const posStepperDots = document.getElementById("pos-stepper-dots");
const posStepContent = document.getElementById("pos-step-content");
const posPrevStepBtn = document.getElementById("pos-prev-step");
const posNextStepBtn = document.getElementById("pos-next-step");
const posOwnerSelect = document.getElementById("pos-owner-select");
const posNounSelect = document.getElementById("pos-noun-select");
const posCaseSelect = document.getElementById("pos-case-select");
const posBuilderResult = document.getElementById("pos-builder-result");
const posQuizScore = document.getElementById("pos-quiz-score");
const posQuizCard = document.getElementById("pos-quiz-card");
const posQuizOptions = document.getElementById("pos-quiz-options");
const posQuizFeedback = document.getElementById("pos-quiz-feedback");
const posQuizCheckBtn = document.getElementById("pos-quiz-check");
const posQuizNextBtn = document.getElementById("pos-quiz-next");
const posQuizResetBtn = document.getElementById("pos-quiz-reset");

const timeNowBtn = document.getElementById("time-now-btn");
const timeRandomBtn = document.getElementById("time-random-btn");
const timeHourInput = document.getElementById("time-hour-input");
const timeMinuteInput = document.getElementById("time-minute-input");
const timeDigitalChip = document.getElementById("time-digital-chip");
const time12hChip = document.getElementById("time-12h-chip");
const clockFace = document.getElementById("clock-face");
const clockHourHand = document.getElementById("clock-hour-hand");
const clockMinuteHand = document.getElementById("clock-minute-hand");
const timeOfficialCard = document.getElementById("time-official-card");
const timeUnofficialCard = document.getElementById("time-unofficial-card");
const numbersPanel = document.getElementById("panel-numbers");
const numbersRandomBtn = document.getElementById("numbers-random-btn");
const numbersValueRange = document.getElementById("numbers-value-range");
const numbersValueInput = document.getElementById("numbers-value-input");
const numbersQuickList = document.getElementById("numbers-quick-list");
const numbersCardinalCard = document.getElementById("numbers-cardinal-card");
const numbersOrdinalCard = document.getElementById("numbers-ordinal-card");
const numbersDateformCard = document.getElementById("numbers-dateform-card");
const numbersBreakdown = document.getElementById("numbers-breakdown");
const numbersBreakdownNote = document.getElementById("numbers-breakdown-note");
const numbersOrdinalReference = document.getElementById("numbers-ordinal-reference");
const numbersDaySelect = document.getElementById("numbers-day-select");
const numbersMonthSelect = document.getElementById("numbers-month-select");
const numbersDateTopicSelect = document.getElementById("numbers-date-topic-select");
const numbersDatePhraseCard = document.getElementById("numbers-date-phrase-card");
const numbersDateExampleCard = document.getElementById("numbers-date-example-card");
const numbersDateBreakdown = document.getElementById("numbers-date-breakdown");
const numbersQuizScore = document.getElementById("numbers-quiz-score");
const numbersQuizCard = document.getElementById("numbers-quiz-card");
const numbersQuizOptions = document.getElementById("numbers-quiz-options");
const numbersQuizFeedback = document.getElementById("numbers-quiz-feedback");
const numbersQuizCheckBtn = document.getElementById("numbers-quiz-check");
const numbersQuizNextBtn = document.getElementById("numbers-quiz-next");
const numbersQuizResetBtn = document.getElementById("numbers-quiz-reset");
const sentenceInput = document.getElementById("sentence-input");
const sentenceClearBtn = document.getElementById("sentence-clear-btn");
const sentenceLiveCard = document.getElementById("sentence-live-card");
const sentenceLiveTranslation = document.getElementById("sentence-live-translation");
const sentenceLiveStatus = document.getElementById("sentence-live-status");
const sentenceModeToggle = document.getElementById("sentence-mode-toggle");
const sentenceModeGrammarBtn = document.getElementById("sentence-mode-grammar-btn");
const sentenceModeStrictBtn = document.getElementById("sentence-mode-strict-btn");
const sentenceModeHelp = document.getElementById("sentence-mode-help");
const sentenceValidateBtn = document.getElementById("sentence-validate-btn");
const sentenceVerdictChip = document.getElementById("sentence-verdict-chip");
const sentenceOriginalCard = document.getElementById("sentence-original-card");
const sentenceCorrectedCard = document.getElementById("sentence-corrected-card");
const sentenceOriginalText = document.getElementById("sentence-original-text");
const sentenceCorrectedText = document.getElementById("sentence-corrected-text");
const sentenceOriginalActions = document.getElementById("sentence-original-actions");
const sentenceCorrectedActions = document.getElementById("sentence-corrected-actions");
const sentenceValidationMessage = document.getElementById("sentence-validation-message");
const sentenceIssuesList = document.getElementById("sentence-issues-list");
const sentenceAlternativesList = document.getElementById("sentence-alternatives-list");
const sentenceHistoryList = document.getElementById("sentence-history-list");
const sentenceHistoryClearBtn = document.getElementById("sentence-history-clear-btn");

let activeFilter = "all";
let highlightedWord = null;
let latestLookupRequest = 0;
let genderBatchMode = "simple";
let latestGenderBatchRequest = 0;
let genderBatchTags = [];
const genderBatchLookupCache = new Map();

let currentAccusativeStep = 0;
const accusativeStepState = accusativeSteps.map(() => ({
  selectedIndex: null,
  checked: false,
  completed: false
}));

let quizDeck = [];
let currentQuizQuestion = null;
let currentQuizQuestionIndex = -1;
let selectedQuizOptionIndex = null;
let quizAnswered = false;
let quizScoreState = { correct: 0, total: 0 };

let currentPossessiveStep = 0;
const possessiveStepState = possessiveSteps.map(() => ({
  selectedIndex: null,
  checked: false,
  completed: false
}));

let possessiveQuizDeck = [];
let currentPossessiveQuizQuestion = null;
let selectedPossessiveQuizOptionIndex = null;
let possessiveQuizAnswered = false;
let possessiveQuizScoreState = { correct: 0, total: 0 };

let clockMarkupBuilt = false;
let numbersQuizQuestion = null;
let numbersQuizSelectedIndex = null;
let numbersQuizAnswered = false;
let numbersQuizScoreState = { correct: 0, total: 0 };
let latestSentenceTranslateRequest = 0;
let latestSentenceValidateRequest = 0;
let sentenceTranslateDebounceTimer = null;
let sentenceValidationMode = "grammar";
let sentenceHistory = [];

const SENTENCE_HISTORY_STORAGE_KEY = "germanLearningSentenceHistoryV1";
const SENTENCE_HISTORY_LIMIT = 18;
const GENDER_BATCH_TAG_LIMIT = 10;
const NUMBERS_MAX_VALUE = 999;

const genderLabels = {
  masculine: "Masculine",
  feminine: "Feminine",
  neuter: "Neuter"
};

const numbersQuickPickValues = [
  0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15, 16, 18, 20, 21, 24, 30, 31, 42, 55, 99, 100, 101, 256, 999
];

const ordinalReferenceValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30];

const germanMonthNames = [
  "",
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember"
];

const englishMonthNames = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const numbersDateTopicTemplates = {
  birthday: {
    label: "Birthday",
    de(datePhrase) {
      return `Ich habe ${datePhrase} Geburtstag.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `My birthday is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Ich habe", en: "I have / It is my" },
    outroChip: { de: "Geburtstag", en: "birthday" }
  },
  exam: {
    label: "Exam",
    de(datePhrase) {
      return `Die Prüfung ist ${datePhrase}.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `The exam is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Die Prüfung ist", en: "The exam is" },
    outroChip: null
  },
  meeting: {
    label: "Appointment",
    de(datePhrase) {
      return `Der Termin ist ${datePhrase}.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `The appointment is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Der Termin ist", en: "The appointment is" },
    outroChip: null
  },
  holiday: {
    label: "Holiday",
    de(datePhrase) {
      return `Der Feiertag ist ${datePhrase}.`;
    },
    en(dayOrdinal, monthEnglish) {
      return `The holiday is on ${dayOrdinal} ${monthEnglish}.`;
    },
    introChip: { de: "Der Feiertag ist", en: "The holiday is" },
    outroChip: null
  }
};

const localWordMap = new Map();
for (const entry of words) {
  localWordMap.set(normalizeWord(entry.word), entry);
}

function normalizeWord(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/^(der|die|das)\s+/i, "")
    .replace(/[.,!?;:]+$/g, "")
    .normalize("NFC");
}

function searchWord(value) {
  const normalized = normalizeWord(value);
  return normalized ? localWordMap.get(normalized) || null : null;
}

function findSimilarWords(value) {
  const normalized = normalizeWord(value);
  if (!normalized) return [];

  return words
    .filter((entry) => entry.word.toLowerCase().includes(normalized))
    .slice(0, 5);
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderBreakdownChips(target, chips) {
  if (!target) return;
  const safeChips = Array.isArray(chips) ? chips.filter(Boolean) : [];

  if (safeChips.length === 0) {
    target.innerHTML = "<span class=\"sentence-breakdown__chip\"><strong>-</strong> Add input to see a breakdown.</span>";
    return;
  }

  target.innerHTML = safeChips.map((chip) => {
    const left = chip?.de ? `<strong>${escapeHtml(chip.de)}</strong>` : "<strong>-</strong>";
    const right = chip?.en ? ` = ${escapeHtml(chip.en)}` : "";
    return `<span class="sentence-breakdown__chip">${left}${right}</span>`;
  }).join("");
}

function getBadgeClass(gender) {
  return `badge badge--${gender}`;
}

function speechSupported() {
  return typeof window !== "undefined"
    && "speechSynthesis" in window
    && "SpeechSynthesisUtterance" in window;
}

function speakGermanText(text) {
  if (!speechSupported() || !text) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE";
  utterance.rate = 0.92;
  utterance.pitch = 1;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function buildSpeakButtonHtml(text, label) {
  if (!speechSupported() || !text) return "";

  return `
    <button
      type="button"
      class="speak-btn"
      data-speak-text="${escapeHtml(text)}"
      aria-label="${escapeHtml(label || "Speak German text")}"
      title="Speak pronunciation"
    >
      🔊
    </button>
  `;
}

function normalizeSentenceInputClient(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim()
    .normalize("NFC");
}

function canUseLocalStorage() {
  try {
    return typeof window !== "undefined" && !!window.localStorage;
  } catch {
    return false;
  }
}

function sentenceModeLabel(mode) {
  return mode === "strict" ? "Strict" : "Grammar Only";
}

function updateSentenceModeButtons() {
  const isGrammar = sentenceValidationMode !== "strict";
  const buttons = [sentenceModeGrammarBtn, sentenceModeStrictBtn].filter(Boolean);

  buttons.forEach((button) => {
    const isActive = button.dataset.sentenceMode === sentenceValidationMode;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("filter-btn--ghost", !isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (sentenceModeHelp) {
    sentenceModeHelp.textContent = isGrammar
      ? "Grammar Only checks grammar/spelling. Style suggestions are shown only in Strict mode."
      : "Strict mode counts grammar, spelling, and style suggestions in the verdict.";
  }
}

function setSentenceValidationMode(mode) {
  sentenceValidationMode = mode === "strict" ? "strict" : "grammar";
  updateSentenceModeButtons();
}

function loadSentenceHistoryFromStorage() {
  if (!canUseLocalStorage()) return [];

  try {
    const raw = window.localStorage.getItem(SENTENCE_HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => ({
        id: String(item?.id || `${Date.now()}-${Math.random()}`),
        timestamp: Number(item?.timestamp || Date.now()),
        sentence: normalizeSentenceInputClient(item?.sentence || ""),
        correctedSentence: normalizeSentenceInputClient(item?.correctedSentence || item?.sentence || ""),
        englishTranslation: item?.englishTranslation ? String(item.englishTranslation) : null,
        isCorrect: Boolean(item?.isCorrect),
        issueCount: Math.max(0, Number(item?.issueCount || 0)),
        mode: item?.mode === "strict" ? "strict" : "grammar"
      }))
      .filter((item) => item.sentence)
      .slice(0, SENTENCE_HISTORY_LIMIT);
  } catch {
    return [];
  }
}

function saveSentenceHistoryToStorage() {
  if (!canUseLocalStorage()) return;

  try {
    window.localStorage.setItem(
      SENTENCE_HISTORY_STORAGE_KEY,
      JSON.stringify(sentenceHistory.slice(0, SENTENCE_HISTORY_LIMIT))
    );
  } catch {
    // Ignore storage quota / privacy mode errors.
  }
}

function formatHistoryTimestamp(timestamp) {
  try {
    return new Date(timestamp).toLocaleString();
  } catch {
    return "";
  }
}

function renderSentenceHistory() {
  if (!sentenceHistoryList) return;

  if (!Array.isArray(sentenceHistory) || sentenceHistory.length === 0) {
    sentenceHistoryList.innerHTML = "<p class=\"muted\">No history yet. Validate a sentence to save it here.</p>";
    return;
  }

  sentenceHistoryList.innerHTML = sentenceHistory.map((entry) => {
    const correctedDifferent = normalizeSentenceInputClient(entry.correctedSentence) !== normalizeSentenceInputClient(entry.sentence);
    const english = entry.englishTranslation ? `<p class="sentence-history-item__meta"><strong>English:</strong> ${escapeHtml(entry.englishTranslation)}</p>` : "";
    const corrected = correctedDifferent
      ? `<p class="sentence-history-item__corrected">Corrected: ${escapeHtml(entry.correctedSentence)}</p>`
      : "";

    return `
      <article class="sentence-history-item" data-history-id="${escapeHtml(entry.id)}">
        <div class="sentence-history-item__top">
          <div class="sentence-history-item__badges">
            <span class="sentence-history-badge ${entry.isCorrect ? "is-correct" : "is-wrong"}">
              ${entry.isCorrect ? "Correct" : `Needs fix (${entry.issueCount})`}
            </span>
            <span class="sentence-history-badge ${entry.mode === "strict" ? "is-strict" : "is-grammar"}">
              ${escapeHtml(sentenceModeLabel(entry.mode))}
            </span>
          </div>
          <p class="sentence-history-item__meta">${escapeHtml(formatHistoryTimestamp(entry.timestamp))}</p>
        </div>
        <p class="sentence-history-item__sentence">${escapeHtml(entry.sentence)}</p>
        ${corrected}
        ${english}
        <div class="sentence-history-actions">
          <button type="button" class="filter-btn filter-btn--ghost" data-history-action="use-original">Use Sentence</button>
          <button type="button" class="filter-btn filter-btn--ghost" data-history-action="use-corrected" ${correctedDifferent ? "" : "disabled"}>Use Corrected</button>
          <button type="button" class="filter-btn" data-history-action="revalidate">Validate Again</button>
        </div>
      </article>
    `;
  }).join("");
}

function addSentenceHistoryEntry(payload) {
  const validation = payload?.validation || {};
  const sentence = normalizeSentenceInputClient(payload?.sentence || "");
  if (!sentence) return;

  const correctedSentence = normalizeSentenceInputClient(validation.correctedSentence || sentence);
  const mode = validation.mode === "strict" ? "strict" : "grammar";
  const dedupeKey = `${mode}::${sentence.toLocaleLowerCase("de-DE")}`;

  sentenceHistory = sentenceHistory.filter((entry) => {
    const key = `${entry.mode}::${entry.sentence.toLocaleLowerCase("de-DE")}`;
    return key !== dedupeKey;
  });

  sentenceHistory.unshift({
    id: `${Date.now()}-${Math.floor(Math.random() * 1_000_000)}`,
    timestamp: Date.now(),
    sentence,
    correctedSentence,
    englishTranslation: payload?.englishTranslation || null,
    isCorrect: Boolean(validation.isCorrect),
    issueCount: Math.max(0, Number(validation.issueCount || 0)),
    mode
  });

  sentenceHistory = sentenceHistory.slice(0, SENTENCE_HISTORY_LIMIT);
  saveSentenceHistoryToStorage();
  renderSentenceHistory();
}

function findSentenceHistoryEntryById(id) {
  return sentenceHistory.find((entry) => entry.id === id) || null;
}

function loadSentenceIntoEditor(text) {
  sentenceInput.value = text || "";
  scheduleLiveSentenceTranslation();
  sentenceInput.focus();
}

function getIssueBeginnerHint(issue) {
  if (issue?.beginnerHint && typeof issue.beginnerHint === "object") {
    const topic = String(issue.beginnerHint.topic || "grammar");
    const explanation = String(issue.beginnerHint.explanation || "").trim();
    if (explanation) {
      return { topic, explanation };
    }
  }

  return {
    topic: "grammar",
    explanation: "Compare the suggestion with the sentence context and check the verb, article, and noun ending agreement."
  };
}

function capitalizeGermanNounClient(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return `${text[0].toLocaleUpperCase("de-DE")}${text.slice(1)}`;
}

function normalizeGenderBatchTagInput(value) {
  return capitalizeGermanNounClient(normalizeWord(value));
}

function setGenderBatchStatus(message) {
  if (!genderBatchStatus) return;
  genderBatchStatus.textContent = message;
}

function renderGenderBatchModeButtons() {
  const buttons = [genderBatchModeSimpleBtn, genderBatchModeComplexBtn].filter(Boolean);
  buttons.forEach((button) => {
    const isActive = button.dataset.genderBatchMode === genderBatchMode;
    button.classList.toggle("is-active", isActive);
    button.classList.toggle("filter-btn--ghost", !isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setGenderBatchMode(mode) {
  genderBatchMode = mode === "complex" ? "complex" : "simple";
  renderGenderBatchModeButtons();
  const modeLabel = genderBatchMode === "complex" ? "complex" : "simple";
  setGenderBatchStatus(`Mode set to ${modeLabel} sentences. Add nouns as tags and click Generate.`);
}

function renderGenderBatchTags() {
  if (!genderBatchTagsWrap || !genderBatchCountChip) return;

  genderBatchCountChip.textContent = `${genderBatchTags.length} / ${GENDER_BATCH_TAG_LIMIT} tags`;

  if (genderBatchTags.length === 0) {
    genderBatchTagsWrap.innerHTML = "<p class=\"gender-batch-tags__empty\">No tags yet. Add nouns one by one (max 10).</p>";
  } else {
    genderBatchTagsWrap.innerHTML = genderBatchTags.map((tag) => `
      <span class="gender-batch-tag" data-gender-batch-tag="${escapeHtml(tag)}">
        <span class="gender-batch-tag__word">${escapeHtml(tag)}</span>
        <button
          type="button"
          class="gender-batch-tag__remove"
          data-gender-batch-remove="${escapeHtml(tag)}"
          aria-label="Remove tag ${escapeHtml(tag)}"
          title="Remove tag"
        >
          ×
        </button>
      </span>
    `).join("");
  }

  if (genderBatchAddBtn) {
    genderBatchAddBtn.disabled = genderBatchTags.length >= GENDER_BATCH_TAG_LIMIT;
  }
  if (genderBatchGenerateBtn) {
    genderBatchGenerateBtn.disabled = genderBatchTags.length === 0;
  }
  if (genderBatchClearBtn) {
    genderBatchClearBtn.disabled = genderBatchTags.length === 0;
  }
}

function addGenderBatchTag(rawValue) {
  const tag = normalizeGenderBatchTagInput(rawValue);
  if (!tag) {
    setGenderBatchStatus("Type a German noun first, then add it as a tag.");
    return false;
  }

  const exists = genderBatchTags.some((item) => normalizeWord(item) === normalizeWord(tag));
  if (exists) {
    setGenderBatchStatus(`Tag "${tag}" is already added.`);
    return false;
  }

  if (genderBatchTags.length >= GENDER_BATCH_TAG_LIMIT) {
    setGenderBatchStatus(`You can add up to ${GENDER_BATCH_TAG_LIMIT} tags only.`);
    return false;
  }

  genderBatchTags.push(tag);
  renderGenderBatchTags();
  setGenderBatchStatus(`Added "${tag}". ${genderBatchTags.length} / ${GENDER_BATCH_TAG_LIMIT} tags ready.`);
  return true;
}

function removeGenderBatchTag(tagValue) {
  const before = genderBatchTags.length;
  genderBatchTags = genderBatchTags.filter((tag) => normalizeWord(tag) !== normalizeWord(tagValue));
  if (genderBatchTags.length !== before) {
    renderGenderBatchTags();
    setGenderBatchStatus(`Removed "${tagValue}". ${genderBatchTags.length} / ${GENDER_BATCH_TAG_LIMIT} tags ready.`);
  }
}

function clearGenderBatchTags() {
  genderBatchTags = [];
  renderGenderBatchTags();
  setGenderBatchStatus("Tags cleared. Add nouns one by one (max 10).");
  if (genderBatchResults) {
    genderBatchResults.innerHTML = "<p class=\"muted\">Generated sentences will appear here.</p>";
  }
}

function renderGenderBatchLoading(tags, mode = genderBatchMode) {
  if (!genderBatchResults) return;

  genderBatchResults.innerHTML = tags.map((tag) => `
    <article class="gender-batch-card">
      <p class="gender-batch-card__label">Generating</p>
      <p class="gender-batch-card__word">${escapeHtml(tag)}</p>
      <p class="gender-batch-card__note">Looking up live gender and creating a ${escapeHtml(mode)} study sentence...</p>
    </article>
  `).join("");
}

function buildGenderBatchLookupFromLocalEntry(entry) {
  return {
    ok: true,
    source: "local study list",
    word: entry.word,
    ambiguous: false,
    englishMeaning: entry.meaning || null,
    results: [{
      article: entry.article,
      gender: entry.gender,
      label: genderLabels[entry.gender]
    }]
  };
}

async function resolveGenderBatchWord(tag) {
  const key = normalizeWord(tag);
  if (!key) {
    return {
      ok: false,
      requestedWord: tag,
      message: "Empty tag."
    };
  }

  if (genderBatchLookupCache.has(key)) {
    return genderBatchLookupCache.get(key);
  }

  const localEntry = searchWord(tag);
  if (localEntry) {
    const localResult = buildGenderBatchLookupFromLocalEntry(localEntry);
    genderBatchLookupCache.set(key, localResult);
    return localResult;
  }

  try {
    const payload = await fetchLiveGender(tag);
    if (!payload.found) {
      const result = {
        ok: false,
        source: payload.source || "backend",
        requestedWord: tag,
        normalizedWord: payload.normalizedWord || tag,
        message: payload.message || "No live noun gender found for this word.",
        heuristicGuess: payload.heuristicGuess || null
      };
      genderBatchLookupCache.set(key, result);
      return result;
    }

    const liveResult = {
      ok: true,
      source: payload.source || "de.wiktionary.org",
      word: payload.normalizedWord || tag,
      ambiguous: Boolean(payload.ambiguous),
      englishMeaning: payload.englishMeaning || null,
      ...(payload.resolvedFromForm ? { resolvedFromForm: payload.resolvedFromForm } : {}),
      ...(Array.isArray(payload.lookupPath) ? { lookupPath: payload.lookupPath } : {}),
      results: Array.isArray(payload.results) ? payload.results : []
    };
    genderBatchLookupCache.set(key, liveResult);
    return liveResult;
  } catch (error) {
    return {
      ok: false,
      source: "backend",
      requestedWord: tag,
      message: error.message || "Live lookup failed."
    };
  }
}

function buildGenderBatchSentencePackage(lookup, mode) {
  const results = Array.isArray(lookup.results) ? lookup.results.filter(Boolean) : [];
  if (results.length === 0) {
    return null;
  }

  const primary = results[0];
  const nominativePhrase = `${primary.article} ${lookup.word}`;
  const accusativeArticle = toAccusativeArticle(primary.article);
  const accusativePhrase = `${accusativeArticle} ${lookup.word}`;
  const meaning = lookup.englishMeaning ? String(lookup.englishMeaning).trim() : null;
  const ambiguousNote = lookup.ambiguous
    ? "This word is ambiguous. The sentence uses the first gender form shown."
    : "";
  const resolvedFormNote = lookup.resolvedFromForm
    && normalizeWord(lookup.resolvedFromForm) !== normalizeWord(lookup.word)
    ? `Input form "${lookup.resolvedFromForm}" was resolved to the base noun "${lookup.word}".`
    : "";
  const articleChangeReason = primary.gender === "masculine"
    ? `The noun is masculine, so in the accusative the article changes from "${primary.article}" to "${accusativeArticle}".`
    : `The noun is ${primary.gender}, so the article stays "${primary.article}" in the accusative.`;

  const commonReasoning = [
    `Gender phrase: "${nominativePhrase}" (${genderLabels[primary.gender]}).`
  ];

  if (mode === "complex") {
    return {
      german: `Ich finde ${accusativePhrase} interessant, weil ${nominativePhrase} im Text wichtig ist.`,
      english: meaning
        ? `I find the ${meaning} interesting because the ${meaning} is important in the text.`
        : `I find ${nominativePhrase} interesting because ${nominativePhrase} is important in the text.`,
      breakdown: [
        { de: "Ich", en: "I" },
        { de: "finde", en: "find" },
        { de: accusativePhrase, en: meaning ? `the ${meaning}` : `${accusativePhrase} (German noun)` },
        { de: "interessant", en: "interesting" },
        { de: "weil", en: "because" },
        { de: nominativePhrase, en: meaning ? `the ${meaning}` : `${nominativePhrase}` },
        { de: "im Text", en: "in the text" },
        { de: "wichtig ist", en: "is important" }
      ],
      note: [resolvedFormNote, ambiguousNote, "Complex mode uses a main clause + a weil-clause (subordinate clause), which is common in exams."]
        .filter(Boolean)
        .join(" "),
      reasoning: [
        "The verb \"finden\" takes an accusative object in the main clause.",
        articleChangeReason,
        "The clause with \"weil\" is a subordinate clause, so the finite verb \"ist\" goes to the end.",
        `In the weil-clause, "${nominativePhrase}" is the subject (nominative).`,
        ...commonReasoning
      ]
    };
  }

  return {
    german: `Ich finde ${accusativePhrase} interessant.`,
    english: meaning
      ? `I find the ${meaning} interesting.`
      : `I find ${nominativePhrase} interesting.`,
    breakdown: [
      { de: "Ich", en: "I" },
      { de: "finde", en: "find" },
      { de: accusativePhrase, en: meaning ? `the ${meaning}` : `${accusativePhrase} (German noun)` },
      { de: "interessant", en: "interesting" }
    ],
    note: [resolvedFormNote, ambiguousNote, "Simple mode uses a correct exam-friendly sentence with an accusative object."]
      .filter(Boolean)
      .join(" "),
    reasoning: [
      "The sentence pattern is: subject + verb + accusative object + adjective.",
      "The verb \"finden\" here uses an accusative object.",
      articleChangeReason,
      ...commonReasoning
    ]
  };
}

function renderGenderBatchResults(items, mode = genderBatchMode) {
  if (!genderBatchResults) return;

  if (!Array.isArray(items) || items.length === 0) {
    genderBatchResults.innerHTML = "<p class=\"muted\">Generated sentences will appear here.</p>";
    return;
  }

  genderBatchResults.innerHTML = items.map((item, index) => {
    if (!item.ok) {
      const guessText = item.heuristicGuess
        ? ` A possible article to review is ${item.heuristicGuess.article} ${item.normalizedWord || item.requestedWord || "..."}.`
        : "";

      return `
        <article class="gender-batch-card gender-batch-card--error">
          <p class="gender-batch-card__label">Word ${index + 1} • Could not generate</p>
          <div class="gender-batch-card__top">
            <div>
              <p class="gender-batch-card__word">${escapeHtml(item.normalizedWord || item.requestedWord || "Unknown word")}</p>
              <p class="gender-batch-card__meta">Try the singular dictionary form of this noun.</p>
            </div>
          </div>
          <p class="gender-batch-card__note">${escapeHtml(item.message || "Gender could not be found.")}${escapeHtml(guessText)}</p>
        </article>
      `;
    }

    const lookup = item.lookup;
    const sentencePkg = item.sentence;
    const primary = lookup.results[0];
    const badgesHtml = lookup.results
      .map((result) => `<span class="${getBadgeClass(result.gender)}">${escapeHtml(result.article)} ${escapeHtml(result.label || genderLabels[result.gender])}</span>`)
      .join("");

    return `
      <article class="gender-batch-card gender-batch-card--${escapeHtml(primary.gender)}">
        <p class="gender-batch-card__label">Word ${index + 1} • ${escapeHtml(mode === "complex" ? "Complex" : "Simple")} sentence</p>
        <div class="gender-batch-card__top">
          <div>
            <p class="gender-batch-card__word">${escapeHtml(primary.article)} ${escapeHtml(lookup.word)}</p>
            <p class="gender-batch-card__meta">
              English meaning: ${escapeHtml(lookup.englishMeaning || "meaning unavailable")}
            </p>
          </div>
          <div class="result-card__actions">
            ${buildSpeakButtonHtml(sentencePkg.german, `Speak generated sentence for ${lookup.word}`)}
            <div class="result-card__badges">${badgesHtml}</div>
          </div>
        </div>
        <p class="gender-batch-card__label">German sentence</p>
        <p class="gender-batch-card__sentence">${escapeHtml(sentencePkg.german)}</p>
        <p class="gender-batch-card__label">English translation</p>
        <p class="gender-batch-card__translation">${escapeHtml(sentencePkg.english)}</p>
        <p class="gender-batch-card__label">English breakdown</p>
        <div class="sentence-breakdown">
          ${sentencePkg.breakdown.map((part) => `
            <span class="sentence-breakdown__chip"><strong>${escapeHtml(part.de)}</strong> = ${escapeHtml(part.en)}</span>
          `).join("")}
        </div>
        ${Array.isArray(sentencePkg.reasoning) && sentencePkg.reasoning.length > 0 ? `
          <p class="gender-batch-card__label">Why this sentence is correct (exam reasoning)</p>
          <ul class="gender-batch-card__reasoning">
            ${sentencePkg.reasoning.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}
          </ul>
        ` : ""}
        ${sentencePkg.note ? `<p class="gender-batch-card__note">${escapeHtml(sentencePkg.note)}</p>` : ""}
      </article>
    `;
  }).join("");
}

async function generateGenderBatchSentences() {
  const tags = [...genderBatchTags];
  if (tags.length === 0) {
    setGenderBatchStatus("Add at least one noun tag before generating sentences.");
    return;
  }

  const requestId = ++latestGenderBatchRequest;
  const modeSnapshot = genderBatchMode;
  genderBatchGenerateBtn.disabled = true;
  renderGenderBatchLoading(tags, modeSnapshot);
  setGenderBatchStatus(`Generating ${modeSnapshot} sentences for ${tags.length} word${tags.length === 1 ? "" : "s"}...`);

  try {
    const items = await Promise.all(tags.map(async (tag) => {
      const lookup = await resolveGenderBatchWord(tag);
      if (!lookup.ok) {
        return lookup;
      }

      const sentence = buildGenderBatchSentencePackage(lookup, modeSnapshot);
      if (!sentence) {
        return {
          ok: false,
          requestedWord: tag,
          normalizedWord: lookup.word || tag,
          source: lookup.source || "backend",
          message: "A sentence could not be generated because no gender result was available."
        };
      }

      return {
        ok: true,
        lookup,
        sentence
      };
    }));

    if (requestId !== latestGenderBatchRequest) return;

    renderGenderBatchResults(items, modeSnapshot);

    const successCount = items.filter((item) => item.ok).length;
    const errorCount = items.length - successCount;
    if (errorCount === 0) {
      setGenderBatchStatus(`Done. Generated ${successCount} ${modeSnapshot} sentence${successCount === 1 ? "" : "s"}.`);
    } else {
      setGenderBatchStatus(`Done. Generated ${successCount} sentence${successCount === 1 ? "" : "s"} and skipped ${errorCount} word${errorCount === 1 ? "" : "s"} (gender not found).`);
    }
  } catch (error) {
    if (requestId !== latestGenderBatchRequest) return;
    genderBatchResults.innerHTML = "<p class=\"muted\">Sentence generation failed. Please try again.</p>";
    setGenderBatchStatus(error.message || "Sentence generation failed.");
  } finally {
    if (requestId === latestGenderBatchRequest) {
      genderBatchGenerateBtn.disabled = genderBatchTags.length === 0;
    }
  }
}

function toAccusativeArticle(article) {
  return article === "der" ? "den" : article;
}

function buildGenderExampleSentences({ word, results, englishMeaning }) {
  if (!Array.isArray(results) || results.length === 0) return [];

  const articlePhrases = results.map((result) => `${result.article} ${word}`);
  const isAmbiguous = results.length > 1;

  if (isAmbiguous) {
    return [
      {
        de: `Dieses Wort kann verschiedene Artikel haben: ${articlePhrases.join(" / ")}.`,
        en: "This spelling can have different meanings depending on the article/gender."
      },
      {
        de: `Lerne jede Form einzeln: ${articlePhrases.join(", ")}.`,
        en: "Learn each form as separate vocabulary."
      }
    ];
  }

  const primary = results[0];
  const nominativePhrase = `${primary.article} ${word}`;
  const accusativePhrase = `${toAccusativeArticle(primary.article)} ${word}`;
  const english = englishMeaning ? String(englishMeaning).trim() : null;

  return [
    {
      de: `Das ist ${nominativePhrase}.`,
      en: english ? `This is the ${english}.` : "Simple example sentence with the noun."
    },
    {
      de: `Ich kenne ${accusativePhrase}.`,
      en: english ? `I know the ${english}.` : "Repeat this sentence to remember the article."
    }
  ];
}

function renderGenderStudyCard({ word, results, englishMeaning, noteText, highlightWordName }) {
  const safeResults = Array.isArray(results) ? results.filter(Boolean) : [];
  if (safeResults.length === 0) return;

  const isAmbiguous = safeResults.length > 1;
  const primary = safeResults[0];
  const articlePhrases = safeResults.map((result) => `${result.article} ${word}`);
  const badgesHtml = safeResults
    .map((result) => `<span class="${getBadgeClass(result.gender)}">${escapeHtml(result.article)} ${escapeHtml(result.label || genderLabels[result.gender])}</span>`)
    .join("");

  const headline = isAmbiguous ? escapeHtml(word) : escapeHtml(articlePhrases[0]);
  const genderLine = isAmbiguous
    ? `Gender forms: ${articlePhrases.join(" / ")}`
    : `Gender: ${articlePhrases[0]} (${genderLabels[primary.gender]})`;
  const displayedMeaning = englishMeaning || (isAmbiguous
    ? "meaning depends on the article/gender"
    : "meaning unavailable");

  const examples = buildGenderExampleSentences({
    word,
    results: safeResults,
    englishMeaning
  });

  const speakText = articlePhrases.join(". ");
  const speakerButtonHtml = speechSupported()
    ? `
      <button
        type="button"
        class="speak-btn"
        data-speak-text="${escapeHtml(speakText)}"
        aria-label="Speak pronunciation for ${escapeHtml(speakText)}"
        title="Speak pronunciation"
      >
        🔊
      </button>
    `
    : "";

  resultCard.className = `result-card result-card--${primary.gender}`;
  resultCard.innerHTML = `
    <div class="result-card__top">
      <div>
        <p class="result-card__word">${headline}${isAmbiguous ? " (multiple genders)" : ""}</p>
        <p class="result-card__meaning"><strong>English meaning:</strong> ${escapeHtml(displayedMeaning)}</p>
        <p class="result-card__detail"><strong>${escapeHtml(genderLine)}</strong></p>
      </div>
      <div class="result-card__actions">
        ${speakerButtonHtml}
        <div class="result-card__badges">${badgesHtml}</div>
      </div>
    </div>
    <div class="result-card__examples">
      ${examples.map((example, index) => `
        <div class="result-example">
          <p class="result-example__label">Sentence ${index + 1}</p>
          <p class="result-example__de">${escapeHtml(example.de)}</p>
          <p class="result-example__en">${escapeHtml(example.en)}</p>
        </div>
      `).join("")}
    </div>
    <p class="result-card__tip">${escapeHtml(noteText || "Repeat the article and noun together to remember the gender.")}</p>
  `;

  highlightWord(highlightWordName || null);
}

function renderResult(entry, originalInput = "") {
  if (!entry) {
    const suggestions = findSimilarWords(originalInput);
    const suggestionText = suggestions.length
      ? `Did you mean: ${suggestions.map((s) => `${s.article} ${s.word}`).join(", ")}?`
      : "Try a word from the list below.";

    resultCard.className = "result-card result-card--not-found";
    resultCard.innerHTML = `
      <div class="result-card__top">
        <div>
          <p class="result-card__word">Word not found</p>
          <p class="result-card__meaning">I couldn't match that noun in the current study list.</p>
        </div>
      </div>
      <p class="result-card__tip">${escapeHtml(suggestionText)}</p>
    `;
    highlightWord(null);
    return;
  }

  renderGenderStudyCard({
    word: entry.word,
    results: [{
      article: entry.article,
      gender: entry.gender,
      label: genderLabels[entry.gender]
    }],
    englishMeaning: entry.meaning,
    noteText: entry.tip,
    highlightWordName: entry.word
  });
}

function renderLoadingResult(query) {
  const local = searchWord(query);
  resultCard.className = "result-card result-card--loading";
  resultCard.innerHTML = `
    <div class="result-card__top">
      <div>
        <p class="result-card__word">Looking up "${escapeHtml(query.trim() || "...")}"...</p>
        <p class="result-card__meaning">Checking gender, English meaning, and preparing study sentences...</p>
      </div>
      <div class="result-card__badges">
        <span class="badge badge--guess">Loading</span>
      </div>
    </div>
    <p class="result-card__tip">
      ${local
        ? `I also found this word in the study list: <strong>${escapeHtml(local.article)} ${escapeHtml(local.word)}</strong>. I am checking it live too.`
        : "This may take a moment depending on network speed."}
    </p>
  `;
}

async function fetchLiveGender(query) {
  const response = await fetch(`/api/gender?word=${encodeURIComponent(query)}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.error || `Lookup failed with status ${response.status}`;
    throw new Error(message);
  }

  return data;
}

async function fetchLiveSentenceTranslation(text) {
  const response = await fetch(`/api/sentence/translate?text=${encodeURIComponent(text)}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Translation failed with status ${response.status}`);
  }

  return data;
}

async function fetchSentenceValidation(text, mode = sentenceValidationMode) {
  const response = await fetch(`/api/sentence/validate?text=${encodeURIComponent(text)}&mode=${encodeURIComponent(mode)}`);
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || `Validation failed with status ${response.status}`);
  }

  return data;
}

function renderSentenceLiveTranslationIdle() {
  sentenceLiveTranslation.textContent = "Type a sentence to see the translation.";
  sentenceLiveStatus.textContent = "Waiting for input.";
}

function renderSentenceLiveTranslationLoading() {
  sentenceLiveTranslation.textContent = "Translating...";
  sentenceLiveStatus.textContent = "Live translation request in progress.";
}

function renderSentenceLiveTranslationResult(payload) {
  const translation = payload.englishTranslation || "Translation unavailable right now.";
  sentenceLiveTranslation.textContent = translation;
  sentenceLiveStatus.textContent = payload.englishTranslation
    ? "Live translation updated."
    : "No translation returned. You can still click Validate.";
}

function renderSentenceLiveTranslationError(error) {
  sentenceLiveTranslation.textContent = "Live translation unavailable.";
  sentenceLiveStatus.textContent = error.message || "Translation request failed.";
}

function setSentenceVerdict(text, state = "idle") {
  sentenceVerdictChip.textContent = text;
  sentenceVerdictChip.classList.remove("is-correct", "is-wrong");
  if (state === "correct") sentenceVerdictChip.classList.add("is-correct");
  if (state === "wrong") sentenceVerdictChip.classList.add("is-wrong");
}

function renderSentenceValidationEmpty() {
  setSentenceVerdict("Not validated yet");
  sentenceOriginalCard.classList.remove("is-correct", "is-wrong");
  sentenceCorrectedCard.classList.remove("is-correct", "is-wrong");
  sentenceOriginalText.textContent = "-";
  sentenceCorrectedText.textContent = "-";
  sentenceOriginalActions.innerHTML = "";
  sentenceCorrectedActions.innerHTML = "";
  sentenceValidationMessage.textContent = "";
  sentenceValidationMessage.className = "quiz-feedback";
  sentenceIssuesList.innerHTML = "<li>Click <strong>Validate Sentence</strong> to check your German sentence.</li>";
  sentenceAlternativesList.innerHTML = "<p class=\"muted\">Validation will generate corrected versions and alternative wording suggestions here.</p>";
}

function renderSentenceValidationLoading() {
  setSentenceVerdict("Checking...", "idle");
  sentenceValidationMessage.textContent = `Validating your sentence (${sentenceModeLabel(sentenceValidationMode)})...`;
  sentenceValidationMessage.className = "quiz-feedback";
}

function renderSentenceValidationError(error, sentence) {
  setSentenceVerdict("Validation error", "wrong");
  sentenceOriginalCard.classList.add("is-wrong");
  sentenceCorrectedCard.classList.remove("is-correct");
  sentenceOriginalText.textContent = sentence || "-";
  sentenceCorrectedText.textContent = "-";
  sentenceOriginalActions.innerHTML = buildSpeakButtonHtml(sentence, "Speak your sentence");
  sentenceCorrectedActions.innerHTML = "";
  sentenceValidationMessage.textContent = error.message || "Validation request failed.";
  sentenceValidationMessage.className = "quiz-feedback is-wrong";
  sentenceIssuesList.innerHTML = "<li>The validator could not complete the check. Try again in a moment.</li>";
  sentenceAlternativesList.innerHTML = "<p class=\"muted\">Alternative phrasings are shown after a successful validation.</p>";
}

function renderSentenceIssues(issues) {
  const safeIssues = Array.isArray(issues) ? issues : [];
  if (safeIssues.length === 0) {
    sentenceIssuesList.innerHTML = "<li>No grammar/spelling issues found by the validator.</li>";
    return;
  }

  sentenceIssuesList.innerHTML = safeIssues.map((issue) => {
    const beginnerHint = getIssueBeginnerHint(issue);
    const suggestions = Array.isArray(issue.replacements) && issue.replacements.length > 0
      ? `Suggestions: ${issue.replacements.slice(0, 4).join(", ")}`
      : "No direct replacement suggestion was provided.";
    const meta = [issue.category, issue.issueType].filter(Boolean).join(" • ");

    return `
      <li class="sentence-issue">
        <div class="sentence-issue__meta">${escapeHtml(meta || "Issue")}</div>
        <p class="sentence-issue__message">${escapeHtml(issue.message || "Possible issue found.")}</p>
        ${issue.contextText ? `<div class="sentence-issue__suggestions"><strong>Context:</strong> ${escapeHtml(issue.contextText)}</div>` : ""}
        <div class="sentence-issue__hint"><strong>Why this is wrong (${escapeHtml(beginnerHint.topic)}):</strong> ${escapeHtml(beginnerHint.explanation)}</div>
        <div class="sentence-issue__suggestions">${escapeHtml(suggestions)}</div>
      </li>
    `;
  }).join("");
}

function sentenceAlternativeOriginLabel(origin) {
  if (origin === "corrected") return "Corrected version";
  if (origin === "alternative-correction") return "Another valid option";
  if (origin === "back-translation") return "Another way to say it";
  return "Alternative";
}

function renderSentenceAlternatives(alternatives) {
  const safeAlternatives = Array.isArray(alternatives) ? alternatives : [];
  if (safeAlternatives.length === 0) {
    sentenceAlternativesList.innerHTML = "<p class=\"muted\">No alternative wording could be generated for this sentence.</p>";
    return;
  }

  sentenceAlternativesList.innerHTML = safeAlternatives.map((item) => {
    const breakdown = Array.isArray(item.breakdown) ? item.breakdown : [];
    return `
      <article class="sentence-alt-card">
        <div class="sentence-alt-card__top">
          <div>
            <p class="time-phrase-card__label">${escapeHtml(sentenceAlternativeOriginLabel(item.origin))}</p>
            <p class="sentence-alt-card__german">${escapeHtml(item.german || "")}</p>
          </div>
          ${buildSpeakButtonHtml(item.german || "", `Speak alternative sentence: ${item.german || ""}`)}
        </div>
        <p class="sentence-alt-card__english"><strong>English:</strong> ${escapeHtml(item.english || "Translation unavailable")}</p>
        ${item.note ? `<p class="sentence-alt-card__note">${escapeHtml(item.note)}</p>` : ""}
        ${breakdown.length > 0 ? `
          <div class="sentence-breakdown" aria-label="English breakdown">
            ${breakdown.map((token) => `
              <span class="sentence-breakdown__chip"><strong>${escapeHtml(token.de)}</strong> = ${escapeHtml(token.en)}</span>
            `).join("")}
          </div>
        ` : `<p class="sentence-alt-card__note">English word breakdown unavailable for some words.</p>`}
      </article>
    `;
  }).join("");
}

function renderSentenceValidationResult(payload) {
  const sentence = payload?.sentence || "";
  const validation = payload?.validation || {};
  const correctedSentence = validation.correctedSentence || sentence;
  const isCorrect = Boolean(validation.isCorrect);
  const mode = validation.mode === "strict" ? "strict" : "grammar";

  setSentenceVerdict(isCorrect ? "Correct sentence" : "Needs correction", isCorrect ? "correct" : "wrong");

  sentenceOriginalCard.classList.remove("is-correct", "is-wrong");
  sentenceCorrectedCard.classList.remove("is-correct", "is-wrong");
  if (isCorrect) {
    sentenceOriginalCard.classList.add("is-correct");
    sentenceCorrectedCard.classList.add("is-correct");
  } else {
    sentenceOriginalCard.classList.add("is-wrong");
    sentenceCorrectedCard.classList.add("is-correct");
  }

  sentenceOriginalText.textContent = sentence || "-";
  sentenceCorrectedText.textContent = correctedSentence || "-";
  sentenceOriginalActions.innerHTML = buildSpeakButtonHtml(sentence, "Speak your sentence");
  sentenceCorrectedActions.innerHTML = buildSpeakButtonHtml(correctedSentence, "Speak corrected sentence");

  const issueBreakdown = typeof validation.styleIssueCount === "number"
    ? ` (grammar/spelling detected: ${validation.grammarIssueCount ?? 0}, style detected: ${validation.styleIssueCount})`
    : "";
  sentenceValidationMessage.textContent = `${validation.summary || (isCorrect ? "Sentence looks correct." : "Sentence needs corrections.")} Mode: ${sentenceModeLabel(mode)}${mode === "strict" ? issueBreakdown : ""}`;
  sentenceValidationMessage.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;

  renderSentenceIssues(validation.issues || []);
  renderSentenceAlternatives(payload.alternatives || []);
  addSentenceHistoryEntry(payload);
}

function scheduleLiveSentenceTranslation() {
  const text = normalizeSentenceInputClient(sentenceInput.value);
  if (sentenceTranslateDebounceTimer) {
    window.clearTimeout(sentenceTranslateDebounceTimer);
  }

  if (!text) {
    latestSentenceTranslateRequest += 1;
    renderSentenceLiveTranslationIdle();
    return;
  }

  sentenceTranslateDebounceTimer = window.setTimeout(() => {
    requestLiveSentenceTranslation(text);
  }, 350);
}

async function requestLiveSentenceTranslation(text) {
  const normalizedText = normalizeSentenceInputClient(text);
  if (!normalizedText) {
    renderSentenceLiveTranslationIdle();
    return;
  }

  const requestId = ++latestSentenceTranslateRequest;
  renderSentenceLiveTranslationLoading();

  try {
    const payload = await fetchLiveSentenceTranslation(normalizedText);
    if (requestId !== latestSentenceTranslateRequest) return;
    renderSentenceLiveTranslationResult(payload);
  } catch (error) {
    if (requestId !== latestSentenceTranslateRequest) return;
    renderSentenceLiveTranslationError(error);
  }
}

async function validateCurrentSentence() {
  const sentence = normalizeSentenceInputClient(sentenceInput.value);
  if (!sentence) {
    setSentenceVerdict("Enter a sentence", "wrong");
    sentenceValidationMessage.textContent = "Type a German sentence first, then click Validate.";
    sentenceValidationMessage.className = "quiz-feedback is-wrong";
    return;
  }

  const requestId = ++latestSentenceValidateRequest;
  sentenceValidateBtn.disabled = true;
  renderSentenceValidationLoading();
  sentenceOriginalText.textContent = sentence;
  sentenceOriginalActions.innerHTML = buildSpeakButtonHtml(sentence, "Speak your sentence");

  try {
    const payload = await fetchSentenceValidation(sentence, sentenceValidationMode);
    if (requestId !== latestSentenceValidateRequest) return;
    renderSentenceValidationResult(payload);
  } catch (error) {
    if (requestId !== latestSentenceValidateRequest) return;
    renderSentenceValidationError(error, sentence);
  } finally {
    if (requestId === latestSentenceValidateRequest) {
      sentenceValidateBtn.disabled = false;
    }
  }
}

function renderLiveLookupResult(payload, originalInput) {
  const localEntry = searchWord(payload.normalizedWord || originalInput);

  if (!payload.found) {
    const suggestions = findSimilarWords(originalInput);
    const guess = payload.heuristicGuess;
    const suggestionText = suggestions.length
      ? `Study list suggestions: ${suggestions.map((s) => `${s.article} ${s.word}`).join(", ")}.`
      : "Try a common noun from the list below (for example: Haus, Frau, Tisch).";
    const friendlyMessage = payload.reason === "empty_query"
      ? "Type a German noun first."
      : "I could not find a clear noun gender for this word yet.";
    const guessText = guess
      ? `A possible article to review while you check the word is: ${guess.article} ${payload.normalizedWord || String(originalInput || "").trim()}.`
      : suggestionText;

    resultCard.className = "result-card result-card--not-found";
    resultCard.innerHTML = `
      <div class="result-card__top">
        <div>
          <p class="result-card__word">${escapeHtml(payload.reason === "empty_query" ? "Enter a word" : "Word not found yet")}</p>
          <p class="result-card__meaning">
            ${escapeHtml(friendlyMessage)}
          </p>
        </div>
        <div class="result-card__badges"></div>
      </div>
      <p class="result-card__tip">${escapeHtml(guessText)} ${payload.reason !== "empty_query" ? "Try the singular base form if you entered a plural or declined form." : ""}</p>
    `;
    highlightWord(localEntry ? localEntry.word : null);
    return;
  }

  const results = Array.isArray(payload.results) ? payload.results : [];
  const isAmbiguous = results.length > 1;
  const englishMeaning = localEntry?.meaning || payload.englishMeaning || "";
  const resolvedFromNote = payload.resolvedFromForm
    && payload.normalizedWord
    && normalizeWord(payload.resolvedFromForm) !== normalizeWord(payload.normalizedWord)
    ? `Resolved inflected form: ${payload.resolvedFromForm} -> ${payload.normalizedWord}.`
    : "";
  const noteText = localEntry
    ? `${resolvedFromNote ? `${resolvedFromNote} ` : ""}${localEntry.tip}`.trim()
    : isAmbiguous
      ? "This spelling can have different meanings depending on the article. Learn each form separately."
      : `${resolvedFromNote ? `${resolvedFromNote} ` : ""}Repeat the article with the noun out loud: der/die/das + noun.`.trim();

  renderGenderStudyCard({
    word: payload.normalizedWord,
    results,
    englishMeaning,
    noteText,
    highlightWordName: localEntry ? localEntry.word : null
  });
}

function renderLookupError(error, originalInput) {
  const localEntry = searchWord(originalInput);
  if (localEntry) {
    renderGenderStudyCard({
      word: localEntry.word,
      results: [{
        article: localEntry.article,
        gender: localEntry.gender,
        label: genderLabels[localEntry.gender]
      }],
      englishMeaning: localEntry.meaning,
      noteText: localEntry.tip,
      highlightWordName: localEntry.word
    });
    return;
  }

  resultCard.className = "result-card result-card--not-found";
  resultCard.innerHTML = `
    <div class="result-card__top">
      <div>
        <p class="result-card__word">Lookup unavailable</p>
        <p class="result-card__meaning">I could not check this word right now.</p>
        <p class="result-card__meta">Please try again in a moment.</p>
      </div>
    </div>
    <p class="result-card__tip">You can still study words from the list below while this is loading again.</p>
  `;
  highlightWord(null);
}

async function handleLiveLookup(query) {
  const trimmed = String(query || "").trim();
  if (!trimmed) {
    renderLiveLookupResult({
      found: false,
      reason: "empty_query",
      message: "Type a German noun first.",
      source: "local"
    }, query);
    return;
  }

  const requestId = ++latestLookupRequest;
  submitButton.disabled = true;
  renderLoadingResult(trimmed);

  try {
    const payload = await fetchLiveGender(trimmed);
    if (requestId !== latestLookupRequest) return;
    renderLiveLookupResult(payload, trimmed);
  } catch (error) {
    if (requestId !== latestLookupRequest) return;
    renderLookupError(error, trimmed);
  } finally {
    if (requestId === latestLookupRequest) {
      submitButton.disabled = false;
    }
  }
}

function highlightWord(word) {
  highlightedWord = word;
  Array.from(wordList.children).forEach((item) => {
    item.classList.toggle("is-highlighted", item.dataset.word === word);
  });
}

function renderStats() {
  const visibleWords = words.filter((entry) => activeFilter === "all" || entry.gender === activeFilter);
  const masculineCount = visibleWords.filter((entry) => entry.gender === "masculine").length;
  const feminineCount = visibleWords.filter((entry) => entry.gender === "feminine").length;
  const neuterCount = visibleWords.filter((entry) => entry.gender === "neuter").length;

  stats.innerHTML = `
    <div class="stat-chip">Showing: <strong>${visibleWords.length}</strong> words</div>
    <div class="stat-chip">der: <strong>${masculineCount}</strong></div>
    <div class="stat-chip">die: <strong>${feminineCount}</strong></div>
    <div class="stat-chip">das: <strong>${neuterCount}</strong></div>
  `;
}

function renderList() {
  const filtered = words.filter((entry) => activeFilter === "all" || entry.gender === activeFilter);
  wordList.innerHTML = "";

  filtered.forEach((entry) => {
    const li = document.createElement("li");
    li.className = `word-item word-item--${entry.gender}`;
    li.dataset.word = entry.word;
    li.setAttribute("tabindex", "0");
    li.setAttribute("role", "button");
    li.setAttribute("aria-label", `Show gender for ${entry.article} ${entry.word}`);
    li.innerHTML = `
      <span class="word-item__article">${entry.article}</span>
      <span class="word-item__main">
        <span class="word-item__word">${entry.word}</span>
        <span class="word-item__meaning">${entry.meaning}</span>
      </span>
      <span class="word-item__gender">${genderLabels[entry.gender]}</span>
    `;

    li.addEventListener("click", () => {
      input.value = entry.word;
      renderResult(entry);
    });

    li.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        input.value = entry.word;
        renderResult(entry);
      }
    });

    if (entry.word === highlightedWord) {
      li.classList.add("is-highlighted");
    }

    wordList.appendChild(li);
  });

  renderStats();
}

function setActiveFilter(filter) {
  activeFilter = filter;
  filterButtons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderList();
}

function activateTab(targetPanelId, focusTab = false) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === targetPanelId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
    if (isActive && focusTab) {
      button.focus();
    }
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.id === targetPanelId;
    panel.hidden = !isActive;
    panel.classList.toggle("is-active", isActive);
  });

  if (targetPanelId === "panel-numbers") {
    ensureNumbersTabReady();
    if (typeof window !== "undefined") {
      window.setTimeout(() => {
        ensureNumbersTabReady();
      }, 0);
    }
  }
}

function renderAccusativeStepperDots() {
  accStepperDots.innerHTML = "";

  accusativeSteps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stepper-dot";
    button.textContent = `${index + 1}. ${step.shortLabel}`;
    button.dataset.stepIndex = String(index);

    if (index === currentAccusativeStep) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "step");
    } else if (accusativeStepState[index].completed) {
      button.classList.add("is-complete");
    }

    accStepperDots.appendChild(button);
  });
}

function renderAccusativeStep() {
  const step = accusativeSteps[currentAccusativeStep];
  const stepState = accusativeStepState[currentAccusativeStep];
  const feedbackClass = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex ? "is-correct" : "is-wrong")
    : "";
  const feedbackText = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex
      ? `Correct. ${step.miniCheck.explanation}`
      : `Not quite. ${step.miniCheck.explanation}`)
    : "Choose an answer, then click Check Answer.";

  accStepProgress.textContent = `Step ${currentAccusativeStep + 1} / ${accusativeSteps.length}`;

  accStepContent.innerHTML = `
    <h4>${escapeHtml(step.title)}</h4>
    <p>${escapeHtml(step.explanation)}</p>
    <ul class="acc-step-bullets">
      ${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
    <div class="acc-step-example">
      ${step.exampleLines.map((line) => `<div class="acc-step-example__line">${line}</div>`).join("")}
    </div>

    <div class="mini-check">
      <p class="mini-check__prompt">${escapeHtml(step.miniCheck.prompt)}</p>
      <div class="mini-check__options">
        ${step.miniCheck.options.map((option, index) => {
          const classes = ["mini-check-option"];
          if (stepState.selectedIndex === index) classes.push("is-selected");
          if (stepState.checked && index === step.miniCheck.correctIndex) classes.push("is-correct");
          if (
            stepState.checked &&
            stepState.selectedIndex === index &&
            stepState.selectedIndex !== step.miniCheck.correctIndex
          ) {
            classes.push("is-wrong");
          }
          return `
            <button
              type="button"
              class="${classes.join(" ")}"
              data-mini-option="${index}"
              aria-pressed="${stepState.selectedIndex === index ? "true" : "false"}"
            >
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="mini-check__actions">
        <button type="button" class="filter-btn" data-mini-action="check">Check Answer</button>
        <button type="button" class="filter-btn filter-btn--ghost" data-mini-action="show">Show Answer</button>
      </div>
      <p class="mini-check__feedback ${feedbackClass}">${escapeHtml(feedbackText)}</p>
    </div>
  `;

  accPrevStepBtn.disabled = currentAccusativeStep === 0;
  accNextStepBtn.textContent = currentAccusativeStep === accusativeSteps.length - 1
    ? "Restart Lesson"
    : "Next Step";

  renderAccusativeStepperDots();
}

function goToAccusativeStep(nextIndex) {
  const bounded = Math.min(accusativeSteps.length - 1, Math.max(0, nextIndex));
  currentAccusativeStep = bounded;
  renderAccusativeStep();
}

function handleAccusativeMiniCheckAction(action) {
  const step = accusativeSteps[currentAccusativeStep];
  const state = accusativeStepState[currentAccusativeStep];

  if (action === "check") {
    if (state.selectedIndex === null) {
      return;
    }
    state.checked = true;
    if (state.selectedIndex === step.miniCheck.correctIndex) {
      state.completed = true;
    }
    renderAccusativeStep();
    return;
  }

  if (action === "show") {
    state.selectedIndex = step.miniCheck.correctIndex;
    state.checked = true;
    state.completed = true;
    renderAccusativeStep();
  }
}

function transformAccusativePhrase(nominativePhrase) {
  const mapping = drillPhraseMap[nominativePhrase];
  if (mapping) {
    return mapping;
  }

  const [article, ...rest] = nominativePhrase.split(" ");
  const noun = rest.join(" ");
  if (article === "der") {
    return { accusative: `den ${noun}`, note: "Masculine singular changes: der -> den." };
  }
  return { accusative: nominativePhrase, note: "This phrase usually stays the same in the accusative." };
}

function renderAccusativeDrill() {
  const nominativePhrase = accPhraseSelect.value;
  const verb = accVerbSelect.value;
  const transformed = transformAccusativePhrase(nominativePhrase);
  const sentence = `Ich ${verb} ${transformed.accusative}.`;

  accDrillResult.innerHTML = `
    <p class="drill-result__sentence">Nominative phrase: ${escapeHtml(nominativePhrase)}</p>
    <p class="drill-result__sentence">Accusative phrase: <em>${escapeHtml(transformed.accusative)}</em></p>
    <p class="drill-result__sentence">Sentence: ${escapeHtml(sentence).replace(escapeHtml(transformed.accusative), `<em>${escapeHtml(transformed.accusative)}</em>`)}</p>
    <p class="drill-result__explain">${escapeHtml(transformed.note)}</p>
  `;
}

function shuffleArray(items) {
  const clone = [...items];
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
  }
  return clone;
}

function refillQuizDeck() {
  quizDeck = shuffleArray(accusativeQuizQuestions.map((_, index) => index));
}

function renderQuizScore() {
  accQuizScore.textContent = `Score: ${quizScoreState.correct} / ${quizScoreState.total}`;
}

function renderQuizQuestion() {
  if (!currentQuizQuestion) {
    accQuizCard.innerHTML = `
      <p class="acc-quiz-card__eyebrow">Quiz</p>
      <p class="acc-quiz-card__question">No question loaded</p>
    `;
    accQuizOptions.innerHTML = "";
    accQuizFeedback.textContent = "";
    return;
  }

  accQuizCard.innerHTML = `
    <p class="acc-quiz-card__eyebrow">${escapeHtml(currentQuizQuestion.category)}</p>
    <p class="acc-quiz-card__question">${escapeHtml(currentQuizQuestion.prompt)}</p>
    <p class="acc-quiz-card__hint">${escapeHtml(currentQuizQuestion.hint)}</p>
  `;

  accQuizOptions.innerHTML = currentQuizQuestion.options.map((option, index) => {
    const classes = ["quiz-option"];
    if (selectedQuizOptionIndex === index) {
      classes.push("is-selected");
    }
    if (quizAnswered && index === currentQuizQuestion.correctIndex) {
      classes.push("is-correct");
    }
    if (
      quizAnswered &&
      selectedQuizOptionIndex === index &&
      selectedQuizOptionIndex !== currentQuizQuestion.correctIndex
    ) {
      classes.push("is-wrong");
    }

    return `
      <button
        type="button"
        class="${classes.join(" ")}"
        data-quiz-option="${index}"
        role="radio"
        aria-checked="${selectedQuizOptionIndex === index ? "true" : "false"}"
      >
        ${escapeHtml(option)}
      </button>
    `;
  }).join("");

  accQuizCheckBtn.disabled = quizAnswered;
  accQuizNextBtn.disabled = !quizAnswered;
}

function loadNextQuizQuestion() {
  if (quizDeck.length === 0) {
    refillQuizDeck();
  }

  currentQuizQuestionIndex = quizDeck.pop();
  currentQuizQuestion = accusativeQuizQuestions[currentQuizQuestionIndex];
  selectedQuizOptionIndex = null;
  quizAnswered = false;

  accQuizFeedback.textContent = "";
  accQuizFeedback.className = "quiz-feedback";
  renderQuizQuestion();
}

function resetQuiz() {
  quizScoreState = { correct: 0, total: 0 };
  renderQuizScore();
  refillQuizDeck();
  loadNextQuizQuestion();
}

function checkQuizAnswer() {
  if (quizAnswered || selectedQuizOptionIndex === null || !currentQuizQuestion) {
    if (selectedQuizOptionIndex === null && !quizAnswered) {
      accQuizFeedback.textContent = "Select an answer first.";
      accQuizFeedback.className = "quiz-feedback";
    }
    return;
  }

  quizAnswered = true;
  quizScoreState.total += 1;
  const isCorrect = selectedQuizOptionIndex === currentQuizQuestion.correctIndex;
  if (isCorrect) {
    quizScoreState.correct += 1;
  }

  renderQuizScore();
  renderQuizQuestion();

  accQuizFeedback.textContent = isCorrect
    ? `Correct. ${currentQuizQuestion.explanation}`
    : `Not correct. ${currentQuizQuestion.explanation}`;
  accQuizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
}

function getPossessiveEnding(caseName, nounGender) {
  const nominative = {
    masculine: "",
    feminine: "e",
    neuter: "",
    plural: "e"
  };
  const accusative = {
    masculine: "en",
    feminine: "e",
    neuter: "",
    plural: "e"
  };

  const map = caseName === "accusative" ? accusative : nominative;
  return map[nounGender] ?? "";
}

function combinePossessiveStemAndEnding(stem, ending) {
  if (!ending) return stem;
  if (stem.toLowerCase() === "euer" && ending.startsWith("e")) {
    return `${stem.slice(0, 2)}r${ending}`;
  }
  return `${stem}${ending}`;
}

function buildPossessiveForm(ownerKey, nounGender, caseName) {
  const owner = possessiveOwnerMap[ownerKey] || possessiveOwnerMap.ich;
  const ending = getPossessiveEnding(caseName, nounGender);
  return combinePossessiveStemAndEnding(owner.stem, ending);
}

function parsePossessiveNounSelection(value) {
  const [noun = "Buch", nounGender = "neuter"] = String(value || "").split("|");
  return { noun, nounGender };
}

function renderPossessiveStepperDots() {
  posStepperDots.innerHTML = "";

  possessiveSteps.forEach((step, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "stepper-dot";
    button.textContent = `${index + 1}. ${step.shortLabel}`;
    button.dataset.posStepIndex = String(index);

    if (index === currentPossessiveStep) {
      button.classList.add("is-active");
      button.setAttribute("aria-current", "step");
    } else if (possessiveStepState[index].completed) {
      button.classList.add("is-complete");
    }

    posStepperDots.appendChild(button);
  });
}

function renderPossessiveStep() {
  const step = possessiveSteps[currentPossessiveStep];
  const stepState = possessiveStepState[currentPossessiveStep];
  const feedbackClass = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex ? "is-correct" : "is-wrong")
    : "";
  const feedbackText = stepState.checked
    ? (stepState.selectedIndex === step.miniCheck.correctIndex
      ? `Correct. ${step.miniCheck.explanation}`
      : `Not quite. ${step.miniCheck.explanation}`)
    : "Choose an answer, then click Check Answer.";

  posStepProgress.textContent = `Step ${currentPossessiveStep + 1} / ${possessiveSteps.length}`;

  posStepContent.innerHTML = `
    <h4>${escapeHtml(step.title)}</h4>
    <p>${escapeHtml(step.explanation)}</p>
    <ul class="acc-step-bullets">
      ${step.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}
    </ul>
    <div class="acc-step-example">
      ${step.exampleLines.map((line) => `<div class="acc-step-example__line">${line}</div>`).join("")}
    </div>
    <div class="mini-check">
      <p class="mini-check__prompt">${escapeHtml(step.miniCheck.prompt)}</p>
      <div class="mini-check__options">
        ${step.miniCheck.options.map((option, index) => {
          const classes = ["mini-check-option"];
          if (stepState.selectedIndex === index) classes.push("is-selected");
          if (stepState.checked && index === step.miniCheck.correctIndex) classes.push("is-correct");
          if (
            stepState.checked &&
            stepState.selectedIndex === index &&
            stepState.selectedIndex !== step.miniCheck.correctIndex
          ) {
            classes.push("is-wrong");
          }
          return `
            <button
              type="button"
              class="${classes.join(" ")}"
              data-pos-mini-option="${index}"
              aria-pressed="${stepState.selectedIndex === index ? "true" : "false"}"
            >
              ${escapeHtml(option)}
            </button>
          `;
        }).join("")}
      </div>
      <div class="mini-check__actions">
        <button type="button" class="filter-btn" data-pos-mini-action="check">Check Answer</button>
        <button type="button" class="filter-btn filter-btn--ghost" data-pos-mini-action="show">Show Answer</button>
      </div>
      <p class="mini-check__feedback ${feedbackClass}">${escapeHtml(feedbackText)}</p>
    </div>
  `;

  posPrevStepBtn.disabled = currentPossessiveStep === 0;
  posNextStepBtn.textContent = currentPossessiveStep === possessiveSteps.length - 1
    ? "Restart Lesson"
    : "Next Step";

  renderPossessiveStepperDots();
}

function goToPossessiveStep(nextIndex) {
  const bounded = Math.min(possessiveSteps.length - 1, Math.max(0, nextIndex));
  currentPossessiveStep = bounded;
  renderPossessiveStep();
}

function handlePossessiveMiniCheckAction(action) {
  const step = possessiveSteps[currentPossessiveStep];
  const state = possessiveStepState[currentPossessiveStep];

  if (action === "check") {
    if (state.selectedIndex === null) return;
    state.checked = true;
    if (state.selectedIndex === step.miniCheck.correctIndex) {
      state.completed = true;
    }
    renderPossessiveStep();
    return;
  }

  if (action === "show") {
    state.selectedIndex = step.miniCheck.correctIndex;
    state.checked = true;
    state.completed = true;
    renderPossessiveStep();
  }
}

function renderPossessiveBuilder() {
  const ownerKey = posOwnerSelect.value;
  const caseName = posCaseSelect.value;
  const { noun, nounGender } = parsePossessiveNounSelection(posNounSelect.value);
  const owner = possessiveOwnerMap[ownerKey] || possessiveOwnerMap.ich;
  const possessive = buildPossessiveForm(ownerKey, nounGender, caseName);
  const phrase = `${possessive} ${noun}`;
  const sentence = caseName === "accusative"
    ? `Ich sehe ${phrase}.`
    : `Das ist ${phrase}.`;
  const note = caseName === "accusative" && nounGender === "masculine"
    ? "Masculine accusative adds -en (example: meinen Hund)."
    : "Only the noun gender and case decide the ending here.";
  const speakText = `${phrase}. ${sentence}`;

  posBuilderResult.innerHTML = `
    <div class="time-speak-row">
      <strong>Possessive phrase:</strong> <span class="drill-result__sentence"><em>${escapeHtml(phrase)}</em></span>
      ${speechSupported() ? `
        <button type="button" class="speak-btn" data-speak-text="${escapeHtml(speakText)}" aria-label="Speak possessive phrase and sentence" title="Speak pronunciation">🔊</button>
      ` : ""}
    </div>
    <p class="drill-result__sentence">English idea: ${escapeHtml(owner.label)} ${escapeHtml(noun.toLowerCase())}</p>
    <p class="drill-result__sentence">Sentence: ${escapeHtml(sentence).replace(escapeHtml(phrase), `<em>${escapeHtml(phrase)}</em>`)}</p>
    <p class="drill-result__explain">Form used: ${escapeHtml(possessive)} (case: ${escapeHtml(caseName)}, noun gender: ${escapeHtml(nounGender)}). ${escapeHtml(note)}</p>
  `;
}

function refillPossessiveQuizDeck() {
  possessiveQuizDeck = shuffleArray(possessiveQuizQuestions.map((_, index) => index));
}

function renderPossessiveQuizScore() {
  posQuizScore.textContent = `Score: ${possessiveQuizScoreState.correct} / ${possessiveQuizScoreState.total}`;
}

function renderPossessiveQuizQuestion() {
  if (!currentPossessiveQuizQuestion) {
    posQuizCard.innerHTML = `
      <p class="acc-quiz-card__eyebrow">Possessive Quiz</p>
      <p class="acc-quiz-card__question">No question loaded</p>
    `;
    posQuizOptions.innerHTML = "";
    posQuizFeedback.textContent = "";
    return;
  }

  posQuizCard.innerHTML = `
    <p class="acc-quiz-card__eyebrow">${escapeHtml(currentPossessiveQuizQuestion.category)}</p>
    <p class="acc-quiz-card__question">${escapeHtml(currentPossessiveQuizQuestion.prompt)}</p>
    <p class="acc-quiz-card__hint">${escapeHtml(currentPossessiveQuizQuestion.hint)}</p>
  `;

  posQuizOptions.innerHTML = currentPossessiveQuizQuestion.options.map((option, index) => {
    const classes = ["quiz-option"];
    if (selectedPossessiveQuizOptionIndex === index) classes.push("is-selected");
    if (possessiveQuizAnswered && index === currentPossessiveQuizQuestion.correctIndex) classes.push("is-correct");
    if (
      possessiveQuizAnswered &&
      selectedPossessiveQuizOptionIndex === index &&
      selectedPossessiveQuizOptionIndex !== currentPossessiveQuizQuestion.correctIndex
    ) {
      classes.push("is-wrong");
    }

    return `
      <button
        type="button"
        class="${classes.join(" ")}"
        data-pos-quiz-option="${index}"
        role="radio"
        aria-checked="${selectedPossessiveQuizOptionIndex === index ? "true" : "false"}"
      >
        ${escapeHtml(option)}
      </button>
    `;
  }).join("");

  posQuizCheckBtn.disabled = possessiveQuizAnswered;
  posQuizNextBtn.disabled = !possessiveQuizAnswered;
}

function loadNextPossessiveQuizQuestion() {
  if (possessiveQuizDeck.length === 0) {
    refillPossessiveQuizDeck();
  }

  const questionIndex = possessiveQuizDeck.pop();
  currentPossessiveQuizQuestion = possessiveQuizQuestions[questionIndex];
  selectedPossessiveQuizOptionIndex = null;
  possessiveQuizAnswered = false;
  posQuizFeedback.textContent = "";
  posQuizFeedback.className = "quiz-feedback";
  renderPossessiveQuizQuestion();
}

function resetPossessiveQuiz() {
  possessiveQuizScoreState = { correct: 0, total: 0 };
  renderPossessiveQuizScore();
  refillPossessiveQuizDeck();
  loadNextPossessiveQuizQuestion();
}

function checkPossessiveQuizAnswer() {
  if (possessiveQuizAnswered || selectedPossessiveQuizOptionIndex === null || !currentPossessiveQuizQuestion) {
    if (selectedPossessiveQuizOptionIndex === null && !possessiveQuizAnswered) {
      posQuizFeedback.textContent = "Select an answer first.";
      posQuizFeedback.className = "quiz-feedback";
    }
    return;
  }

  possessiveQuizAnswered = true;
  possessiveQuizScoreState.total += 1;
  const isCorrect = selectedPossessiveQuizOptionIndex === currentPossessiveQuizQuestion.correctIndex;
  if (isCorrect) {
    possessiveQuizScoreState.correct += 1;
  }

  renderPossessiveQuizScore();
  renderPossessiveQuizQuestion();
  posQuizFeedback.textContent = isCorrect
    ? `Correct. ${currentPossessiveQuizQuestion.explanation}`
    : `Not correct. ${currentPossessiveQuizQuestion.explanation}`;
  posQuizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
}

const germanNumberBase = {
  0: "null",
  1: "eins",
  2: "zwei",
  3: "drei",
  4: "vier",
  5: "fünf",
  6: "sechs",
  7: "sieben",
  8: "acht",
  9: "neun",
  10: "zehn",
  11: "elf",
  12: "zwölf",
  13: "dreizehn",
  14: "vierzehn",
  15: "fünfzehn",
  16: "sechzehn",
  17: "siebzehn",
  18: "achtzehn",
  19: "neunzehn"
};

const germanTens = {
  20: "zwanzig",
  30: "dreißig",
  40: "vierzig",
  50: "fünfzig",
  60: "sechzig",
  70: "siebzig",
  80: "achtzig",
  90: "neunzig"
};

function germanNumberWord(num, options = {}) {
  const n = Math.trunc(Number(num));
  if (!Number.isFinite(n)) return "";
  const { oneAsEin = false } = options;

  if (n < 0) {
    return `minus ${germanNumberWord(Math.abs(n))}`;
  }

  if (n in germanNumberBase) {
    if (n === 1 && oneAsEin) return "ein";
    return germanNumberBase[n];
  }

  if (n < 60) {
    const tens = Math.floor(n / 10) * 10;
    const ones = n % 10;
    const tensWord = germanTens[tens] || "";
    if (ones === 0) return tensWord;
    const onesWord = ones === 1 ? "ein" : germanNumberBase[ones];
    return `${onesWord}und${tensWord}`;
  }

  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    const hundredsPrefix = hundreds === 1 ? "ein" : germanNumberWord(hundreds, { oneAsEin: true });
    return `${hundredsPrefix}hundert${rest ? germanNumberWord(rest) : ""}`;
  }

  if (n < 1000000) {
    const thousands = Math.floor(n / 1000);
    const rest = n % 1000;
    const thousandsPrefix = thousands === 1 ? "ein" : germanNumberWord(thousands, { oneAsEin: true });
    return `${thousandsPrefix}tausend${rest ? germanNumberWord(rest) : ""}`;
  }

  return String(n);
}

function germanHourWord12(hour, options = {}) {
  const h = ((Number(hour) % 12) + 12) % 12 || 12;
  const exact = Boolean(options.exact);
  return germanNumberWord(h, { oneAsEin: exact && h === 1 });
}

function germanHourWord24(hour) {
  const h = Math.max(0, Math.min(23, Number(hour) || 0));
  return germanNumberWord(h, { oneAsEin: h === 1 });
}

function officialGermanTimePhrase(hour24, minute) {
  const hourWord = germanHourWord24(hour24);
  const m = Number(minute);
  if (m === 0) {
    return `Es ist ${hourWord} Uhr.`;
  }
  if (m < 10) {
    return `Es ist ${hourWord} Uhr null ${germanNumberWord(m)}.`;
  }
  return `Es ist ${hourWord} Uhr ${germanNumberWord(m)}.`;
}

function unofficialGermanTimePhrase(hour24, minute) {
  const h = Number(hour24);
  const m = Number(minute);
  const currentHour = germanHourWord12(h, { exact: false });
  const nextHour = germanHourWord12(h + 1, { exact: false });

  if (m === 0) return `Es ist ${germanHourWord12(h, { exact: true })} Uhr.`;
  if (m === 15) return `Es ist Viertel nach ${currentHour}.`;
  if (m === 30) return `Es ist halb ${nextHour}.`;
  if (m === 45) return `Es ist Viertel vor ${nextHour}.`;

  if (m < 30) {
    return `Es ist ${germanNumberWord(m)} nach ${currentHour}.`;
  }

  return `Es ist ${germanNumberWord(60 - m)} vor ${nextHour}.`;
}

function format12hChip(hour24, minute) {
  const h = Number(hour24);
  const m = Number(minute);
  const period = h >= 12 ? "PM" : "AM";
  const h12 = (h % 12) || 12;
  return `${h12}:${String(m).padStart(2, "0")} ${period}`;
}

function buildClockFaceOnce() {
  if (clockMarkupBuilt || !clockFace) return;

  for (let minute = 0; minute < 60; minute += 1) {
    const tick = document.createElement("div");
    tick.className = `clock-tick${minute % 5 === 0 ? " is-major" : ""}`;
    tick.style.setProperty("--angle", `${minute * 6}deg`);
    clockFace.appendChild(tick);
  }

  for (let number = 1; number <= 12; number += 1) {
    const numberEl = document.createElement("div");
    numberEl.className = "clock-number";
    numberEl.style.setProperty("--angle", `${number * 30}deg`);
    numberEl.textContent = String(number);
    clockFace.appendChild(numberEl);
  }

  clockMarkupBuilt = true;
}

function renderTimePhraseCard(target, { label, phrase, hint }) {
  if (!target) return;
  target.innerHTML = `
    <div class="time-phrase-card__top">
      <div>
        <p class="time-phrase-card__label">${escapeHtml(label)}</p>
        <p class="time-phrase-card__text">${escapeHtml(phrase)}</p>
      </div>
      ${speechSupported() ? `
        <button type="button" class="speak-btn" data-speak-text="${escapeHtml(phrase)}" aria-label="Speak ${escapeHtml(label)} time" title="Speak pronunciation">🔊</button>
      ` : ""}
    </div>
    <p class="time-phrase-card__hint">${escapeHtml(hint)}</p>
  `;
}

function updateAnalogClock(hour24, minute) {
  if (!clockHourHand || !clockMinuteHand) return;
  const m = Number(minute);
  const h = Number(hour24);
  const minuteDegrees = m * 6;
  const hourDegrees = ((h % 12) * 30) + (m * 0.5);

  clockMinuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  clockHourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

function renderGermanTimeTab() {
  const hour = Number(timeHourInput.value);
  const minute = Number(timeMinuteInput.value);
  const official = officialGermanTimePhrase(hour, minute);
  const unofficial = unofficialGermanTimePhrase(hour, minute);

  timeDigitalChip.textContent = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
  time12hChip.textContent = format12hChip(hour, minute);

  renderTimePhraseCard(timeOfficialCard, {
    label: "Official Time (official / digital)",
    phrase: official,
    hint: "Common in stations, announcements, schedules, and formal contexts."
  });

  renderTimePhraseCard(timeUnofficialCard, {
    label: "Unofficial Time (spoken / everyday)",
    phrase: unofficial,
    hint: "Common in conversation with nach, vor, halb, Viertel."
  });

  updateAnalogClock(hour, minute);
}

function setTimeControls(hour24, minute) {
  timeHourInput.value = String(Math.max(0, Math.min(23, Number(hour24) || 0)));
  timeMinuteInput.value = String(Math.max(0, Math.min(59, Number(minute) || 0)));
  renderGermanTimeTab();
}

function clampNumbersValue(value) {
  const parsed = Math.trunc(Number(value));
  if (!Number.isFinite(parsed)) return 0;
  return Math.max(0, Math.min(NUMBERS_MAX_VALUE, parsed));
}

function englishOrdinalLabel(num) {
  const n = Math.max(0, Math.trunc(Number(num) || 0));
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return `${n}th`;
  const mod10 = n % 10;
  if (mod10 === 1) return `${n}st`;
  if (mod10 === 2) return `${n}nd`;
  if (mod10 === 3) return `${n}rd`;
  return `${n}th`;
}

function germanOrdinalStem(num) {
  const n = Math.max(0, Math.trunc(Number(num) || 0));
  if (n === 1) return "erst";
  if (n === 3) return "dritt";
  if (n === 7) return "siebt";
  if (n === 8) return "acht";
  return germanNumberWord(n);
}

function germanOrdinalPlain(num) {
  const n = Math.max(0, Math.trunc(Number(num) || 0));
  const basics = {
    0: "nullte",
    1: "erste",
    2: "zweite",
    3: "dritte",
    4: "vierte",
    5: "fünfte",
    6: "sechste",
    7: "siebte",
    8: "achte",
    9: "neunte",
    10: "zehnte",
    11: "elfte",
    12: "zwölfte",
    13: "dreizehnte",
    14: "vierzehnte",
    15: "fünfzehnte",
    16: "sechzehnte",
    17: "siebzehnte",
    18: "achtzehnte",
    19: "neunzehnte"
  };

  if (Object.prototype.hasOwnProperty.call(basics, n)) {
    return basics[n];
  }

  return `${germanNumberWord(n)}ste`;
}

function germanOrdinalDateForm(num) {
  const plain = germanOrdinalPlain(num);
  if (!plain) return "";
  return plain.endsWith("e") ? `${plain.slice(0, -1)}en` : `${plain}n`;
}

function germanOrdinalWithArticle(num) {
  return `der ${germanOrdinalPlain(num)}`;
}

function getGermanMonthName(monthNumber) {
  const month = Math.max(1, Math.min(12, Math.trunc(Number(monthNumber) || 1)));
  return germanMonthNames[month];
}

function getEnglishMonthName(monthNumber) {
  const month = Math.max(1, Math.min(12, Math.trunc(Number(monthNumber) || 1)));
  return englishMonthNames[month];
}

function germanMonthOrdinalNoun(monthNumber) {
  return capitalizeGermanNounClient(germanOrdinalDateForm(monthNumber));
}

function getNumbersExplorerValue() {
  if (numbersValueInput && numbersValueInput.value !== "") {
    return clampNumbersValue(numbersValueInput.value);
  }
  if (numbersValueRange) {
    return clampNumbersValue(numbersValueRange.value);
  }
  return 0;
}

function isNumbersOrdinalHighlight(dayNumber) {
  return [1, 3, 7, 8, 20, 30].includes(Number(dayNumber));
}

function buildGermanNumberBreakdown(num) {
  const n = clampNumbersValue(num);
  const word = germanNumberWord(n);
  const chips = [{ de: String(n), en: `the number ${n}` }];
  let note = "Read it aloud and repeat the German word slowly.";

  if (n < 20) {
    chips.push({ de: word, en: "basic number word (memorize as one form)" });
    if (n >= 13 && n <= 19) {
      note = "Numbers 13-19 often end with -zehn (like English '-teen').";
    } else {
      note = "This is a basic number form. Practice it as a whole word.";
    }
    return { chips, note };
  }

  if (n < 100) {
    const tens = Math.floor(n / 10) * 10;
    const ones = n % 10;
    if (ones === 0) {
      chips.push({ de: germanNumberWord(tens), en: "tens word (20, 30, 40...)" });
      note = "Exact tens are single words (zwanzig, dreißig, vierzig...).";
      return { chips, note };
    }

    chips.push({
      de: ones === 1 ? "ein" : germanNumberWord(ones),
      en: "ones part comes first"
    });
    chips.push({ de: "und", en: "and" });
    chips.push({ de: germanNumberWord(tens), en: "tens part comes after" });
    chips.push({ de: word, en: "combined German spelling" });
    note = "German often says 24 as 'four-and-twenty' (vier-und-zwanzig).";
    return { chips, note };
  }

  if (n < 1000) {
    const hundreds = Math.floor(n / 100);
    const rest = n % 100;
    chips.push({
      de: hundreds === 1 ? "einhundert" : `${germanNumberWord(hundreds, { oneAsEin: true })}hundert`,
      en: hundreds === 1 ? "one hundred" : `${hundreds} hundred`
    });
    if (rest > 0) {
      chips.push({ de: germanNumberWord(rest), en: "remaining part after the hundreds" });
    }
    chips.push({ de: word, en: "full German number word" });
    note = "German joins number parts into one long word (hundreds + remainder).";
    return { chips, note };
  }

  chips.push({ de: word, en: "German number word" });
  return { chips, note };
}

function renderNumbersQuickList(activeValue = getNumbersExplorerValue()) {
  if (!numbersQuickList) return;

  numbersQuickList.innerHTML = numbersQuickPickValues.map((value) => `
    <button
      type="button"
      class="numbers-quick-btn ${Number(activeValue) === value ? "is-active" : ""}"
      data-number-pick="${value}"
      aria-pressed="${Number(activeValue) === value ? "true" : "false"}"
      title="Use ${value}"
    >
      ${value}
    </button>
  `).join("");
}

function setNumbersExplorerValue(value) {
  const safeValue = clampNumbersValue(value);
  if (numbersValueRange) numbersValueRange.value = String(safeValue);
  if (numbersValueInput) numbersValueInput.value = String(safeValue);
  renderGermanNumbersExplorer();
}

function renderGermanNumbersExplorer() {
  if (!numbersCardinalCard || !numbersOrdinalCard || !numbersDateformCard) return;

  const value = getNumbersExplorerValue();
  const cardinal = germanNumberWord(value);
  const ordinal = germanOrdinalWithArticle(value);

  renderNumbersQuickList(value);

  renderTimePhraseCard(numbersCardinalCard, {
    label: "Cardinal Number (counting)",
    phrase: `${value} = ${cardinal}`,
    hint: "Use this form for counting, prices, quantities, and time digits."
  });

  renderTimePhraseCard(numbersOrdinalCard, {
    label: "Ordinal Number (order)",
    phrase: `${value}. = ${ordinal}`,
    hint: "Use ordinal numbers for order: first, second, third... (der erste, der zweite, der dritte)."
  });

  if (value >= 1 && value <= 31) {
    const dateForm = germanOrdinalDateForm(value);
    renderTimePhraseCard(numbersDateformCard, {
      label: "Date Form (Wann? Am ...)",
      phrase: `am ${dateForm}`,
      hint: "Date phrases commonly use 'am' + ordinal date form (e.g. am fünften, am zwanzigsten)."
    });
  } else {
    renderTimePhraseCard(numbersDateformCard, {
      label: "Date Form (Wann? Am ...)",
      phrase: "Choose a day number from 1 to 31",
      hint: "Dates usually use day numbers 1-31. Try 1, 5, 10, 20, or 30."
    });
  }

  const breakdown = buildGermanNumberBreakdown(value);
  renderBreakdownChips(numbersBreakdown, breakdown.chips);
  if (numbersBreakdownNote) {
    numbersBreakdownNote.textContent = breakdown.note;
  }
}

function populateNumbersDateControls() {
  if (numbersDaySelect && numbersDaySelect.options.length === 0) {
    for (let day = 1; day <= 31; day += 1) {
      const option = document.createElement("option");
      option.value = String(day);
      option.textContent = `${day}. (${germanOrdinalDateForm(day)})`;
      numbersDaySelect.appendChild(option);
    }
    numbersDaySelect.value = "15";
  }

  if (numbersMonthSelect && numbersMonthSelect.options.length === 0) {
    for (let month = 1; month <= 12; month += 1) {
      const option = document.createElement("option");
      option.value = String(month);
      option.textContent = `${month}. ${getGermanMonthName(month)}`;
      numbersMonthSelect.appendChild(option);
    }
    numbersMonthSelect.value = "11";
  }
}

function renderNumbersOrdinalReference() {
  if (!numbersOrdinalReference) return;

  numbersOrdinalReference.innerHTML = ordinalReferenceValues.map((day) => {
    const dateWord = germanOrdinalDateForm(day);
    const highlightClass = isNumbersOrdinalHighlight(day) ? "is-highlight" : "";

    return `
      <article class="numbers-ordinal-item" data-ordinal-day="${day}">
        <div class="numbers-ordinal-item__top">
          <span class="numbers-ordinal-item__num">${day}.</span>
          <div class="time-speak-row">
            <button
              type="button"
              class="filter-btn filter-btn--ghost"
              data-ordinal-day="${day}"
              aria-label="Use day ${day}"
              title="Use this day in the date builder"
            >
              Use
            </button>
            ${buildSpeakButtonHtml(`am ${dateWord}`, `Speak date form for ${day}`)}
          </div>
        </div>
        <p class="numbers-ordinal-item__word ${highlightClass}">${escapeHtml(dateWord)}</p>
        <p class="numbers-ordinal-item__hint">Wann? <strong>am ${escapeHtml(dateWord)}</strong></p>
      </article>
    `;
  }).join("");
}

function getSelectedNumbersDateValues() {
  const day = Math.max(1, Math.min(31, Number(numbersDaySelect?.value || 1)));
  const month = Math.max(1, Math.min(12, Number(numbersMonthSelect?.value || 1)));
  const topicKey = String(numbersDateTopicSelect?.value || "birthday");
  return { day, month, topicKey };
}

function renderNumbersDateBuilder() {
  if (!numbersDatePhraseCard || !numbersDateExampleCard) return;

  const { day, month, topicKey } = getSelectedNumbersDateValues();
  const dayDateWord = germanOrdinalDateForm(day);
  const monthGerman = getGermanMonthName(month);
  const monthEnglish = getEnglishMonthName(month);
  const monthOrdinalNoun = germanMonthOrdinalNoun(month);
  const datePhrase = `am ${dayDateWord} ${monthGerman}`;
  const altDatePhrase = `am ${dayDateWord} ${monthOrdinalNoun}`;
  const topicTemplate = numbersDateTopicTemplates[topicKey] || numbersDateTopicTemplates.birthday;
  const exampleGerman = topicTemplate.de(datePhrase);
  const exampleEnglish = topicTemplate.en(englishOrdinalLabel(day), monthEnglish);

  renderTimePhraseCard(numbersDatePhraseCard, {
    label: "Date Phrase (month name)",
    phrase: datePhrase,
    hint: `Question: "Wann?" -> "${datePhrase}". You can also hear/read the month as a number: ${altDatePhrase}.`
  });

  renderTimePhraseCard(numbersDateExampleCard, {
    label: `${topicTemplate.label} Example Sentence`,
    phrase: exampleGerman,
    hint: `English: ${exampleEnglish}`
  });

  const breakdownChips = [];
  if (topicTemplate.introChip) breakdownChips.push(topicTemplate.introChip);
  breakdownChips.push(
    { de: "am", en: "on (used with dates)" },
    { de: dayDateWord, en: `the ${englishOrdinalLabel(day)} (date form)` },
    { de: monthGerman, en: monthEnglish }
  );
  if (topicTemplate.outroChip) breakdownChips.push(topicTemplate.outroChip);
  renderBreakdownChips(numbersDateBreakdown, breakdownChips);
}

function ensureNumbersTabReady() {
  if (!numbersPanel) return;

  if (numbersDaySelect && numbersDaySelect.options.length === 0) {
    populateNumbersDateControls();
  }

  if (numbersOrdinalReference && numbersOrdinalReference.childElementCount === 0) {
    renderNumbersOrdinalReference();
  }

  if (numbersCardinalCard && !numbersCardinalCard.textContent.trim()) {
    renderGermanNumbersExplorer();
  }

  if (numbersDatePhraseCard && !numbersDatePhraseCard.textContent.trim()) {
    renderNumbersDateBuilder();
  }

  if (numbersQuizCard && !numbersQuizCard.textContent.trim()) {
    resetNumbersQuiz();
  }
}

function numbersRandomInt(min, max) {
  const safeMin = Math.ceil(Math.min(min, max));
  const safeMax = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (safeMax - safeMin + 1)) + safeMin;
}

function buildNumbersCardinalQuizQuestion() {
  const value = Math.random() < 0.8 ? numbersRandomInt(0, 99) : numbersRandomInt(100, 399);
  const correct = germanNumberWord(value);
  const candidateValues = new Set([value]);
  const deltas = shuffleArray([1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 20, 30, 40, 50]);

  for (const delta of deltas) {
    if (candidateValues.size >= 4) break;
    const plus = value + delta;
    const minus = value - delta;
    if (plus >= 0 && plus <= NUMBERS_MAX_VALUE) candidateValues.add(plus);
    if (candidateValues.size >= 4) break;
    if (minus >= 0 && minus <= NUMBERS_MAX_VALUE) candidateValues.add(minus);
  }

  while (candidateValues.size < 4) {
    candidateValues.add(numbersRandomInt(0, Math.min(NUMBERS_MAX_VALUE, 399)));
  }

  const optionValues = shuffleArray(Array.from(candidateValues).slice(0, 4));
  const options = optionValues.map((item) => germanNumberWord(item));
  const correctIndex = optionValues.indexOf(value);

  return {
    category: "Cardinal Numbers",
    prompt: `Which is the correct German word for ${value}?`,
    hint: "Choose the correct spelling. Then use the speaker button to hear it.",
    options,
    correctIndex,
    explanation: `${value} is written "${correct}".`,
    speakText: correct
  };
}

function buildNumbersListeningQuizQuestion() {
  const value = Math.random() < 0.85 ? numbersRandomInt(0, 99) : numbersRandomInt(100, 299);
  const spoken = germanNumberWord(value);
  const candidateValues = new Set([value]);

  while (candidateValues.size < 4) {
    const candidate = clampNumbersValue(value + numbersRandomInt(-20, 20));
    candidateValues.add(candidate);
  }

  const options = shuffleArray(Array.from(candidateValues)).slice(0, 4);
  const correctIndex = options.indexOf(value);

  return {
    category: "Listening Practice",
    prompt: "Listen and choose the number you hear.",
    hint: "Click the speaker icon and choose the correct digits.",
    options: options.map((item) => String(item)),
    correctIndex,
    explanation: `You heard "${spoken}" = ${value}.`,
    speakText: spoken,
    meta: "Replay the audio and listen for the ones part + tens part."
  };
}

function buildNumbersDateOrdinalQuizQuestion() {
  const day = numbersRandomInt(1, 31);
  const month = numbersRandomInt(1, 12);
  const correct = germanOrdinalDateForm(day);
  const wrongForms = new Set([
    germanOrdinalPlain(day),
    `${germanOrdinalPlain(day)}n`,
    germanOrdinalDateForm(Math.max(1, Math.min(31, day + (day === 31 ? -1 : 1))))
  ]);
  wrongForms.delete(correct);

  while (wrongForms.size < 3) {
    wrongForms.add(germanOrdinalDateForm(numbersRandomInt(1, 31)));
    wrongForms.delete(correct);
  }

  const options = shuffleArray([correct, ...Array.from(wrongForms).slice(0, 3)]);
  const correctIndex = options.indexOf(correct);
  const monthName = getGermanMonthName(month);

  return {
    category: "Ordinalzahlen (Datum)",
    prompt: `Complete the date phrase: am ___ ${monthName} (${day}.)`,
    hint: "After 'am' for dates, use the date form (usually ending in -ten or -sten).",
    options,
    correctIndex,
    explanation: `Correct: "am ${correct} ${monthName}". Date phrases use "am" + ordinal date form.`,
    speakText: `am ${correct} ${monthName}`
  };
}

function buildNumbersQuizQuestion() {
  const builders = [
    buildNumbersCardinalQuizQuestion,
    buildNumbersListeningQuizQuestion,
    buildNumbersDateOrdinalQuizQuestion
  ];
  const builder = builders[numbersRandomInt(0, builders.length - 1)];
  return builder();
}

function renderNumbersQuizScore() {
  if (!numbersQuizScore) return;
  numbersQuizScore.textContent = `Score: ${numbersQuizScoreState.correct} / ${numbersQuizScoreState.total}`;
}

function renderNumbersQuizQuestion() {
  if (!numbersQuizCard || !numbersQuizOptions || !numbersQuizFeedback) return;

  if (!numbersQuizQuestion) {
    numbersQuizCard.innerHTML = `
      <p class="acc-quiz-card__eyebrow">Quiz</p>
      <p class="acc-quiz-card__question">No question loaded.</p>
    `;
    numbersQuizOptions.innerHTML = "";
    numbersQuizFeedback.textContent = "";
    return;
  }

  numbersQuizCard.innerHTML = `
    <p class="acc-quiz-card__eyebrow">${escapeHtml(numbersQuizQuestion.category)}</p>
    <div class="numbers-quiz-card__prompt-row">
      <div class="numbers-quiz-card__prompt-col">
        <p class="acc-quiz-card__question">${escapeHtml(numbersQuizQuestion.prompt)}</p>
        <p class="acc-quiz-card__hint">${escapeHtml(numbersQuizQuestion.hint)}</p>
        ${numbersQuizQuestion.meta ? `<p class="numbers-quiz-card__meta">${escapeHtml(numbersQuizQuestion.meta)}</p>` : ""}
      </div>
      ${buildSpeakButtonHtml(numbersQuizQuestion.speakText || "", `Speak quiz item for ${numbersQuizQuestion.category}`)}
    </div>
  `;

  numbersQuizOptions.innerHTML = numbersQuizQuestion.options.map((option, index) => {
    const classes = ["quiz-option"];
    if (numbersQuizSelectedIndex === index) classes.push("is-selected");

    if (numbersQuizAnswered) {
      if (index === numbersQuizQuestion.correctIndex) {
        classes.push("is-correct");
      } else if (index === numbersQuizSelectedIndex) {
        classes.push("is-wrong");
      }
    }

    return `
      <button
        type="button"
        class="${classes.join(" ")}"
        data-numbers-quiz-option="${index}"
        role="radio"
        aria-checked="${numbersQuizSelectedIndex === index ? "true" : "false"}"
      >
        ${escapeHtml(option)}
      </button>
    `;
  }).join("");
}

function loadNextNumbersQuizQuestion() {
  numbersQuizQuestion = buildNumbersQuizQuestion();
  numbersQuizSelectedIndex = null;
  numbersQuizAnswered = false;
  if (numbersQuizFeedback) {
    numbersQuizFeedback.textContent = "Choose an answer, then click Check Answer.";
    numbersQuizFeedback.className = "quiz-feedback";
  }
  renderNumbersQuizQuestion();
}

function checkNumbersQuizAnswer() {
  if (!numbersQuizQuestion) {
    loadNextNumbersQuizQuestion();
    return;
  }

  if (numbersQuizAnswered) return;

  if (numbersQuizSelectedIndex === null) {
    if (numbersQuizFeedback) {
      numbersQuizFeedback.textContent = "Choose one option first.";
      numbersQuizFeedback.className = "quiz-feedback is-wrong";
    }
    return;
  }

  numbersQuizAnswered = true;
  numbersQuizScoreState.total += 1;
  const isCorrect = numbersQuizSelectedIndex === numbersQuizQuestion.correctIndex;
  if (isCorrect) {
    numbersQuizScoreState.correct += 1;
  }

  renderNumbersQuizScore();
  renderNumbersQuizQuestion();

  if (numbersQuizFeedback) {
    numbersQuizFeedback.textContent = isCorrect
      ? `Correct. ${numbersQuizQuestion.explanation}`
      : `Not correct. ${numbersQuizQuestion.explanation}`;
    numbersQuizFeedback.className = `quiz-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  }
}

function resetNumbersQuiz() {
  numbersQuizScoreState = { correct: 0, total: 0 };
  renderNumbersQuizScore();
  loadNextNumbersQuizQuestion();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleLiveLookup(input.value);
});

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveFilter(btn.dataset.filter);
  });
});

randomBtn.addEventListener("click", () => {
  const source = words.filter((entry) => activeFilter === "all" || entry.gender === activeFilter);
  if (source.length === 0) return;
  const entry = source[Math.floor(Math.random() * source.length)];
  input.value = entry.word;
  renderResult(entry);
});

resultCard.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

genderBatchAddBtn.addEventListener("click", () => {
  const added = addGenderBatchTag(genderBatchWordInput.value);
  if (added) {
    genderBatchWordInput.value = "";
    genderBatchWordInput.focus();
  }
});

genderBatchWordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === ",") {
    event.preventDefault();
    const added = addGenderBatchTag(genderBatchWordInput.value);
    if (added) {
      genderBatchWordInput.value = "";
    }
    return;
  }

  if (event.key === "Backspace" && !genderBatchWordInput.value.trim() && genderBatchTags.length > 0) {
    const lastTag = genderBatchTags[genderBatchTags.length - 1];
    removeGenderBatchTag(lastTag);
  }
});

genderBatchTagsWrap.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gender-batch-remove]");
  if (!button) return;
  removeGenderBatchTag(button.dataset.genderBatchRemove || "");
});

genderBatchModeToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-gender-batch-mode]");
  if (!button) return;
  setGenderBatchMode(button.dataset.genderBatchMode || "simple");
});

genderBatchGenerateBtn.addEventListener("click", () => {
  generateGenderBatchSentences();
});

genderBatchClearBtn.addEventListener("click", () => {
  clearGenderBatchTags();
});

genderBatchResults.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tabTarget);
  });

  button.addEventListener("keydown", (event) => {
    const key = event.key;
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;

    event.preventDefault();

    let nextIndex = index;
    if (key === "ArrowRight") nextIndex = (index + 1) % tabButtons.length;
    if (key === "ArrowLeft") nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    if (key === "Home") nextIndex = 0;
    if (key === "End") nextIndex = tabButtons.length - 1;

    const nextButton = tabButtons[nextIndex];
    activateTab(nextButton.dataset.tabTarget, true);
  });
});

accPrevStepBtn.addEventListener("click", () => {
  goToAccusativeStep(currentAccusativeStep - 1);
});

accNextStepBtn.addEventListener("click", () => {
  if (currentAccusativeStep === accusativeSteps.length - 1) {
    goToAccusativeStep(0);
    return;
  }
  goToAccusativeStep(currentAccusativeStep + 1);
});

accStepperDots.addEventListener("click", (event) => {
  const button = event.target.closest(".stepper-dot");
  if (!button) return;
  const nextIndex = Number(button.dataset.stepIndex);
  if (!Number.isFinite(nextIndex)) return;
  goToAccusativeStep(nextIndex);
});

accStepContent.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-mini-option]");
  if (optionButton) {
    const stepState = accusativeStepState[currentAccusativeStep];
    stepState.selectedIndex = Number(optionButton.dataset.miniOption);
    if (stepState.checked) {
      stepState.checked = false;
    }
    renderAccusativeStep();
    return;
  }

  const actionButton = event.target.closest("[data-mini-action]");
  if (actionButton) {
    handleAccusativeMiniCheckAction(actionButton.dataset.miniAction);
  }
});

accPhraseSelect.addEventListener("change", renderAccusativeDrill);
accVerbSelect.addEventListener("change", renderAccusativeDrill);

accQuizOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-quiz-option]");
  if (!optionButton || quizAnswered) return;
  selectedQuizOptionIndex = Number(optionButton.dataset.quizOption);
  renderQuizQuestion();
});

accQuizCheckBtn.addEventListener("click", checkQuizAnswer);
accQuizNextBtn.addEventListener("click", loadNextQuizQuestion);
accQuizResetBtn.addEventListener("click", resetQuiz);

posPrevStepBtn.addEventListener("click", () => {
  goToPossessiveStep(currentPossessiveStep - 1);
});

posNextStepBtn.addEventListener("click", () => {
  if (currentPossessiveStep === possessiveSteps.length - 1) {
    goToPossessiveStep(0);
    return;
  }
  goToPossessiveStep(currentPossessiveStep + 1);
});

posStepperDots.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pos-step-index]");
  if (!button) return;
  const nextIndex = Number(button.dataset.posStepIndex);
  if (!Number.isFinite(nextIndex)) return;
  goToPossessiveStep(nextIndex);
});

posStepContent.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-pos-mini-option]");
  if (optionButton) {
    const stepState = possessiveStepState[currentPossessiveStep];
    stepState.selectedIndex = Number(optionButton.dataset.posMiniOption);
    if (stepState.checked) {
      stepState.checked = false;
    }
    renderPossessiveStep();
    return;
  }

  const actionButton = event.target.closest("[data-pos-mini-action]");
  if (actionButton) {
    handlePossessiveMiniCheckAction(actionButton.dataset.posMiniAction);
  }
});

posOwnerSelect.addEventListener("change", renderPossessiveBuilder);
posNounSelect.addEventListener("change", renderPossessiveBuilder);
posCaseSelect.addEventListener("change", renderPossessiveBuilder);

posBuilderResult.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

posQuizOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-pos-quiz-option]");
  if (!optionButton || possessiveQuizAnswered) return;
  selectedPossessiveQuizOptionIndex = Number(optionButton.dataset.posQuizOption);
  renderPossessiveQuizQuestion();
});

posQuizCheckBtn.addEventListener("click", checkPossessiveQuizAnswer);
posQuizNextBtn.addEventListener("click", loadNextPossessiveQuizQuestion);
posQuizResetBtn.addEventListener("click", resetPossessiveQuiz);

timeHourInput.addEventListener("input", renderGermanTimeTab);
timeMinuteInput.addEventListener("input", renderGermanTimeTab);

timeNowBtn.addEventListener("click", () => {
  const now = new Date();
  setTimeControls(now.getHours(), now.getMinutes());
});

timeRandomBtn.addEventListener("click", () => {
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);
  setTimeControls(randomHour, randomMinute);
});

timeOfficialCard.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

timeUnofficialCard.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

if (numbersPanel) {
  numbersPanel.addEventListener("click", (event) => {
    const speakButton = event.target.closest("[data-speak-text]");
    if (!speakButton) return;
    speakGermanText(speakButton.dataset.speakText || "");
  });
}

if (numbersValueRange) {
  numbersValueRange.addEventListener("input", () => {
    setNumbersExplorerValue(numbersValueRange.value);
  });
}

if (numbersValueInput) {
  numbersValueInput.addEventListener("input", () => {
    if (numbersValueInput.value === "") return;
    setNumbersExplorerValue(numbersValueInput.value);
  });

  numbersValueInput.addEventListener("change", () => {
    setNumbersExplorerValue(numbersValueInput.value);
  });
}

if (numbersRandomBtn) {
  numbersRandomBtn.addEventListener("click", () => {
    setNumbersExplorerValue(numbersRandomInt(0, NUMBERS_MAX_VALUE));
  });
}

if (numbersQuickList) {
  numbersQuickList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-number-pick]");
    if (!button) return;
    setNumbersExplorerValue(button.dataset.numberPick || "0");
  });
}

if (numbersOrdinalReference) {
  numbersOrdinalReference.addEventListener("click", (event) => {
    const useButton = event.target.closest("[data-ordinal-day]");
    if (!useButton) return;
    if (numbersDaySelect) {
      numbersDaySelect.value = String(useButton.dataset.ordinalDay || "1");
    }
    renderNumbersDateBuilder();
  });
}

if (numbersDaySelect) {
  numbersDaySelect.addEventListener("change", renderNumbersDateBuilder);
}

if (numbersMonthSelect) {
  numbersMonthSelect.addEventListener("change", renderNumbersDateBuilder);
}

if (numbersDateTopicSelect) {
  numbersDateTopicSelect.addEventListener("change", renderNumbersDateBuilder);
}

if (numbersQuizOptions) {
  numbersQuizOptions.addEventListener("click", (event) => {
    const optionButton = event.target.closest("[data-numbers-quiz-option]");
    if (!optionButton || numbersQuizAnswered) return;
    numbersQuizSelectedIndex = Number(optionButton.dataset.numbersQuizOption);
    renderNumbersQuizQuestion();
  });
}

if (numbersQuizCheckBtn) {
  numbersQuizCheckBtn.addEventListener("click", checkNumbersQuizAnswer);
}

if (numbersQuizNextBtn) {
  numbersQuizNextBtn.addEventListener("click", loadNextNumbersQuizQuestion);
}

if (numbersQuizResetBtn) {
  numbersQuizResetBtn.addEventListener("click", resetNumbersQuiz);
}

sentenceModeToggle.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sentence-mode]");
  if (!button) return;
  setSentenceValidationMode(button.dataset.sentenceMode || "grammar");
});

sentenceInput.addEventListener("input", () => {
  scheduleLiveSentenceTranslation();
});

sentenceInput.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    validateCurrentSentence();
  }
});

sentenceClearBtn.addEventListener("click", () => {
  sentenceInput.value = "";
  latestSentenceTranslateRequest += 1;
  latestSentenceValidateRequest += 1;
  if (sentenceTranslateDebounceTimer) {
    window.clearTimeout(sentenceTranslateDebounceTimer);
    sentenceTranslateDebounceTimer = null;
  }
  sentenceValidateBtn.disabled = false;
  renderSentenceLiveTranslationIdle();
  renderSentenceValidationEmpty();
  sentenceInput.focus();
});

sentenceValidateBtn.addEventListener("click", () => {
  validateCurrentSentence();
});

sentenceHistoryClearBtn.addEventListener("click", () => {
  if (sentenceHistory.length === 0) return;
  const shouldClear = window.confirm("Clear saved sentence history on this device?");
  if (!shouldClear) return;
  sentenceHistory = [];
  saveSentenceHistoryToStorage();
  renderSentenceHistory();
});

sentenceHistoryList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-history-action]");
  if (!actionButton) return;
  const item = actionButton.closest("[data-history-id]");
  if (!item) return;

  const entry = findSentenceHistoryEntryById(item.dataset.historyId || "");
  if (!entry) return;

  if (actionButton.dataset.historyAction === "use-original") {
    setSentenceValidationMode(entry.mode);
    loadSentenceIntoEditor(entry.sentence);
    return;
  }

  if (actionButton.dataset.historyAction === "use-corrected") {
    const text = entry.correctedSentence || entry.sentence;
    setSentenceValidationMode(entry.mode);
    loadSentenceIntoEditor(text);
    return;
  }

  if (actionButton.dataset.historyAction === "revalidate") {
    setSentenceValidationMode(entry.mode);
    loadSentenceIntoEditor(entry.sentence);
    validateCurrentSentence();
  }
});

sentenceOriginalActions.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

sentenceCorrectedActions.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

sentenceAlternativesList.addEventListener("click", (event) => {
  const speakButton = event.target.closest("[data-speak-text]");
  if (!speakButton) return;
  speakGermanText(speakButton.dataset.speakText || "");
});

renderList();
renderGenderBatchTags();
renderGenderBatchModeButtons();
setGenderBatchStatus("Add nouns as tags, choose simple or complex, then generate one sentence per word.");
activateTab("panel-gender");
renderAccusativeStep();
renderAccusativeDrill();
resetQuiz();
renderPossessiveStep();
renderPossessiveBuilder();
resetPossessiveQuiz();
buildClockFaceOnce();
setTimeControls(15, 20);
populateNumbersDateControls();
renderNumbersOrdinalReference();
setNumbersExplorerValue(15);
renderNumbersDateBuilder();
ensureNumbersTabReady();
if (typeof window !== "undefined") {
  window.setTimeout(() => {
    ensureNumbersTabReady();
  }, 0);
}
sentenceHistory = loadSentenceHistoryFromStorage();
setSentenceValidationMode("grammar");
renderSentenceHistory();
renderSentenceLiveTranslationIdle();
renderSentenceValidationEmpty();
