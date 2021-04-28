import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import Footer from '../../Footer/Footer';
import MarketplaceBreadcrumb from '../MarketplaceBreadcrumb/MarketplaceBreadcrumb';
import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader';

import { useOvermind } from '../../../overmind';

import './MarketplaceCategoryDetail.scss';

const MarketplaceCategoryDetail = () => {
  const { id } = useParams();
  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.loadCategory(id);
  }, [actions, id]);

  const { category } = state;

  return (
    <Row className="MarketplaceCategoryDetail">
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
                  {category?.brands.map((brand) => (
                    <Col key={brand.id} className="brand-col text-center" xs={6}>
                      <Link
                        className="text-dark"
                        to={`/marketplace/categories/${id}/brands/${brand.id}`}
                      >
                        <img className="brand-image mb-3" src={brand.img} alt={brand.name} />
                        <p className="brand-name">{brand.name}</p>
                      </Link>
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

export default MarketplaceCategoryDetail;
