const { normalizeSentenceInput, translateGermanSentenceToEnglish } = require("../../server");
const { getRequestUrl, sendJson } = require("../_shared");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const requestUrl = getRequestUrl(req);
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
      error: error?.message || "Live sentence translation failed"
    });
  }
};
