import { Switch, Route } from 'react-router-dom';

import UserAccountTransactionsListPage from './UserAccountTransactions/UserAccountTransactionsListPage';
import TransactionInfo from './TransactionInfo/TransactionInfo';

const UserAccountRoutes = ({ baseUrl }) => (
  <Switch>
    <Route exact path={baseUrl}>
      <UserAccountTransactionsListPage />
    </Route>

    <Route exact path={`${baseUrl}/current/:tran_id/:id`}>
      <TransactionInfo />
    </Route>

    <Route exact path={`${baseUrl}/upcoming/:tran_id/:id`}>
      <TransactionInfo />
    </Route>
  </Switch>
);

export default UserAccountRoutes;
