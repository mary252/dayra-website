import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Pencil, XCircleFill } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';

import { useOvermind } from '../../../../overmind';

import './ContactInfoTable.scss';

const ContactInfoTable = () => {
  const { t, i18n } = useTranslation();
  const { actions, state } = useOvermind();

  const { currentUser } = state;

  useEffect(() => {
    actions.loadCurrentUser();
  }, [actions]);

  return (
    <Table className="ContactInfoTable">
      <tbody>
        {currentUser?.contactInfo.map((contact, index) => {
          return (
            <tr className="primary-border no-border-top" key={index}>
              <td className="secondary-font text-grey">{parseInt(contact.number)}</td>
              <td className="secondary-font text-dark text-left">
                {t(`ContactInfoPage.${contact.name}`)}
              </td>
              <td>
                <Pencil />
              </td>
              <td className="delete">
                <XCircleFill />
              </td>
              <td>
                {contact.authenticated ? (
                  <Button className="btn btn-secondary btn-block">
                    {t('ContactInfoPage.authenticated')}
                  </Button>
                ) : (
                  <Button className="btn btn-grey btn-block">
                    {t('ContactInfoPage.notAuthenticated')}
                  </Button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ContactInfoTable;
