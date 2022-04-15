import { useState } from "react";

import Accounts from "../Accounts";
import Repositories from "../Repositories";

const accounts = ["facebook", "vue", "angular"];

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState("");

  const handleAccountsClick = (account: string) => {
    setSelectedAccount(account);
  };

  const handleRepositoriesClick = (repository: string) => {
    console.log(repository);
  };

  return (
    <>
      <Accounts
        onClick={(account) => handleAccountsClick(account)}
        accounts={accounts}
      />
      <Repositories
        accountName={selectedAccount}
        onClick={(repository) => handleRepositoriesClick(repository)}
      />
    </>
  );
};

export default App;
