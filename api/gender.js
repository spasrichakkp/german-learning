const { lookupWordStudyDataLive } = require("../server");
const { getRequestUrl, sendJson } = require("./_shared");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { error: "Method not allowed" });
    return;
  }

  try {
    const requestUrl = getRequestUrl(req);
    const word = requestUrl.searchParams.get("word") || "";
    const result = await lookupWordStudyDataLive(word);
    sendJson(res, 200, result);
  } catch (error) {
    sendJson(res, 502, {
      error: error?.message || "Live lookup failed"
    });
  }
};
