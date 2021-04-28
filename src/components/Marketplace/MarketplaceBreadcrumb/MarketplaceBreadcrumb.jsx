import i18n from 'i18next';
import React, { useEffect } from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';

import { useOvermind } from '../../../overmind';
import './MarketplaceBreadcrumb.scss';

const MarketplaceBreadcrumb = () => {
  const { id: categoryId, brandId } = useParams();
  const { state, actions } = useOvermind();
  const { language } = i18n;

  useEffect(() => {
    actions.loadCategory(categoryId);
    actions.loadBrand(brandId);
    actions.loadBrandProducts(brandId);
  }, [actions, categoryId, brandId]);

  const { brand, category } = state;

  const items = [
    {
      content: <Translation>{(t) => t('marketplace.products')}</Translation>,
      link: '/marketplace',
    },
    {
      content: category && category[`name_${language}`],
      link: `/marketplace/categories/${category?.id}`,
    },
  ];

  if (brand) {
    items.push({
      content: brand?.name,
      link: `/marketplace/categories/${category?.id}/brands/${brand?.id}`,
    });
  }

  return (
    <Row className="MarketplaceBreadcrumb">
      <Col xs={12}>
        <Breadcrumb>
          {items.map((item) => (
            <Breadcrumb.Item key={item.link} linkAs={Link} linkProps={{ to: item.link }}>
              {item.content}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default MarketplaceBreadcrumb;
