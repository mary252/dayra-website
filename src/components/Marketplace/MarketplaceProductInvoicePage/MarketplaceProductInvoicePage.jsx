import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';

import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';
import { parseQueryParams } from '../../../utils/parseQueryParams';
import { useOvermind } from '../../../overmind';
import './MarketplaceProductInvoicePage.scss';

const MarketplaceProductInvoicePage = () => {
  const { productId } = useParams();
  const { quantity, months } = parseQueryParams(useLocation().search);
  const { state, actions } = useOvermind();
  const { language } = i18n;
  const [confirmed, setConfirmed] = useState(false);

  const { product, threeMonthsPrice, sixMonthsPrice, twelveMonthsPrice } = state;

  const price =
    (parseInt(months) === 3
      ? threeMonthsPrice
      : parseInt(months) === 6
      ? sixMonthsPrice
      : parseInt(months) === 12
      ? twelveMonthsPrice
      : Infinity) * quantity || 0;

  useEffect(() => {
    if (!product) actions.loadProduct(productId);
    if (product) {
      actions.calculateThreeMonthsInstallmentPrice(product.price * quantity);
      actions.calculateSixMonthsInstallmentPrice(product.price * quantity);
      actions.calculateTwelveMonthsInstallmentPrice(product.price * quantity);
    }
  }, [actions, productId, product, quantity]);

  return (
    <Row className="MarketplaceProductInvoicePage">
      <Col className="mx-auto" xs={10}>
        <Row>
          <Col xs={12}>
            <h1 className="text-center title">
              <Translation>{(t) => t('invoice')}</Translation>
            </h1>
          </Col>
        </Row>

        <Row>
          <Col className="mt-2" xs={12}>
            <Card>
              <Card.Body>
                <Table>
                  <tbody>
                    <tr className="no-border-top">
                      <td className="text-left secondary-font">
                        <Translation>{(t) => t('total')}</Translation>
                      </td>
                      <td className="text-right text-primary number">
                        {localizeNumber(formatNumber(price * parseInt(months)))}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left secondary-font">
                        <Translation>
                          {(t) => t('MarketplaceProductInvoicePage.installmentDuration')}
                        </Translation>
                      </td>
                      <td className="text-right text-primary number">
                        {localizeNumber(months)}
                        &nbsp;
                        <Translation>
                          {(t) =>
                            parseInt(months) >= 10 && language === 'ar' ? t('month') : t('months')
                          }
                        </Translation>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left secondary-font">
                        <Translation>
                          {(t) => t('MarketplaceProductInvoicePage.monthlyInstallment')}
                        </Translation>
                      </td>
                      <td className="text-right text-primary number">
                        {localizeNumber(formatNumber(price))}
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left secondary-font">
                        <Translation>
                          {(t) => t('MarketplaceProductInvoicePage.firstInstallmentOn')}
                        </Translation>
                      </td>
                      <td className="text-right text-primary number">
                        {localizeNumber(1)}
                        &nbsp;
                        <Translation>{(t) => t('january')}</Translation>
                        &nbsp;
                        {localizeNumber(2021)}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="payment-method-col text-left" xs={12}>
            <Translation>
              {(t) => (
                <>
                  <span className="secondary-font">{t('paymentMethod')}</span>
                  &nbsp;
                  <Button
                    disabled={true}
                    className="payment-method mr-3 ml-3"
                    variant="outline-primary"
                  >
                    {t('bankTransfer')}
                  </Button>
                </>
              )}
            </Translation>
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
          <Col xs={12}>
            <Link
              to="/confirmation"
              className={`btn btn-primary confirm-button form-control ${
                confirmed ? '' : 'disabled'
              }`}
            >
              <Translation>{(t) => t('FactoringConfirmationPage.confirmButton')}</Translation>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MarketplaceProductInvoicePage;
