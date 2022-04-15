import Accounts from "../Accounts";

const accounts = ["react", "vue", "angular"];

const App = () => {
  const handleAccountsClick = (account: string) => {
    console.log(account);
  };

  return (
    <Accounts
      onClick={(account) => handleAccountsClick(account)}
      accounts={accounts}
    />
  );
};

export default App;
