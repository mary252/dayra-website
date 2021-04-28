import { useRouteMatch } from 'react-router-dom';

export const useBackgroundClass = () => {
  let backgroundClass = '';
  const confirmationPageMatch = useRouteMatch('/confirmation');
  const factoringMatch = useRouteMatch('/factoring');
  const landingMatch = useRouteMatch('/landing');
  const marketplaceMatch = useRouteMatch('/marketplace');
  const accountSettingsMatch = useRouteMatch('/account-settings');
  const signupPageMatch = useRouteMatch('/signup');
  const registrationMatch = useRouteMatch('/registration');
  const resultsMatch = useRouteMatch('/registration/results');
  const userAccountMatch = useRouteMatch('/account');

  if (
    !confirmationPageMatch &&
    !factoringMatch &&
    !landingMatch &&
    !marketplaceMatch &&
    !accountSettingsMatch &&
    !signupPageMatch &&
    !registrationMatch &&
    !userAccountMatch
  ) {
    backgroundClass = 'background-purple-blue-gradient';
  }

  if (resultsMatch) {
    backgroundClass = 'background-grey';
  }

  return backgroundClass;
};
