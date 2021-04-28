import React from 'react';
import { Pencil, XCircleFill } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { Translation } from 'react-i18next';
import './UnActivatedPaymentEntry.scss';

const UnActivatedPaymentEntry = ({ paymentMethod }) => {
  return (
    <tr className="method ">
      <td className=" primary-border " colSpan="2">
        <p className="secondary-font mb-2">
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
      <td className=" primary-border" xs={4} colSpan="1">
        <div className="end-Align">
          <Pencil className="icons" size={15} />
          <XCircleFill className="danger icons" size={15} />
          <Button className="button-notActive items-align" disabled>
            <Translation>{(t) => t('notActivated')}</Translation>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default UnActivatedPaymentEntry;
