import { Card, Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import AccountSettingsIcon from '../AccountSettingsIcon/AccountSettingsIcon';
import IDdocsTable from './IDdocsTable/IDdocsTable';

import './IDdocsPage.scss';

const IDdocsPage = () => {
  return (
    <Row className="IDdocsPage">
      <Col xs={12}>
        <Row className="IDdocsHeader">
          <Col xs={1}>
            <AccountSettingsIcon variant="white" id />
          </Col>

          <Col>
            <h1 className="text-left mt-2 mr-2">
              <Translation>{(t) => t('IDdocsPage.personalIDdocs')}</Translation>
            </h1>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="IDdocsList">
            <Card>
              <Card.Body>
                <Row>
                  <Col>
                    <h2 className="text-left hard-border mt-2 pb-3">
                      <Translation>{(t) => t('IDdocsPage.personalIDdocs')}</Translation>
                    </h2>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <IDdocsTable />
                  </Col>
                </Row>

                <a
                  href="/account-settings/id-docs/new"
                  variant="primary"
                  className="btn btn-primary mx-auto btn-block py-2"
                >
                  <Translation>{(t) => t('IDdocsPage.addNewID')}</Translation>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default IDdocsPage;
