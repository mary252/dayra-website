import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import i18n from 'i18next';

import MarketplaceHeader from '../MarketplaceHeader/MarketplaceHeader';

import { useOvermind } from '../../../overmind';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './MarketplaceCategoriesPage.scss';

const MarketplaceCategoriesPage = () => {
  const sloth1 =
    'https://i.guim.co.uk/img/media/1d3a1b588915aaae8d2ceefae6294414d7181077/0_100_5758_3455/master/5758.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6f124baada9946783301835fe7a9233d';
  const sloth2 =
    'https://images.theconversation.com/files/253716/original/file-20190114-43520-ov3lxa.jpg';
  const sloth3 =
    'https://static01.nyt.com/images/2014/01/28/science/28SLOT_SPAN/28SLOT-articleLarge.jpg';

  const { state, actions } = useOvermind();

  useEffect(() => {
    actions.loadCategories();
  }, [actions]);

  const { categories } = state;
  const { language } = i18n;

  return (
    <Container className="MarketplaceCategoriesPage">
      <Row>
        <Col xs={12}>
          <Row className="mb-2">
            <Col xs={12}>
              <MarketplaceHeader />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
              >
                <div>
                  <img src={sloth1} alt="sloth1" />
                </div>
                <div>
                  <img src={sloth2} alt="sloth2" />
                </div>
                <div>
                  <img src={sloth3} alt="sloth3" />
                </div>
              </Carousel>
            </Col>
          </Row>
          <Row className="subtitle-row">
            <Col xs={12}>
              <h2 className="subtitle text-center">
                <Translation>{(t) => t('marketplace.products')}</Translation>
              </h2>
            </Col>
          </Row>
          <Row className="categories-row">
            {categories?.map((category) => (
              <Col key={category.id} className="mb-4" xs={6}>
                <Link to={`/marketplace/categories/${category.id}`}>
                  <Card>
                    <Card.Img variant="top" src={category.img} />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {category[`name_${language}`]}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MarketplaceCategoriesPage;
