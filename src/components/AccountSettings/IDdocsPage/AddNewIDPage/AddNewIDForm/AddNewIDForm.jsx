import moment from 'moment';
import { useRef, useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Paperclip } from 'react-bootstrap-icons';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useOvermind } from '../../../../../overmind';

import { localizeNumber } from '../../../../../utils/localizeNumber';

import './AddNewIDForm.scss';

const AddNewIDForm = () => {
  const { t } = useTranslation();
  const { errors, register, handleSubmit, watch, setValue } = useForm();
  const [typeOfDoc, setTypeOfDoc] = useState('nationalID');
  const { state, actions } = useOvermind();
  const { possibleIdentificationOptions } = state;

  const issueDateInput = useRef({});
  const expiryDateInput = useRef({});

  useEffect(() => {
    actions.loadPossibleIdentificationOptions();
  }, [actions]);

  const addForwardSlash = (e) => {
    if (e.key === 'Backspace') {
      return;
    }

    issueDateInput.current = watch('issueDate', '');
    expiryDateInput.current = watch('expiryDate', '');

    if (issueDateInput.current.length === 2) {
      let formattedDateInput = issueDateInput.current;
      formattedDateInput += ' / ';
      setValue('issueDate', formattedDateInput);
    }
    if (expiryDateInput.current.length === 2) {
      let formattedDateInput = expiryDateInput.current;
      formattedDateInput += ' / ';
      setValue('expiryDate', formattedDateInput);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Row className="mt-5 AddNewIDForm">
      <Col className="mx-auto" xs={11}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className="form-group">
              <label htmlFor="typeOfDoc" className="text-left">
                {t('AddNewIDPage.chooseTypeOfDoc')}
              </label>

              <select
                className="form-control secondary-font"
                name="typeOfDoc"
                onChange={(e) => setTypeOfDoc(e.target.value)}
                value={typeOfDoc}
              >
                {possibleIdentificationOptions?.map((option) => {
                  return <option value={option}>{t(`AddNewIDPage.${option}`)}</option>;
                })}
              </select>
            </Col>
          </Row>

          <Row>
            <Col className="form-group">
              <label htmlFor="enterIDNumber" className="text-left">
                {t('AddNewIDPage.enterIDNumber')}
              </label>

              <input
                type="text"
                name="enterIDNumber"
                className="form-control secondary-font"
                ref={register({
                  required: true,
                  pattern: /^[\d]{14,14}$|^[\u0660-\u0669]{14,14}$/,
                })}
              />

              {errors.enterIDNumber && (
                <p className="text-danger text-left mt-2">{t('AddNewIDPage.IDNumberValidation')}</p>
              )}
            </Col>
          </Row>

          <Row>
            <Col className="form-group">
              <label htmlFor="issueDate" className="text-left">
                {t('AddNewIDPage.issueDate')}
              </label>

              <input
                type="text"
                name="issueDate"
                className="form-control secondary-font"
                placeholder={localizeNumber('08 / 19')}
                onKeyDown={(e) => addForwardSlash(e)}
                ref={register({
                  required: true,
                  validate: {
                    invalidFormat: (value) => moment(value, 'MM / YY', true).isValid(),
                    invalidDate: (value) =>
                      moment(value, 'MM / YY').isBefore(moment(new Date(), 'MM/YY')),
                  },
                })}
              />

              {(errors.issueDate?.type === 'required' ||
                errors.issueDate?.type === 'invalidDate') && (
                <p className="text-danger text-left mt-2">
                  {t('AddNewIDPage.invalidDateValidation')}
                </p>
              )}

              {errors.issueDate?.type === 'invalidFormat' && (
                <p className="text-danger text-left mt-2">
                  {t('AddNewIDPage.invalidDateFormatValidation')}
                </p>
              )}
            </Col>

            <Col className="form-group">
              <label htmlFor="expiryDate" className="text-left">
                {t('AddNewIDPage.expiryDate')}
              </label>

              <input
                type="text"
                name="expiryDate"
                className="form-control secondary-font"
                placeholder={localizeNumber('08 / 26')}
                onKeyDown={(e) => addForwardSlash(e)}
                ref={register({
                  required: true,
                  validate: {
                    invalidFormat: (value) => moment(value, 'MM / YY', true).isValid(),
                    invalidDate: (value) =>
                      moment(value, 'MM / YY').isAfter(moment(new Date(), 'MM / YY')),
                  },
                })}
              />

              {(errors.expiryDate?.type === 'required' ||
                errors.expiryDate?.type === 'invalidDate') && (
                <p className="text-danger text-left mt-2">
                  {t('AddNewIDPage.invalidDateValidation')}
                </p>
              )}

              {errors.expiryDate?.type === 'invalidFormat' && (
                <p className="text-danger text-left mt-2">
                  {t('AddNewIDPage.invalidDateFormatValidation')}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col className="form-group">
              <p className="text-left custom-label">{t('AddNewIDPage.attachFile')}</p>
              <label htmlFor="attachFile" className="customFileInput form-control">
                <input
                  type="file"
                  name="attachFile"
                  id="attachFile"
                  ref={register({
                    required: true,
                  })}
                />
                <span>
                  <Paperclip className="pt-2" size="25px" />
                </span>
              </label>

              {errors.attachFile && (
                <p className="text-danger text-left mt-2">
                  {t('AddNewIDPage.attachFileValidation')}
                </p>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary form-control">
                {t('AddNewIDPage.add')}
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default AddNewIDForm;
