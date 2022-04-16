import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import ListItem from "../Common/components/ListItem";

type AccountsProps = {
  accounts: string[];
  onClick: (text: string) => void;
};

const Accounts = ({ accounts, onClick }: AccountsProps) => {
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const handleListItemClick = (text: string, i: number) => {
    setSelectedIndex(i);
    onClick(text);
  };

  if (!accounts || !accounts.length) {
    return <></>;
  }

  return (
    <List>
      {accounts.map((anAccount, i) => (
        <ListItem
          key={`anAccount-${i}`}
          onClick={(text) => handleListItemClick(text, i)}
          selected={selectedIndex === i}
          text={anAccount}
        />
      ))}
    </List>
  );
};

export default Accounts;
