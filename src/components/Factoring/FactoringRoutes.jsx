import { Switch, Route } from 'react-router-dom';

import FactoringListPage from './FactoringListPage/FactoringListPage';
import FactoringSliderPage from './FactoringSliderPage/FactoringSliderPage';
import FactoringConfirmationPage from './FactoringConfirmationPage/FactoringConfirmationPage';

const FactoringRoutes = ({ baseUrl }) => (
  <Switch>
    <Route exact path={baseUrl}>
      <FactoringListPage />
    </Route>

    <Route exact path={`${baseUrl}/:id/amount`}>
      <FactoringSliderPage />
    </Route>

    <Route exact path={`${baseUrl}/:id/confirmation`}>
      <FactoringConfirmationPage />
    </Route>
  </Switch>
);

export default FactoringRoutes;
