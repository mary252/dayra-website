import i18n from 'i18next';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';
import './MarketplaceProductDetail.scss';

const MarketplaceProductDetail = ({
  product,
  showDescription = true,
  showPrice = true,
  showName = true,
}) => {
  const { language } = i18n;

  return (
    <Row className="MarketplaceProductDetail">
      <Col xs={12}>
        <Row>
          <Col className="mx-auto" xs={10}>
            <img className="product-image" src={product?.img} alt={product?.name} />
          </Col>
        </Row>
        {(showPrice || showName) && (
          <Row className="mt-4">
            <Col className="mx-auto" xs={10}>
              {showName && <p className="product-name float-left">{product?.name}</p>}
              {showPrice && (
                <Translation>
                  {(t) => (
                    <p className="product-price float-right text-secondary">
                      {localizeNumber(formatNumber(product?.price))} {t('egp')}
                    </p>
                  )}
                </Translation>
              )}
            </Col>
          </Row>
        )}
        {showDescription && (
          <Row className="mt-1">
            <Col className="mx-auto" xs={10}>
              <h2 className="description-title text-left secondary-font">
                <Translation>{(t) => t('marketplace.productDescription')}</Translation>
              </h2>
              <p className="product-description secondary-font text-left">
                {product && product[`description_${language}`]}
              </p>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default MarketplaceProductDetail;
