import { useEffect, useState } from "react";
import List from "@mui/material/List";

import { RepositoriesResults } from "./interfaces";
import fetchRepositories from "./fetchRepositories";
import ListItem from "../Common/components/ListItem";

type RepositoriesProps = {
  accountName: string;
  onClick: (text: string) => void;
};

const Repositories = ({ accountName, onClick }: RepositoriesProps) => {
  const [repositories, setRepositories] = useState<[] | RepositoriesResults[]>(
    []
  );
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const handleListItemClick = (text: string, i: number) => {
    setSelectedIndex(i);
    onClick(text);
  };

  useEffect(() => {
    if (!accountName) {
      return;
    }

    const getRepositories = async () => {
      const repositories = await fetchRepositories(accountName);
      setRepositories(repositories);
    };
    getRepositories();
  });

  return (
    <>
      <List>
        {repositories.map((aRepository, i) => (
          <ListItem
            key={`aRepository-${i}`}
            onClick={(text) => handleListItemClick(text, i)}
            selected={selectedIndex === i}
            text={aRepository.name}
          />
        ))}
      </List>
    </>
  );
};

export default Repositories;
