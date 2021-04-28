import { Route, Switch } from 'react-router-dom';

import IdFront from './IdFront/IdFront';
import CaptureId from './CaptureId/CaptureId';
import ConfirmIdFront from './ConfirmIdFront/ConfirmIdFront';
import SelectIdPage from './SelectId/SelectId';
import CaptureIdBack from './CaptureIdBack/CaptureIdBack';
import ConfirmIdBack from './ConfirmIdBack/ConfirmIdBack';
import Results from './Results/Results';

const RegistrationRoutes = ({ baseUrl }) => (
  <Switch>
    <Route exact path={baseUrl}>
      <SelectIdPage />
    </Route>

    <Route exact path={`${baseUrl}/identification`}>
      <IdFront />
    </Route>

    <Route exact path={`${baseUrl}/id-capture`}>
      <CaptureId />
    </Route>

    <Route exact path={`${baseUrl}/id-confirm`}>
      <ConfirmIdFront />
    </Route>

    <Route exact path={`${baseUrl}/id-capture-back`}>
      <CaptureIdBack />
    </Route>

    <Route exact path={`${baseUrl}/id-confirm-back`}>
      <ConfirmIdBack />
    </Route>

    <Route exact path={`${baseUrl}/results`}>
      <Results />
    </Route>
  </Switch>
);

export default RegistrationRoutes;
