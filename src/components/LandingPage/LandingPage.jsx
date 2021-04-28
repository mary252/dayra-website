import React from 'react';

import AccountStatus from './AccountStatus/AccountStatus';
import Services from './Services/Services';

import { useOvermind } from '../../overmind';

import './LandingPage.scss';

const LandingPage = () => {
  const { state } = useOvermind();
  const { balance, percentage, services } = state;

  return (
    <div className="LandingPage">
      <div className="account-status-container">
        <AccountStatus balance={balance} percentage={percentage} />
      </div>

      <div className="services-container mt-2">
        <Services services={services} />
      </div>
    </div>
  );
};

export default LandingPage;
