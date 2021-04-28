import { Card, Table, Col, Row } from 'react-bootstrap';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Translation } from 'react-i18next';

import AccountSettingsIcon from '../../AccountSettingsIcon/AccountSettingsIcon';

import './AccountSettingsCard.scss';

const AccountSettingsCard = () => {
  return (
    <Row className="AccountSettingsCard">
      <Col xs={12}>
        <Card>
          <Card.Body>
            <Table>
              <tbody>
                <tr className="no-border-top">
                  <td width="10%">
                    <AccountSettingsIcon user />
                  </td>

                  <td className="text-left">
                    <a className="text-dark" href="/account-settings/profile">
                      <Translation>{(t) => t('AccountSettingsPage.profileInfo')}</Translation>
                    </a>
                  </td>

                  <td width="10%">
                    <ChevronLeft />
                  </td>
                </tr>

                <tr>
                  <td xs={2}>
                    <AccountSettingsIcon password />
                  </td>

                  <td className="text-left">
                    <a className="text-dark" href="/account-settings/change-password">
                      <Translation>{(t) => t('AccountSettingsPage.changePassword')}</Translation>
                    </a>
                  </td>

                  <td width="10%">
                    <ChevronLeft />
                  </td>
                </tr>

                <tr>
                  <td xs={2}>
                    <AccountSettingsIcon contact />
                  </td>

                  <td className="text-left">
                    <a className="text-dark" href="/account-settings/contact-info">
                      <Translation>{(t) => t('AccountSettingsPage.contactInfo')}</Translation>
                    </a>
                  </td>

                  <td width="10%">
                    <ChevronLeft />
                  </td>
                </tr>

                <tr>
                  <td xs={2}>
                    <AccountSettingsIcon address />
                  </td>

                  <td className="text-left">
                    <a className="text-dark" href="account-settings/address">
                      <Translation>{(t) => t('AccountSettingsPage.addressInfo')}</Translation>
                    </a>
                  </td>

                  <td width="10%">
                    <ChevronLeft />
                  </td>
                </tr>

                <tr>
                  <td xs={2}>
                    <AccountSettingsIcon id />
                  </td>

                  <td className="text-left">
                    <a className="text-dark" href="/account-settings/id-docs">
                      <Translation>{(t) => t('AccountSettingsPage.IDdocs')}</Translation>
                    </a>
                  </td>

                  <td width="10%">
                    <ChevronLeft />
                  </td>
                </tr>

                <tr>
                  <td xs={2}>
                    <AccountSettingsIcon payment />
                  </td>

                  <td className="text-left">
                    <a className="text-dark" href="account-settings/payment-methods">
                      <Translation>{(t) => t('AccountSettingsPage.paymentMethods')}</Translation>
                    </a>
                  </td>

                  <td width="10%">
                    <ChevronLeft />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col xs={12}>
                <button>
                  <Translation>{(t) => t('AccountSettingsPage.logout')}</Translation>
                </button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AccountSettingsCard;
