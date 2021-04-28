import moment from 'moment';
import { useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../../overmind';

import './ProfileSettingsForm.scss';

const ProfileSettingsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const { actions, state } = useOvermind();
  const { currentUser } = state;

  const formattedBirthDate = moment(currentUser?.birthDate).format('DD/MM/YYYY');

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    actions.loadCurrentUser();
  }, [actions]);

  return (
    <Row className="mt-4 ProfileSettingsForm">
      <Col>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className="form-group">
              <label htmlFor="fullName" className="text-left">
                <span>
                  <Translation>{(t) => t('ProfileSettingsPage.fullNameAsAppearsOnId')}</Translation>
                  )
                </span>
              </label>

              <input
                type="text"
                name="fullName"
                className="form-control secondary-font text-grey"
                value={currentUser?.name || ''}
                disabled
              />
            </Col>
          </Row>

          <Row>
            <Col className="form-group">
              <label htmlFor="firstName" className="text-left">
                <Translation>{(t) => t('ProfileSettingsPage.firstName')}</Translation>
              </label>

              <input
                type="text"
                name="firstName"
                className="form-control secondary-font text-grey"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^[\u0621-\u064Aa-zA-Z ]{3,30}$/,
                  },
                })}
              />
              {errors.firstName && (
                <p className="text-danger text-left mt-2">
                  <Translation>{(t) => t('ProfileSettingsPage.firstNameValidation')}</Translation>
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col className="form-group">
              <label htmlFor="birthDate" className="text-left">
                <Translation>{(t) => t('ProfileSettingsPage.birthDate')}</Translation>
              </label>

              <input
                type="text"
                id="birthDate"
                className="form-control secondary-font text-grey"
                value={formattedBirthDate || new Date()}
                disabled
              />
            </Col>
          </Row>

          <Row>
            <Col className="form-group">
              <label htmlFor="nationalID" className="text-left">
                <Translation>{(t) => t('ProfileSettingsPage.nationalIDNumber')}</Translation>
              </label>

              <input
                type="text"
                id="nationalID"
                className="form-control secondary-font text-gre text-left"
                value={currentUser?.nationalIDNumber || ''}
                disabled
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary form-control">
                <Translation>{(t) => t('ProfileSettingsPage.update')}</Translation>
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default ProfileSettingsForm;
