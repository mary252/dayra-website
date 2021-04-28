import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import i18n from 'i18next';

import './Service.scss';

const Service = ({ service }) => {
  const { language } = i18n;

  return (
    <Link to={service.link || ''}>
      <div className="Service">
        <Card className="service-card">
          <Card.Body>
            <Card.Img src={service.icon} alt={service[`name_${language}`]} />
            <p className="service-name">{service[`name_${language}`]}</p>
          </Card.Body>
        </Card>
      </div>
    </Link>
  );
};

export default Service;
