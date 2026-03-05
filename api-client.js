(function initGermanLearningApiClient() {
  const appConfig = (typeof window !== "undefined" && window.APP_CONFIG && typeof window.APP_CONFIG === "object")
    ? window.APP_CONFIG
    : {};
  const apiBaseUrl = String(appConfig.API_BASE_URL || "")
    .trim()
    .replace(/\/+$/, "");
  const useExternalApi = Boolean(apiBaseUrl);

  function buildApiUrl(pathname, params = {}) {
    const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    const basePath = useExternalApi ? `${apiBaseUrl}${normalizedPath}` : normalizedPath;
    const url = new URL(basePath, window.location.origin);

    for (const [key, value] of Object.entries(params || {})) {
      if (value === null || value === undefined || value === "") continue;
      url.searchParams.set(key, String(value));
    }

    return useExternalApi ? url.toString() : `${url.pathname}${url.search}`;
  }

  async function requestJson(pathname, params, fallbackMessage) {
    const response = await fetch(buildApiUrl(pathname, params));
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.error || `${fallbackMessage} with status ${response.status}`);
    }

    return data;
  }

  window.GermanLearningApi = {
    getGender(word) {
      const endpoint = useExternalApi ? "/gender" : "/api/gender";
      return requestJson(endpoint, { word }, "Lookup failed");
    },
    translateSentence(text) {
      const endpoint = useExternalApi ? "/sentence/translate" : "/api/sentence/translate";
      return requestJson(endpoint, { text }, "Translation failed");
    },
    validateSentence(text, mode) {
      const endpoint = useExternalApi ? "/sentence/validate" : "/api/sentence/validate";
      return requestJson(endpoint, { text, mode }, "Validation failed");
    },
    config: {
      useExternalApi,
      apiBaseUrl
    }
  };
}());
