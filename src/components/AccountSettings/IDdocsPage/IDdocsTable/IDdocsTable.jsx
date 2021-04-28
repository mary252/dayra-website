import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { Pencil, XCircleFill } from 'react-bootstrap-icons';
import { Translation } from 'react-i18next';

import { useOvermind } from '../../../../overmind';

import './IDdocsTable.scss';

const IDdocsTable = () => {
  const { state, actions } = useOvermind();
  const { currentUser } = state;

  useEffect(() => {
    actions.loadCurrentUser();
  }, [actions]);

  return (
    <Table className="IDdocsTable">
      <tbody>
        {currentUser?.IDdocs.map((doc) => {
          return (
            <tr className="primary-border no-border-top">
              <td className="text-left secondary-font" colSpan={doc.name === 'nationalID' && '3'}>
                <p>
                  <Translation>{(t) => t(`IDdocsPage.${doc.name}`)}</Translation>
                </p>
              </td>

              {doc.name !== 'nationalID' && (
                <td>
                  <Pencil />
                </td>
              )}

              {doc.name !== 'nationalID' && (
                <td className="delete">
                  <XCircleFill />
                </td>
              )}

              <td>
                {doc.authenticated ? (
                  <Button className="btn btn-secondary btn-block">
                    <Translation>{(t) => t('IDdocsPage.authenticated')}</Translation>
                  </Button>
                ) : (
                  <Button className="btn btn-grey btn-block">
                    <Translation>{(t) => t('IDdocsPage.notAuthenticated')}</Translation>
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

export default IDdocsTable;
