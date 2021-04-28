import React, { useState } from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import ReactSlider from 'react-slider';
import i18n from 'i18next';

import { formatNumber } from '../../../../utils/formatNumber';
import { localizeNumber } from '../../../../utils/localizeNumber';

import './FactoringSliderForm.scss';

const FactoringSliderForm = ({ transaction }) => {
  const [amount, setAmount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const { language } = i18n;

  const updateAmount = (value) => {
    if (value > transaction?.remainder) {
      value = transaction?.remainder;
    } else if (value < 0) {
      value = 0;
    }
    setAmount(value);
  };

  return (
    <Container className="FactoringSliderForm">
      <Row>
        <Col xs={12}>
          <form action={`/factoring/${transaction?.id}/confirmation`} method="get">
            <Row className="from-group">
              <Col xs={12}>
                <input
                  className="form-control"
                  type="number"
                  name="amount"
                  id="amount"
                  step="1"
                  min={0}
                  max={transaction?.remainder}
                  value={amount}
                  onChange={($event) => updateAmount($event.target.value)}
                />
                <input type="hidden" name="paymentOption" value={selectedOption + ''} />
              </Col>
            </Row>
            <Row className="form-group">
              <Col className="mt-3" xs={12}>
                <h2 className="slider-label text-center secondary-font">
                  <Translation>{(t) => t('FactoringSliderForm.sliderLabel')}</Translation>
                </h2>
                <ReactSlider
                  className="horizontal-slider mt-4 mb-2"
                  thumbClassName="slider-thumb"
                  trackClassName="slider-track"
                  pageFn={() => transaction?.remainder / 10}
                  invert={language === 'ar'}
                  min={0}
                  max={transaction?.remainder}
                  onChange={(value) => updateAmount(value)}
                  value={amount}
                />
              </Col>
            </Row>
            <Row className="form-group mt-5">
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <h3 className="card-title">
                      <Translation>{(t) => t('FactoringSliderForm.cardTitle')}</Translation>
                    </h3>
                    <h3 className="card-amount">{localizeNumber(formatNumber(amount))}</h3>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="form-group mt-4">
              <Col xs={12}>
                <Translation>
                  {(t) => (
                    <input
                      className="btn btn-primary form-control confirm-button"
                      type="submit"
                      value={t('FactoringSliderForm.confirm')}
                    />
                  )}
                </Translation>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default FactoringSliderForm;
