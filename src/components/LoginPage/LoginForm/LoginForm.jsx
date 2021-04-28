import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PinInput from 'react-pin-input';
import { Translation } from 'react-i18next';

import './LoginForm.scss';

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <form>
        <Row>
          <Col className="form-group" xs={12}>
            <label className="pincode-title text-light secondary-font" htmlFor="password">
              <Translation>{(t) => t('LoginForm.pinCodePrompt')}</Translation>
            </label>
            <input type="password" name="password" id="password" />
          </Col>
          <Col className="form-group mb-1" xs={12}>
            <Translation>
              {(t) => (
                <input
                  className="btn btn-light form-control"
                  type="submit"
                  value={t('LoginForm.loginButtonText')}
                />
              )}
            </Translation>
          </Col>
          <Col>
            <Link to="/login" className="text-light secondary-font forgot-password">
              <Translation>{(t) => t('LoginForm.forgotPassword')}</Translation>
            </Link>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default LoginForm;
