const { normalizeSentenceInput, validateGermanSentence } = require("../../server");
const { getRequestUrl, sendJson } = require("../_shared");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const requestUrl = getRequestUrl(req);
    const text = normalizeSentenceInput(requestUrl.searchParams.get("text") || "");
    const mode = requestUrl.searchParams.get("mode") || "grammar";

    const result = await validateGermanSentence(text, { mode });
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
      error: error?.message || "Sentence validation failed"
    });
  }
};
