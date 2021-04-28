import moment from 'moment';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../overmind';
import { localizeNumber } from '../../../utils/localizeNumber';

import AccountSettingsAvatar from '../AccountSettingsAvatar/AccountSettingsAvatar';
import ProfileSettingsForm from './ProfileSettingsForm/ProfileSettingsForm';

import './ProfileSettingsPage.scss';

const ProfileSettingsPage = () => {
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
    <Container className="ProfileSettingsPage">
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={4}>
              <AccountSettingsAvatar />
            </Col>

            <Col>
              <Row className="mt-4">
                <Col>
                  <h1 className="text-left">{currentUser?.name}</h1>
                </Col>
              </Row>

              <Row>
                <Col>
                  <p className="secondary-font text-left">
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
            </Col>
          </Row>
          <ProfileSettingsForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSettingsPage;
