import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';

import { useOvermind } from '../../../overmind';
import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';
import { parseQueryParams } from '../../../utils/parseQueryParams';
import './FactoringConfirmationPage.scss';

const FactoringConfirmationPage = () => {
  const { amount, paymentOption } = parseQueryParams(useLocation().search);
  const { id } = useParams();
  const { state, actions } = useOvermind();
  const { transaction, factoringCost } = state;

  const [confirmed, setConfirmed] = useState(false);

  // TODO: Check that amount is less than transaction.remainder.

  useEffect(() => {
    actions.loadTransaction(id);
    actions.calculateFactoringCost(amount);
  }, [actions, id, amount]);

  return (
    <Container className="FactoringConfirmationPage">
      <Row>
        <Col xs={12}>
          <h1 className="title text-center mb-3">
            <Translation>{(t) => t('FactoringConfirmationPage.title')}</Translation>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Table>
                <tbody>
                  <tr className="primary-border no-border-top">
                    <td width="75%" className="text-left text-grey secondary-font">
                      <Translation>
                        {(t) => t('FactoringConfirmationPage.amountToFactor')}
                      </Translation>
                    </td>
                    <td className="text-left text-primary number">
                      {localizeNumber(formatNumber(amount))}
                    </td>
                  </tr>
                  <tr className="hard-border">
                    <td className="text-left text-grey secondary-font">
                      <Translation>
                        {(t) => t('FactoringConfirmationPage.factoringCost')}
                      </Translation>
                    </td>
                    <td className="text-left text-primary number">
                      {localizeNumber(formatNumber(-factoringCost))}
                    </td>
                  </tr>
                  <tr className="primary-border">
                    <td className="text-left secondary-font">
                      <Translation>
                        {(t) => t('FactoringConfirmationPage.amountReceivable')}
                      </Translation>
                    </td>
                    <td className="text-left number">
                      {localizeNumber(formatNumber(amount - factoringCost))}
                    </td>
                  </tr>
                  <tr className="primary-border">
                    <td className="text-left text-grey secondary-font">
                      <Translation>
                        {(t) => t('FactoringConfirmationPage.amountAfterFactoring')}
                      </Translation>
                    </td>
                    <td className="text-left text-primary number">
                      {localizeNumber(formatNumber(transaction?.remainder - amount))}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3 text-left secondary-font text-grey confirmation-prompt">
        <Col xs={12}>
          <Form>
            <Form.Check type="checkbox">
              <Form.Check.Input
                type="checkbox"
                value={confirmed}
                onChange={($event) => setConfirmed($event.target.checked)}
              />
              <Form.Check.Label>
                <Translation>{(t) => t('confirmationPrompt')}</Translation>
              </Form.Check.Label>
            </Form.Check>
          </Form>
        </Col>
      </Row>
      <Row className="mt-3 text-center">
        <Col className="mx-auto" xs={11}>
          <Button className="confirm-button form-control" variant="primary" disabled={!confirmed}>
            <Translation>{(t) => t('FactoringConfirmationPage.confirmButton')}</Translation>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default FactoringConfirmationPage;
