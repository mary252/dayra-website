import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader';
import MarketplaceBreadcrumb from '../MarketplaceBreadcrumb/MarketplaceBreadcrumb';
import MarketplaceProductDetail from '../MarketplaceProdcutDetail/MarketplaceProductDetail';

import { useOvermind } from '../../../overmind';
import { localizeNumber } from '../../../utils/localizeNumber';
import { formatNumber } from '../../../utils/formatNumber';
import './MarketplacePlaceOrderPage.scss';

const MarketplacePlaceOrderPage = () => {
  const { state, actions } = useOvermind();
  const { id: categoryId, brandId, productId } = useParams();

  useEffect(() => {
    actions.loadProduct(productId);
  }, [actions, productId]);
  const [quantity, setQuantity] = useState(1);
  const { product } = state;

  const updateQuantity = (newQuantity) => {
    if (newQuantity <= 1) {
      setQuantity(1);
    } else if (newQuantity >= 20) {
      setQuantity(20);
    } else {
      setQuantity(newQuantity);
    }
  };

  return (
    <Row className="MarketplacePlaceOrderPage">
      <Col xs={12}>
        <Row>
          <Col xs={12}>
            <MarketplaceHeader />
          </Col>
        </Row>

        <Row className="mt-2">
          <Col className="mx-auto" xs={10}>
            <MarketplaceBreadcrumb />
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs={12}>
            <MarketplaceProductDetail product={product} showDescription={false} showPrice={false} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="mx-auto" xs={10}>
            <Card>
              <Card.Body>
                <Row className="text-left">
                  <Col xs={4}>
                    <span className="quantity">
                      <Translation>{(t) => t('marketplace.quantity')}</Translation>
                    </span>
                  </Col>

                  <Col>
                    <span>
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateQuantity(quantity + 1)}
                      >
                        +
                      </Button>
                      <input
                        className="
                          form-control
                          quantity-input
                          border-secondary
                          text-center
                          text-secondary
                        "
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={($event) => updateQuantity($event.target.value)}
                        id="quantity"
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => updateQuantity(quantity - 1)}
                      >
                        -
                      </Button>
                    </span>
                  </Col>
                </Row>

                <Row className="text-left mt-3">
                  <Col xs={7}>
                    <span className="total">
                      <Translation>{(t) => t('marketplace.total')}</Translation>
                    </span>
                  </Col>

                  <Col>
                    <span className="text-secondary">
                      <Translation>
                        {(t) =>
                          `${localizeNumber(formatNumber(product?.price * quantity))} ${t('egp')}`
                        }
                      </Translation>
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 actions">
          <Col className="mx-auto" xs={10}>
            <Row className="secondary-font">
              <Col xs={5}>
                <Link
                  to={`/marketplace/categories/${categoryId}/brands/${brandId}/products/${productId}/installments?quantity=${quantity}`}
                  className="btn btn-secondary float-left form-control"
                >
                  <Translation>{(t) => t('marketplace.installments')}</Translation>
                </Link>
              </Col>

              <Col xs={7}>
                <Link to="" className="btn btn-primary float-right form-control">
                  <Translation>{(t) => t('marketplace.payCash')}</Translation>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MarketplacePlaceOrderPage;
