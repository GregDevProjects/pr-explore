const httpRequest = async (requestUrl: string) => {
  try {
    const results = await fetch(requestUrl);
    const resultsJson = await results.json();
    return resultsJson;
  } catch (error) {
    console.error("httpRequest failed", error);
  }
};

export default httpRequest;
