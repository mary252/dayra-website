import React from 'react';
import { Translation } from 'react-i18next';

import logoBlack from '../../assets/images/logo-black.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="content">
        <img src={logoBlack} alt="Dayra" />
        &nbsp; &nbsp;
        <span>
          <Translation>{(t) => t('Footer.service')}</Translation>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
