import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import * as moment from 'moment';

import AccountSettingsAvatar from '../AccountSettingsAvatar/AccountSettingsAvatar';
import AccountSettingsCard from './AccountSettingsCard/AccountSettingsCard';

import { useOvermind } from '../../../overmind';
import { localizeNumber } from '../../../utils/localizeNumber';

import './AccountSettingsPage.scss';

const AccountSettingsPage = () => {
  const { actions, state } = useOvermind();
  const { currentUser } = state;

  useEffect(() => {
    actions.loadCurrentUser();
  }, [actions]);
  const formattedCreatedAt = moment(currentUser?.createdAt).format('MMMM YYYY');
  const splitCreatedAt = formattedCreatedAt.split(' ');
  const createdAtMonth = splitCreatedAt[0];
  const createdAtYear = splitCreatedAt[1];

  return (
    <Container className="AccountSettingsPage">
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <AccountSettingsAvatar />
            </Col>

            <Col xs={12}>
              <h1>{currentUser?.name}</h1>
            </Col>

            <Col xs={12}>
              <Card className="membership-info">
                <Card.Body>
                  <Row>
                    <Col xs={6} className="secondary-font border-left">
                      <p>
                        <Translation>{(t) => t('AccountSettingsPage.customerID')}</Translation>
                        &nbsp;
                        {currentUser?.id}
                      </p>
                    </Col>

                    <Col xs={6} className="secondary-font">
                      <p>
                        <Translation>
                          {(t) => (
                            <>
                              {t('AccountSettingsPage.memberSince')}
                              &nbsp;
                              {t(createdAtMonth.toLowerCase())}
                              &nbsp;
                              {localizeNumber(createdAtYear)}
                            </>
                          )}
                        </Translation>
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <AccountSettingsCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountSettingsPage;
