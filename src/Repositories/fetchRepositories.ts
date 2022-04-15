const fetchRepositories = async (accountName: string) => {
  const repositoryUrl = `https://api.github.com/users/${accountName}/repos`;
  const results = await fetch(repositoryUrl);
  const resultsJson = await results.json();
  return transformRepositories(resultsJson);
};

const transformRepositories = (apiResponse: Array<any>) => {
  const result = apiResponse.map((anApiResponse) => {
    return { name: anApiResponse.name };
  });
  return result;
};

export default fetchRepositories;
