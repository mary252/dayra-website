import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import Service from './Service/Service';

import './Services.scss';

const Services = ({ services }) => {
  return (
    <div className="Services">
      <h1 className="title">
        <Translation>{(t) => t('Services.services')}</Translation>
      </h1>
      <div className="services-container">
        <Row>
          {services?.map((service) => (
            <Col key={service.name_en} className="service-col mb-2" xs={4}>
              <Service service={service} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
