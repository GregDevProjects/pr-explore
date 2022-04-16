import dayjs from "dayjs";
import httpRequest from "../Common/helpers/httpRequest";

const fetchPullRequests = async (
  accountName: string,
  repositoryName: string
) => {
  const pullRequestUrl = `https://api.github.com/repos/${accountName}/${repositoryName}/pulls`;
  const results = await httpRequest(pullRequestUrl);
  return transformPullRequests(results);
};

const transformPullRequests = (apiResponse: Array<any>) => {
  const result = apiResponse.map((anApiResponse) => {
    const daysOld = dayjs().diff(anApiResponse.created_at, "day");
    return { title: anApiResponse.title, daysOld };
  });
  return result;
};

export default fetchPullRequests;
