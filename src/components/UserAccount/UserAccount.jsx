import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useRouteMatch } from 'react-router-dom';

import UserAccountRoutes from './UserAccountRoutes';

const UserAccount = () => {
  const { path } = useRouteMatch();

  return (
    <Row>
      <Col xs={12}>
        <UserAccountRoutes baseUrl={path} />
      </Col>
    </Row>
  );
};

export default UserAccount;
