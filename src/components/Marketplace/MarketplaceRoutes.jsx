import { Route, Switch } from 'react-router-dom';

import MarketplaceCategoriesPage from './MarketplaceCategoriesPage/MarketplaceCategoriesPage';
import MarketplaceCategoryDetail from './MarketplaceCategoryDetail/MarketplaceCategoryDetail';
import MarketplaceCategoryBrandPage from './MarketplaceCategoryBrandPage/MarketplaceCategoryBrandPage';
import MarketplacePlaceOrderPage from './MarketplacePlaceOrderPage/MarketplacePlaceOrderPage';
import MarketplacePurchasePage from './MarketplacePurchasePage/MarketplacePurchasePage';
import MarketplaceProductInstallmentsPage from './MarketplaceProductInstallmentsPage/MarketplaceProductInstallmentsPage';
import MarketplaceProductInvoicePage from './MarketplaceProductInvoicePage/MarketplaceProductInvoicePage';

const MarketplaceRoutes = ({ baseUrl }) => (
  <Switch>
    <Route exact path={baseUrl}>
      <MarketplaceCategoriesPage />
    </Route>

    <Route exact path={`${baseUrl}/categories/:id`}>
      <MarketplaceCategoryDetail />
    </Route>

    <Route exact path={`${baseUrl}/categories/:id/brands/:brandId`}>
      <MarketplaceCategoryBrandPage />
    </Route>

    <Route exact path={`${baseUrl}/categories/:id/brands/:brandId/products/:productId`}>
      <MarketplacePurchasePage />
    </Route>

    <Route exact path={`${baseUrl}/categories/:id/brands/:brandId/products/:productId/place-order`}>
      <MarketplacePlaceOrderPage />
    </Route>

    <Route
      exact
      path={`${baseUrl}/categories/:id/brands/:brandId/products/:productId/installments`}
    >
      <MarketplaceProductInstallmentsPage />
    </Route>

    <Route exact path={`${baseUrl}/categories/:id/brands/:brandId/products/:productId/invoice`}>
      <MarketplaceProductInvoicePage />
    </Route>
  </Switch>
);

export default MarketplaceRoutes;
