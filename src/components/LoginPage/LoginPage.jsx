import React from 'react';
import { Translation } from 'react-i18next';

import LoginForm from './LoginForm/LoginForm';

import logo from '../../assets/images/logo-white.png';
import './LoginPage.scss';

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="logo-container text-center pb-5">
        <p className="helper-text text-light">
          <Translation>{(t) => t('LoginPage.broughtToYouBy')}</Translation>
        </p>
        <img src={logo} className="dayra-logo" alt="Dayra" />
        <h1 className="logo-text text-light">
          <Translation>{(t) => t('LoginPage.title')}</Translation>
        </h1>
      </div>

      <div className="title-container text-center pt-4">
        <h1 className="title text-light">
          <Translation>{(t) => t('LoginPage.welcome')}</Translation>
        </h1>
      </div>

      <div className="login-form-container text-center pt-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
