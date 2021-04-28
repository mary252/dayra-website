export const loadTransaction = async ({ state, effects }, id) => {
  state.transaction = null;
  state.transaction = await effects.api.getTransaction(id);
};

export const calculateFactoringCost = async ({ state, effects }, cost) => {
  state.factoringCost = 0;
  state.factoringCost = await effects.api.calculateFactoringCost(cost);
};

export const loadCategories = async ({ state, effects }) => {
  state.categories = [];
  state.categories = await effects.api.getCategories();
};

export const loadCategory = async ({ state, effects }, id) => {
  state.category = null;
  state.category = await effects.api.getCategory(id);
};

export const loadBrand = async ({ state, effects }, id) => {
  state.brand = null;
  state.brand = await effects.api.getBrand(id);
};

export const loadBrandProducts = async ({ state, effects }, id) => {
  state.products = [];
  state.products = await effects.api.getBrandProducts(id);
};

export const loadProduct = async ({ state, effects }, id) => {
  state.product = null;
  state.product = await effects.api.getProduct(id);
};

export const calculateThreeMonthsInstallmentPrice = async ({ state, effects }, price) => {
  state.threeMonthsPrice = 0;
  state.threeMonthsPrice = await effects.api.calculateInstallmentPrice(price, 3);
};

export const calculateSixMonthsInstallmentPrice = async ({ state, effects }, price) => {
  state.sixMonthsPrice = 0;
  state.sixMonthsPrice = await effects.api.calculateInstallmentPrice(price, 6);
};

export const calculateTwelveMonthsInstallmentPrice = async ({ state, effects }, price) => {
  state.twelveMonthsPrice = 0;
  state.twelveMonthsPrice = await effects.api.calculateInstallmentPrice(price, 12);
};

export const loadCurrentUser = async ({ state, effects }) => {
  state.currentUser = await effects.api.getCurrentUser();
};

export const loadPasswordConstraints = async ({ state, effects }) => {
  state.passwordConstraints = await effects.api.getPasswordConstraints();
};

export const loadPaymentMethods = async ({ state, effects }) => {
  state.paymentMethods = [];
  state.paymentMethods = await effects.api.getPaymentMethods();
};

export const loadPaymentMethodsDropDown = async ({ state, effects }) => {
  state.paymentMethodsDropDown = [];
  state.paymentMethodsDropDown = await effects.api.getPaymentMethodsDropDown();
};

export const loadBanks = async ({ state, effects }) => {
  state.banks = [];
  state.banks = await effects.api.getBanks();
};

export const loadPossibleIdentificationOptions = async ({ state, effects }) => {
  state.possibleIdentificationOptions = await effects.api.getPossibleIdentificationOptions();
};

export const setCapturedImageUri = async ({ state }, dataUri) => {
  state.capturedImageUri = dataUri;
};

export const loadIdResult = async ({ state, effects }) => {
  state.idResult = await effects.api.getIdResult();
};

export const loadCurrentTransactions = async ({ state, effects }) => {
  state.currentTransactions = [];
  state.currentTransactions = await effects.api.getCurrentTransactions();
};

export const loadUpcomingTransactions = async ({ state, effects }) => {
  state.UpcomingTransactions = [];
  state.UpcomingTransactions = await effects.api.getUpcomingTransactions();
};

export const loadCurrentTransaction = async ({ state, effects }, data) => {
  state.userTransactionInfo = null;
  state.userTransactionInfo = await effects.api.getCurrentTransaction(
    data.TransactionID,
    data.EntryID,
  );
};

export const loadUpcomingTransaction = async ({ state, effects }, data) => {
  state.userTransactionInfo = null;
  state.userTransactionInfo = await effects.api.getUpcomingTransaction(
    data.TransactionID,
    data.EntryID,
  );
};

export const loadCurrentTransactionDate = async ({ state, effects }, TransactionID) => {
  state.userTransactionDate = null;
  state.userTransactionDate = await effects.api.getCurrentTransactionDete(TransactionID);
};

export const loadUpcomingTransactionDate = async ({ state, effects }, TransactionID) => {
  state.userTransactionDate = null;
  state.userTransactionDate = await effects.api.getUpcomingTransactionDete(TransactionID);
};
