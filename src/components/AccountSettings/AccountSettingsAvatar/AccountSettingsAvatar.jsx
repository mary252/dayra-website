import avatarPlaceholder from '../../../assets/images/avatar-placeholder.jpg';
import { Translation } from 'react-i18next';

import './AccountSettingsAvatar.scss';

const AccountSettingsAvatar = () => {
  return (
    <div className="AccountSettingsAvatar">
      <img src={avatarPlaceholder} alt="User Avatar" />

      <a className="secondary-font text-grey" href="/change-avatar">
        <Translation>{(t) => t('AccountSettingsPage.changeAvatar')}</Translation>
      </a>
    </div>
  );
};

export default AccountSettingsAvatar;
