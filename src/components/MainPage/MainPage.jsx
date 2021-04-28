import { Translation } from 'react-i18next';
import logo from '../../assets/images/logo-white.png';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="registration-container">
        <div className="logo">
          <img src={logo} alt="Dayra logo" />
          <h1>
            <Translation>{(t) => t('MainPage.dayra')}</Translation>
          </h1>
        </div>

        <h2>
          <Translation>{(t) => t('MainPage.title')}</Translation>
        </h2>

        <button>
          <Translation>{(t) => t('MainPage.login')}</Translation>
        </button>

        <button>
          <Translation>{(t) => t('MainPage.register')}</Translation>
        </button>
      </div>

      <p>
        <Translation>{(t) => t('MainPage.needHelp')}</Translation>
      </p>
    </div>
  );
};

export default MainPage;
