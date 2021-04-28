import { useRouteMatch } from 'react-router-dom';

export const useFooter = () => {
  const marketplacePurchasePageMatch = useRouteMatch(
    '/marketplace/categories/:id/brands/:brandId/products/:productId',
  );
  const signupMatch = useRouteMatch('/signup');
  const accountSettingsMatch = useRouteMatch('/account-settings');
  const registrationMatch = useRouteMatch('/registration');
  const confrimIdMatch = useRouteMatch('/registration/id-confirm');
  const confrimIdBackMatch = useRouteMatch('/registration/id-confirm-back');
  const resultsMatch = useRouteMatch('/registration/results');
  const contactInfoPageMatch = useRouteMatch('/account-settings/contact-info');
  const userAccountMatch = useRouteMatch('/account');

  return (
    marketplacePurchasePageMatch?.isExact ||
    signupMatch?.isExact ||
    accountSettingsMatch ||
    registrationMatch?.isExact ||
    confrimIdMatch ||
    confrimIdBackMatch ||
    resultsMatch ||
    contactInfoPageMatch?.isExact ||
    userAccountMatch
  );
};
