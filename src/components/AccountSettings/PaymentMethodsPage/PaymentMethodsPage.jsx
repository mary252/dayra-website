import React, { useEffect } from 'react';
import { Col, Card, Row, Button, Table } from 'react-bootstrap';
import { WalletFill } from 'react-bootstrap-icons';
import { useHistory } from 'react-router-dom';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../overmind';

import ActivePaymentEntry from './ActivePaymentEntry/ActivePaymentEntry';
import UnActivatedPaymentEntry from './UnActivatedPaymentEntry/UnActivatedPaymentEntry';

import './PaymentMethodsPage.scss';

const PaymentMethodsPage = ({ baseUrl }) => {
  const { state, actions } = useOvermind();
  let history = useHistory();

  useEffect(() => {
    actions.loadPaymentMethods();
  }, [actions]);

  const { paymentMethods } = state;

  function handleClick() {
    history.push(`${baseUrl}/payment-methods/new`);
  }

  return (
    <Row className="PaymentMethodsPage">
      <div className="header-container">
        <Row>
          <Col xs={12}>
            <div className="header-innercontainer">
              <div className="wallet-background">
                <WalletFill className="icon" />
              </div>
              <h1 className="title">
                <Translation>{(t) => t('PaymnetMethods.title')}</Translation>
              </h1>
            </div>
          </Col>
        </Row>
      </div>
      <Col xs={12}>
        <div className="card-container">
          <Card>
            <Card.Body>
              <Table borderless className="table-sm">
                <tbody>
                  <tr>
                    <td className="card-title" colSpan="3">
                      <p className="primary-font mb-0 ">
                        <Translation>{(t) => t('PaymnetMethods.cardTitle')}</Translation>
                      </p>
                    </td>
                  </tr>
                  {paymentMethods?.map((payment) =>
                    payment.activated ? (
                      <ActivePaymentEntry key={payment.id} paymentMethod={payment} />
                    ) : (
                      <UnActivatedPaymentEntry key={payment.id} paymentMethod={payment} />
                    ),
                  )}
                </tbody>
              </Table>
              <Row>
                <Col className="col-12">
                  <Button className="button-add" onClick={handleClick}>
                    <Translation>{(t) => t('PaymnetMethods.addButton')}</Translation>
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default PaymentMethodsPage;
