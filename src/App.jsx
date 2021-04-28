import React, { lazy, Suspense } from 'react';
import i18n from 'i18next';
import moment from 'moment';
import ar from 'moment/locale/ar';
import en from 'moment/locale/en-au';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import ConfirmationPage from './components/ConfirmationPage/ConfirmationPage';
import Footer from './components/Footer/Footer';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import SignupPage from './components/SignupPage/SignupPage';

import { useBackgroundClass } from './utils/useBackgroundClass';
import { useFooter } from './utils/useFooter';

import './fonts.scss';
import './App.scss';

const AccountSettings = lazy(() => import('./components/AccountSettings/AccountSettings'));
const Factoring = lazy(() => import('./components/Factoring/Factoring'));
const Marketplace = lazy(() => import('./components/Marketplace/Marketplace'));
const Registration = lazy(() => import('./components/Registration/Registration'));
const UserAccount = lazy(() => import('./components/UserAccount/UserAccount'));

const App = () => {
  const backgroundClass = useBackgroundClass();
  const showFooter = useFooter();
  const { language } = i18n;

  const localization = language === 'ar' ? ar : en;

  moment.updateLocale(`${language}`, localization);

  return (
    <div className={`App ${backgroundClass} ${language} ${showFooter ? 'with-footer' : ''}`}>
      <Container className="main-content">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/confirmation">
              <ConfirmationPage />
            </Route>

            <Route exact path="/">
              <MainPage />
            </Route>

            <Route exact path="/landing">
              <LandingPage />
            </Route>

            <Route exact path="/login">
              <LoginPage />
            </Route>

            <Route exact path="/signup">
              <SignupPage />
            </Route>

            <Route path="/account-settings">
              <AccountSettings />
            </Route>

            <Route path="/factoring">
              <Factoring />
            </Route>

            <Route path="/marketplace">
              <Marketplace />
            </Route>

            <Route path="/registration">
              <Registration />
            </Route>

            <Route path="/account">
              <UserAccount />
            </Route>
          </Switch>
        </Suspense>
      </Container>

      {showFooter && <Footer />}
    </div>
  );
};

export default App;
