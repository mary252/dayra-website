import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import MarketplaceBreadcrumb from '../MarketplaceBreadcrumb/MarketplaceBreadcrumb';
import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader';
import MarketplaceProductDetail from '../MarketplaceProdcutDetail/MarketplaceProductDetail';

import { useOvermind } from '../../../overmind';
import './MarketplacePurchasePage.scss';

const MarketplacePurchasePage = () => {
  const { state, actions } = useOvermind();
  const { id: categoryId, brandId, productId } = useParams();

  useEffect(() => {
    actions.loadProduct(productId);
  }, [actions, productId]);
  const { product } = state;

  return (
    <Row className="MarketplacePurchasePage">
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
        <Row>
          <Col xs={12}>
            <MarketplaceProductDetail product={product} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mx-auto" xs={10}>
            <Link
              className="btn btn-secondary buy-button form-control secondary-font"
              to={`/marketplace/categories/${categoryId}/brands/${brandId}/products/${productId}/place-order`}
            >
              <Translation>{(t) => t('buy')}</Translation>
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MarketplacePurchasePage;
