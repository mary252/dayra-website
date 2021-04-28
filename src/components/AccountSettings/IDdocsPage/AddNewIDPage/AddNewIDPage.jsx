import { Col, Container, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import AccountSettingsIcon from '../../AccountSettingsIcon/AccountSettingsIcon';
import AddNewIDForm from './AddNewIDForm/AddNewIDForm';

import './AddNewIDPage.scss';

const AddNewIDPage = () => {
  const { t } = useTranslation();

  return (
    <Container className="AddNewIDPage">
      <Row>
        <Col>
          <Row>
            <Col xs={1}>
              <AccountSettingsIcon variant="white" id />
            </Col>

            <Col>
              <h1 className="text-left mt-2 mr-2">{t('AddNewIDPage.personalIDdocs')}</h1>
            </Col>
          </Row>

          <AddNewIDForm />
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewIDPage;
