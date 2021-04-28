import { useEffect, useRef } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../../overmind';

import './ChangePasswordForm.scss';

const ChangePasswordForm = () => {
  const { register, errors, handleSubmit, watch } = useForm();
  const { actions, state } = useOvermind();
  const { passwordConstraints } = state;

  const password = useRef({});
  password.current = watch('newPassword', '');

  useEffect(() => {
    actions.loadPasswordConstraints();
  }, [actions]);

  const constraints = new RegExp(
    `^${passwordConstraints?.numericCharacter && '(?=.*\\d)'}(?=.*[a-z]|[\u0621-\u064A])${
      passwordConstraints?.uppercase && '(?=.*[A-Z]|[\u0621-\u064A])'
    }${passwordConstraints?.specialCharacter && '(?=.*[^\\da-zA-Z\u0621-\u064A])'}.{${
      passwordConstraints?.length
    },}$`,
  );

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Row className="mt-5 ChangePasswordForm">
      <Col>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="form-group">
            <Col>
              <label htmlFor="oldPassword" className="text-left">
                <Translation>{(t) => t('ChangePasswordPage.oldPassword')}</Translation>
              </label>

              <input
                type="password"
                className="form-control"
                name="oldPassword"
                ref={register({ required: true })}
              />

              {errors.oldPassword && (
                <p className="text-danger error-message mt-2 text-left">
                  <Translation>{(t) => t('ChangePasswordPage.oldPasswordValidation')}</Translation>
                </p>
              )}
            </Col>
          </Row>

          <Row className="form-group">
            <Col>
              <label htmlFor="newPassword" className="text-left">
                <Translation>{(t) => t('ChangePasswordPage.newPassword')}</Translation>
              </label>

              <input
                type="password"
                className="form-control"
                name="newPassword"
                ref={register({
                  required: true,
                  pattern: constraints,
                })}
              />

              {errors.newPassword && (
                <p className="text-danger error-message mt-2 text-left">
                  <Translation>{(t) => t('ChangePasswordPage.newPasswordValidation')}</Translation>
                </p>
              )}
            </Col>
          </Row>

          <Row className="form-group">
            <Col>
              <label htmlFor="confirmNewPassword" className="text-left">
                <Translation>{(t) => t('ChangePasswordPage.confirmNewPassword')}</Translation>
              </label>
              <input
                type="password"
                className="form-control"
                name="confirmNewPassword"
                ref={register({
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />

              {errors.confirmNewPassword?.type === 'required' && (
                <p className="text-danger error-message mt-2 text-left">
                  <Translation>
                    {(t) => t('ChangePasswordPage.confirmNewPasswordValidation')}
                  </Translation>
                </p>
              )}

              {errors.confirmNewPassword?.type === 'validate' && (
                <p className="text-danger error-message mt-2 text-left">
                  <Translation>
                    {(t) => t('ChangePasswordPage.passwordsMatchValidation')}
                  </Translation>
                </p>
              )}
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="btn btn-primary form-control mt-4">
            <Translation>{(t) => t('ChangePasswordPage.update')}</Translation>
          </Button>
        </form>
      </Col>
    </Row>
  );
};

export default ChangePasswordForm;
