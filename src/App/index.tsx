import { useState } from "react";
import Grid from "@mui/material/Grid";

import Accounts from "../Accounts";
import PullRequests from "../PullRequests";
import Repositories from "../Repositories";
import styles from "./index.styles.module.scss";
import Wrapper from "../Common/components/Wrapper";
import Spacer from "../Spacer";

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
    <div className={styles.appContainer}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <Wrapper tall title="Accounts">
            <Accounts
              onClick={(account) => handleAccountsClick(account)}
              accounts={accounts}
            />
          </Wrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={7}>
          {selectedAccount && (
            <Wrapper title="Repositories">
              <Repositories
                accountName={selectedAccount}
                onClick={(repository) => handleRepositoriesClick(repository)}
              />
            </Wrapper>
          )}
          {selectedAccount && selectedRepository && (
            <Wrapper title="PullRequests" sx={{ mt: 2 }}>
              <PullRequests
                accountName={selectedAccount}
                repositoryName={selectedRepository}
              />
            </Wrapper>
          )}
        </Grid>
        <Spacer />
      </Grid>
    </div>
  );
};

export default App;
