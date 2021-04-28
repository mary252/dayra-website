import { Button, Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import AccountSettingsIcon from '../AccountSettingsIcon/AccountSettingsIcon';
import ContactInfoTable from './ContactInfoTable/ContactInfoTable';

import './ContactInfoPage.scss';

const ContactInfoPage = () => {
  const { t, i18n } = useTranslation();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Row className="ContactInfoPage">
      <Col xs={12}>
        <Row className="contact-info-header">
          <Col xs={1}>
            <AccountSettingsIcon contact variant="white" />
          </Col>

          <Col>
            <h1 className="text-left mr-2 mt-2">{t('ContactInfoPage.contact')}</h1>
          </Col>
        </Row>

        <Row className="mt-5 contact-info-update">
          <Col>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="form-group">
                <Col>
                  <label htmlFor="phoneType" className="text-left">
                    {t('ContactInfoPage.phoneNumberType')}
                  </label>

                  <select
                    type="tel"
                    className="form-control text-grey secondary-font"
                    name="phoneType"
                  >
                    <option value="workPlace">{t('ContactInfoPage.workPlace')}</option>
                    <option value="home">{t('ContactInfoPage.home')}</option>
                    <option value="personal">{t('ContactInfoPage.personal')}</option>
                  </select>
                </Col>
              </Row>

              <Row className="form-group">
                <Col>
                  <label htmlFor="phoneType" className="text-left">
                    {t('ContactInfoPage.enterNewNumber')}
                  </label>

                  <input
                    type="tel"
                    className="form-control text-grey secondary-font"
                    name="phoneNumber"
                    ref={register({
                      required: true,
                      pattern: /^[\d]{11,11}$|^[\u0660-\u0669]{11,11}$/,
                    })}
                  />

                  {errors.phoneNumber && (
                    <p className="text-danger error-message mt-2 text-left">
                      {t('ContactInfoPage.phoneNumberValidation')}
                    </p>
                  )}
                </Col>

                <Col>
                  <Button
                    type="submit"
                    className="btn btn-primary mt-4 form-control"
                    variant="primary"
                  >
                    {t('ContactInfoPage.add')}
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="contact-info-list">
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <h2 className="text-left mb-2 pb-2 hard-border">
                        {t('ContactInfoPage.savedNumbers')}
                      </h2>
                    </Col>
                  </Row>
                  <ContactInfoTable />
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ContactInfoPage;
