import React, { useEffect } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../overmind';

import './NewPaymentMethodPage.scss';

const NewPaymentMethodPage = () => {
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.loadPaymentMethodsDropDown();
    actions.loadBanks();
  }, [actions]);

  const { paymentMethodsDropDown, banks } = state;

  return (
    <Row className="NewPaymentMethodPage">
      <Col xs={12}>
        <Row>
          <Col xs={1}></Col>
          <Col xs={11}>
            <h1 className="title">
              <Translation>{(t) => t('PaymnetMethods.title')}</Translation>
            </h1>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <div className="input-form">
          <Form>
            <Form.Group controlId="payment_type">
              <Form.Label>
                <p className="secondary-font mb-2 ">
                  <Translation>{(t) => t('AddNewPayment.type')}</Translation>
                </p>
              </Form.Label>
              <Form.Control className="dropdown" as="select">
                {paymentMethodsDropDown?.map((payment) => (
                  <option className="dropdown" key={payment.id} as="button">
                    {payment.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="payment_type">
              <Form.Label>
                <p className="secondary-font mb-2 ">
                  <Translation>{(t) => t('AddNewPayment.source')}</Translation>
                </p>
              </Form.Label>
              <Form.Control className="dropdown" as="select">
                {banks?.map((bank) => (
                  <option className="dropdown" key={bank.id} as="button">
                    {bank.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>
                <p className="secondary-font mb-2 ">
                  <Translation>{(t) => t('AddNewPayment.number')}</Translation>
                </p>
              </Form.Label>
              <Form.Control type="number" placeholder="123456789012" />
            </Form.Group>
            <Row>
              <Col xs={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    <p className="secondary-font mb-2 ">
                      <Translation>{(t) => t('AddNewPayment.publishDate')}</Translation>
                    </p>
                  </Form.Label>
                  <Form.Control type="text" placeholder="MM / YY" maxLength="5" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    <p className="secondary-font mb-2 ">
                      <Translation>{(t) => t('AddNewPayment.expireDAte')}</Translation>
                    </p>
                  </Form.Label>
                  <Form.Control type="text" placeholder="MM / YY" maxLength="5" />
                </Form.Group>
              </Col>
              <Col className="col-12">
                <Button className="button-add">
                  <Translation>{(t) => t('add')}</Translation>
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default NewPaymentMethodPage;
