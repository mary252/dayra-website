import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import Footer from '../../Footer/Footer';
import MarketplaceBreadcrumb from '../MarketplaceBreadcrumb/MarketplaceBreadcrumb';
import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader';

import { useOvermind } from '../../../overmind';
import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';

import './MarketplaceCategoryBrandPage.scss';

const MarketplaceCategoryBrandPage = () => {
  const { id: categoryId, brandId } = useParams();
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.loadBrandProducts(brandId);
  }, [actions, brandId]);

  const { products } = state;

  return (
    <Row className="MarketplaceCategoryBrandPage">
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
        <Row className="mt-4">
          <Col xs={12}>
            <Card>
              <Card.Body className="with-footer">
                <Row className="mt-4">
                  {products?.map((product) => (
                    <Col className="product-col text-center" key={product.id} xs={6}>
                      <Row>
                        <Col>
                          <img
                            className="product-image mb-3"
                            src={product.img}
                            alt={product.name}
                          />

                          <p className="product-name">
                            {product.name}

                            <br />

                            <span className="text-secondary">
                              {localizeNumber(formatNumber(product.price))}
                              &nbsp;
                              <Translation>{(t) => t('egp')}</Translation>
                            </span>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="mx-auto" xs={9}>
                          <Link
                            to={`/marketplace/categories/${categoryId}/brands/${brandId}/products/${product.id}`}
                            className="btn btn-secondary buy-button form-control secondary-font"
                          >
                            <span className="button-text">
                              <Translation>{(t) => t('buy')}</Translation>
                            </span>
                          </Link>
                        </Col>
                      </Row>
                    </Col>
                  ))}
                </Row>
                <Row>
                  <Footer />
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MarketplaceCategoryBrandPage;
