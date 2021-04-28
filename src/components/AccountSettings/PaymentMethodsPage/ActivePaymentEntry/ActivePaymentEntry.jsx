import React from 'react';
import { Button } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import './ActivePaymentEntry.scss';

const ActivePaymentEntry = ({ paymentMethod }) => {
  return (
    <tr className="method ">
      <td className=" primary-border " colSpan="2">
        <p className="secondary-font mb-2 ">
          <Translation>
            {(t) =>
              paymentMethod.paymentMethodTypeId === '1'
                ? t('PaymnetMethods.wallet')
                : paymentMethod.paymentMethodTypeId === '2'
                ? t('PaymnetMethods.bank')
                : t('PaymnetMethods.vipCard')
            }
          </Translation>
        </p>
      </td>
      <td className=" primary-border " colSpan="1">
        <div className="end-Align">
          <Button variant="secondary" className="button-active" disabled>
            <Translation>{(t) => t('activated')}</Translation>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ActivePaymentEntry;
