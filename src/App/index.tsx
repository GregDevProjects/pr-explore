import { useState } from "react";

import Accounts from "../Accounts";
import PullRequests from "../PullRequests";
import Repositories from "../Repositories";

const accounts = ["facebook", "vue", "angular"];

const App = () => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [selectedRepository, setSelectedRepository] = useState("");

  const handleAccountsClick = (account: string) => {
    setSelectedAccount(account);
    setSelectedRepository("");
  };

  const handleRepositoriesClick = (repository: string) => {
    setSelectedRepository(repository);
  };

  return (
    <>
      <Accounts
        onClick={(account) => handleAccountsClick(account)}
        accounts={accounts}
      />
      {selectedAccount && (
        <Repositories
          accountName={selectedAccount}
          onClick={(repository) => handleRepositoriesClick(repository)}
        />
      )}
      {selectedAccount && selectedRepository && (
        <PullRequests
          accountName={selectedAccount}
          repositoryName={selectedRepository}
        />
      )}
    </>
  );
};

export default App;
