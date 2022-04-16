import httpRequest from "../Common/helpers/httpRequest";

const fetchRepositories = async (accountName: string) => {
  const repositoryUrl = `https://api.github.com/users/${accountName}/repos`;
  const results = await httpRequest(repositoryUrl);
  return transformRepositories(results);
};

const transformRepositories = (apiResponse: Array<any>) => {
  const result = apiResponse.map((anApiResponse) => {
    return { name: anApiResponse.name };
  });
  return result;
};

export default fetchRepositories;
