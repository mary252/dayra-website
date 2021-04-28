import {
  PersonFill,
  LockFill,
  TelephoneFill,
  GeoAltFill,
  PersonLinesFill,
  WalletFill,
} from 'react-bootstrap-icons';

import './AccountSettingsIcon.scss';

const AccountSettingsIcon = ({ user, password, contact, address, id, payment, variant }) => {
  return (
    <div
      className="AccountSettingsIcon"
      style={{ backgroundColor: variant === 'white' ? '#fff' : 'rgba(165, 140, 255, 0.25);' }}
    >
      {user && <PersonFill size={15} />}

      {password && <LockFill size={15} />}

      {contact && <TelephoneFill size={15} />}

      {address && <GeoAltFill size={15} />}

      {id && <PersonLinesFill size={15} />}

      {payment && <WalletFill size={15} />}
    </div>
  );
};

export default AccountSettingsIcon;
