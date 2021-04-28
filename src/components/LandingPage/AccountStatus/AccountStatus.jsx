import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Translation } from 'react-i18next';

import { formatNumber } from '../../../utils/formatNumber';
import { localizeNumber } from '../../../utils/localizeNumber';

import '../../../../node_modules/react-circular-progressbar/dist/styles.css';
import './AccountStatus.scss';

const AccountStatus = ({ balance, percentage }) => {
  return (
    <div className="AccountStatus">
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col className="progress-col" style={{ padding: '5px 0 0 10px' }}>
                  <CircularProgressbar
                    className="ciruclar-progress-bar"
                    value={percentage}
                    text={`${localizeNumber(formatNumber(percentage))}%`}
                    strokeWidth={10}
                  />
                </Col>
                <Col style={{ padding: '0 5px 0 10px' }}>
                  <h1 className="title">
                    <Translation>{(t) => t('AccountStatus.accountStatus')}</Translation>
                  </h1>
                  <h2 className="sub-title secondary-font">
                    <Translation>
                      {(t) =>
                        `${t('AccountStatus.availableBalance')} ${localizeNumber(
                          formatNumber(balance),
                        )} ${t('egp')}`
                      }
                    </Translation>
                  </h2>
                  <p className="description text-grey secondary-font">
                    <Translation>{(t) => t('AccountStatus.description')}</Translation>
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AccountStatus;
