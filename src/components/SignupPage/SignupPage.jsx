import { Translation } from 'react-i18next';
import { Row, Col, Button } from 'react-bootstrap';

import './SignupPage.scss';

const SignupPage = () => {
  return (
    <Row className="SignupPage mx-auto">
      <Col className="mx-auto" xs={11}>
        <Row>
          <Col>
            <h1 className="text-left">
              <Translation>{(t) => t('SignupPage.title')}</Translation>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="description text-left">
              <Translation>{(t) => t('SignupPage.description')}</Translation>
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <form>
              <Row>
                <Col className="form-group">
                  <label className="text-left" htmlFor="name">
                    <Translation>{(t) => t('SignupPage.name')}</Translation>
                  </label>
                  <input type="text" className="form-control" id="name" />
                </Col>
              </Row>

              <Row>
                <Col className="form-group">
                  <label className="text-left" htmlFor="phoneNumber">
                    <Translation>{(t) => t('SignupPage.phoneNumber')}</Translation>
                  </label>
                  <input type="tel" className="form-control" id="phoneNumber" />
                </Col>
              </Row>

              <Row>
                <Col className="form-group">
                  <label className="text-left" htmlFor="password">
                    <Translation>{(t) => t('SignupPage.password')}</Translation>
                  </label>
                  <input type="password" className="form-control" id="password" />
                </Col>
              </Row>

              <Row>
                <Col className="form-group">
                  <label className="text-left" htmlFor="confirmPassword">
                    <Translation>{(t) => t('SignupPage.confirmPassword')}</Translation>
                  </label>
                  <input type="password" className="form-control" id="confirmPassword" />
                </Col>
              </Row>

              <Row className="mb-2">
                <Col>
                  <Button variant="primary" className="form-control btn btn-primary">
                    <Translation>{(t) => t('SignupPage.register')}</Translation>
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="helper-text text-center">
              <Translation>{(t) => t('SignupPage.existingAccount')}</Translation>{' '}
              <span className="text-primary">
                <a href="/login">
                  <Translation>{(t) => t('SignupPage.login')}</Translation>
                </a>
              </span>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignupPage;
