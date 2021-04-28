import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Translation } from 'react-i18next';

import './Loader.scss';

const Loader = () => {
  const [percentage, setPercentage] = useState(50);

  return (
    <Container className="Loader">
      <Row>
        <Col xs={4} className="mx-auto">
          <div className="text-center" style={{ width: '100%', alignContent: 'center' }}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={8} className="mx-auto">
          <div className="text-center" style={{ padding: '20px' }}>
            <h1 className="loading">
              <Translation>{(t) => t('Loader.load')}</Translation>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Loader;
