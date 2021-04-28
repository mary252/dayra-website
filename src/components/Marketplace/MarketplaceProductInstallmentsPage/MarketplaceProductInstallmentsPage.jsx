import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Link, useLocation, useParams } from 'react-router-dom';

import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';
import { parseQueryParams } from '../../../utils/parseQueryParams';
import { useOvermind } from '../../../overmind';
import './MarketplaceProductInstallmentsPage.scss';

const MarketplaceProductInstallmentsPage = () => {
  const { language } = i18n;
  const { id: categoryId, brandId, productId } = useParams();
  const { quantity } = parseQueryParams(useLocation().search);
  const { state, actions } = useOvermind();
  const [currentPlan, setPlan] = useState(null);

  const { product, threeMonthsPrice, sixMonthsPrice, twelveMonthsPrice } = state;

  const plans = [
    { months: 3, price: threeMonthsPrice },
    { months: 6, price: sixMonthsPrice },
    { months: 12, price: twelveMonthsPrice },
  ];

  useEffect(() => {
    if (!product) actions.loadProduct(productId);
    if (product) {
      actions.calculateThreeMonthsInstallmentPrice(product.price * quantity);
      actions.calculateSixMonthsInstallmentPrice(product.price * quantity);
      actions.calculateTwelveMonthsInstallmentPrice(product.price * quantity);
    }
  }, [actions, productId, product, quantity]);

  return (
    <Row className="MarketplaceProductInstallmentsPage">
      <Col className="mx-auto" xs={10}>
        <Row>
          <Col xs={12}>
            <h1 className="text-center title">
              <Translation>{(t) => t('MarketplaceProductInstallmentsPage.title')}</Translation>
            </h1>
            <hr />
          </Col>
          <Col xs={12}>
            <p className="prompt secondary-font text-center">
              <Translation>{(t) => t('MarketplaceProductInstallmentsPage.prompt')}</Translation>
            </p>
          </Col>
          <Col className="text-center" xs={12}>
            {plans.map((plan) => (
              <Row key={plan.months} className="mb-3">
                <Col className="mx-auto" xs={9}>
                  <Card
                    className={plan.months === currentPlan?.months ? 'active' : ''}
                    onClick={() => setPlan(plan)}
                  >
                    <Card.Body>
                      <span className="months">
                        {localizeNumber(plan.months)}
                        &nbsp;
                        <Translation>{(t) => t('month')}</Translation>
                      </span>
                      <br />
                      <span className="price text-secondary">
                        {localizeNumber(formatNumber(plan.price))}
                        &nbsp;
                        <Translation>{(t) => t('egp')}</Translation>/
                        <Translation>
                          {(t) =>
                            parseInt(plan.months) >= 10 && language === 'ar'
                              ? t('month')
                              : t('months')
                          }
                        </Translation>
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Col>
          <Col className="mt-4" xs={12}>
            <Link
              to={
                `/marketplace/categories/${categoryId}/brands/${brandId}/products/${productId}/invoice` +
                `?quantity=${quantity}&months=${currentPlan?.months}`
              }
              className={`btn btn-primary form-control ${currentPlan ? '' : 'disabled'}`}
            >
              <Translation>{(t) => t('next')}</Translation>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MarketplaceProductInstallmentsPage;
