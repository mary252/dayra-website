import { Route, Switch } from 'react-router-dom';

import AccountSettingsPage from './AccountSettingsPage/AccountSettingsPage';
import AddNewIDPage from './IDdocsPage/AddNewIDPage/AddNewIDPage';
import AddressInfoPage from './AddressInfoPage/AddressInfoPage';
import ChangePasswordPage from './ChangePasswordPage/ChangePasswordPage';
import ContactInfoPage from './ContactInfoPage/ContactInfoPage';
import IDdocsPage from './IDdocsPage/IDdocsPage';
import PaymentMethodsPage from './PaymentMethodsPage/PaymentMethodsPage';
import NewPaymentMethodPage from './NewPaymentMethodPage/NewPaymentMethodPage';
import ProfileSettingsPage from './ProfileSettingsPage/ProfileSettingsPage';

const AccountSettingsRoutes = ({ baseUrl }) => {
  return (
    <Switch>
      <Route exact path={baseUrl}>
        <AccountSettingsPage />
      </Route>

      <Route exact path={`${baseUrl}/address`}>
        <AddressInfoPage />
      </Route>

      <Route exact path={`${baseUrl}/change-password`}>
        <ChangePasswordPage />
      </Route>

      <Route exact path={`${baseUrl}/contact-info`}>
        <ContactInfoPage />
      </Route>

      <Route exact path={`${baseUrl}/id-docs`}>
        <IDdocsPage />
      </Route>

      <Route exact path={`${baseUrl}/payment-methods`}>
        <PaymentMethodsPage baseUrl={baseUrl} />
      </Route>

      <Route exact path={`${baseUrl}/payment-methods/new`}>
        <NewPaymentMethodPage />
      </Route>

      <Route exact path={`${baseUrl}/id-docs/new`}>
        <AddNewIDPage />
      </Route>

      <Route exact path={`${baseUrl}/profile`}>
        <ProfileSettingsPage />
      </Route>
    </Switch>
  );
};

export default AccountSettingsRoutes;
