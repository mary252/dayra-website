import React from 'react';
import { Card } from 'react-bootstrap';

import './HeaderCard.scss';

const HeaderCard = ({
  title,
  subtitle,
  titleSecondary = false,
  titleFontSize = '18px',
  titleFontWeight = 500,
}) => {
  return (
    <div className="HeaderCard">
      <Card>
        <Card.Body>
          <h1
            className={`card-title ${titleSecondary ? 'secondary-font' : ''} text-center`}
            style={{
              fontSize: titleFontSize,
              fontWeight: titleFontWeight,
            }}
          >
            {title}
          </h1>
          <h2 className="text-primary text-center card-amount">{subtitle}</h2>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HeaderCard;
