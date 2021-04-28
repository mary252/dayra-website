import { Col, Container, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import AccountSettingsIcon from '../AccountSettingsIcon/AccountSettingsIcon';
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm';

import './ChangePasswordPage.scss';

const ChangePasswordPage = () => {
  return (
    <Container className="ChangePasswordPage">
      <Row>
        <Col xs={1}>
          <AccountSettingsIcon password variant="white" />
        </Col>

        <Col>
          <h1 className="text-left mt-2 mr-2">
            <Translation>{(t) => t('ChangePasswordPage.changePassword')}</Translation>
          </h1>
        </Col>
      </Row>

      <ChangePasswordForm />

      <Row className="mt-4">
        <Col>
          <a href="/forgot-password" className="text-dark text-center secondary-font">
            <Translation>{(t) => t('ChangePasswordPage.forgotPassword')}</Translation>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePasswordPage;
