import { useEffect, useState } from "react";
import List from "@mui/material/List";

import { PullRequestResults } from "./interfaces";
import fetchPullRequests from "./fetchPullRequests";
import ListItem from "../Common/components/ListItem";

type PullRequestsProps = {
  accountName: string;
  repositoryName: string;
};

const PullRequests = ({ accountName, repositoryName }: PullRequestsProps) => {
  const [pullRequests, setPullRequests] = useState<[] | PullRequestResults[]>(
    []
  );

  useEffect(() => {
    if (!accountName || !repositoryName) {
      return;
    }

    const getPullRequests = async () => {
      const pullRequests = await fetchPullRequests(accountName, repositoryName);
      setPullRequests(pullRequests);
    };
    getPullRequests();
  });

  const getBackgroundClass = (daysOld: number) => {
    if (daysOld > 5) {
      return { backgroundColor: "red" };
    }

    if (daysOld > 2) {
      return { backgroundColor: "yellow" };
    }

    return {};
  };

  return (
    <List>
      {pullRequests.map((aPullRequest, i) => {
        const text = `(${aPullRequest.daysOld} days) ${aPullRequest.title}`;
        return (
          <ListItem
            key={`aPullRequest-${i}`}
            text={text}
            customClasses={getBackgroundClass(aPullRequest.daysOld)}
          />
        );
      })}
    </List>
  );
};

export default PullRequests;
