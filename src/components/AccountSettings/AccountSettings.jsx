import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

import AccountSettingsRoutes from './AccountSettingsRoutes';

const AccountSettings = () => {
  const { path } = useRouteMatch();

  return (
    <Row>
      <Col xs={12}>
        <AccountSettingsRoutes baseUrl={path} />
      </Col>
    </Row>
  );
};

export default AccountSettings;
