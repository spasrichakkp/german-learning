function getRequestUrl(req) {
  return new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
}

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

module.exports = {
  getRequestUrl,
  sendJson
};
