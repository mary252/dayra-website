const transactions = [
  {
    id: 1,
    date: '30/11/2020',
    invoicesCount: 3,
    total: 50000,
    remainder: 30000,
  },
  {
    id: 2,
    date: '15/10/2020',
    invoicesCount: 1,
    total: 50000,
    remainder: 10000,
  },
];

const categories = [
  {
    id: 1,
    name_ar: 'إطارات',
    name_en: 'Tires',
    img:
      'https://ahead4-thegreatprojects.s3.eu-west-2.amazonaws.com/image-cache/6/5/3/a/6/653a650a7f47332c8833716c76a7e0c36a291f23-international-sloth-day-2018-sloths-need-our-help-so-lets-get-moving-6879.jpeg',
    brands: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name_ar: 'زيوت',
    name_en: 'Car Oils',
    img:
      'https://c402277.ssl.cf1.rackcdn.com/photos/6520/images/portrait_overview/iStock_000016816803XLarge_mini.jpg?1394631384',
    brands: [],
  },
  {
    id: 3,
    name_ar: 'منتج',
    name_en: 'Product',
    img: 'https://www.abc.net.au/cm/rimage/12172884-3x4-xlarge.jpg?v=4',
    brands: [],
  },
  {
    id: 4,
    name_ar: 'منتج',
    name_en: 'Product',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/three-toed-sloth-royalty-free-image-1600689615.jpg?crop=0.658xw:0.985xh;0,0&resize=640:*',
    brands: [],
  },
];

const brands = [
  {
    id: 1,
    name: 'MICHELIN',
    img:
      'https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2018-12/three%20toed%20sloth%20-%20header.jpg?itok=zABmKcvg',
  },
  {
    id: 2,
    name: 'GOOD YEAR',
    img: 'https://ticotimes.net/wp-content/uploads/2019/11/3-toed-sloth-TRR.jpg',
  },
  {
    id: 3,
    name: 'DUNLOP',
    img: 'https://ichef.bbci.co.uk/images/ic/1040x1040/p05rtn7l.jpg',
  },
  {
    id: 4,
    name: 'BFGoodrich',
    img:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/three-toed-sloth-royalty-free-image-1600689615.jpg?crop=0.658xw:0.985xh;0,0&resize=640:*',
  },
  {
    id: 5,
    name: 'Hankook',
    img:
      'https://images.newrepublic.com/17d72f905156cb5e6030778ff70a85c140b1700a.jpeg?auto=compress&w=1400&ar=3%3A2&fit=crop&crop=faces&q=65&fm=jpg&ixlib=react-9.0.2',
  },
  {
    id: 6,
    name: 'TRIANGLE',
    img:
      'https://static.scientificamerican.com/sciam/cache/file/47D1623B-1434-482A-AC79A969C758EF96_source.jpg',
  },
];

const idResult = {
  name: 'عماد رووف هندي حليم',
  idNumber: '89173-937298',
  birthDate: '1/4/1993',
  address: 'مصر - القاهره - المعادي',
  gender: 'ذكر',
  maritalStatus: 'اعزب',
  job: 'طالب',
  expiryDate: '2/8/2016',
};

const products = [
  {
    id: 1,
    name: 'Type ABC 123',
    description_ar:
      'برزت التكنولوجيا المالية بشدة مؤخراً كحل أمثل للمستهلكين، في ظل الإغلاق المتتالي لمقرات البنوك و محلات الصرافة، و تسابق شركات البيع بالتجزئة على اقتحام عالم البيع عبر الإنترنت، لتفرض نفسها كحل للشركات التي تسعى لتقديم خدماتها المالية. جاء ذلك كنتيخة لجائحة كورونا التي سببت موجة ضخمة حملت العالم بشكل أسرع للعال',
    description_en:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non cumque facere molestiae dicta cum. At, quibusdam ducimus. Deserunt nobis repellendus voluptas tenetur reiciendis iusto expedita, earum molestiae unde necessitatibus?',
    price: 5000,
    img:
      'https://www.rainforest-alliance.org/sites/default/files/styles/750w_585h/public/2016-09/three-toed-sloth.jpg?itok=uWF-NdZZ',
    brandId: 2,
  },
  {
    id: 2,
    name: 'Type xYz 890',
    description_ar:
      'برزت التكنولوجيا المالية بشدة مؤخراً كحل أمثل للمستهلكين، في ظل الإغلاق المتتالي لمقرات البنوك و محلات الصرافة، و تسابق شركات البيع بالتجزئة على اقتحام عالم البيع عبر الإنترنت، لتفرض نفسها كحل للشركات التي تسعى لتقديم خدماتها المالية. جاء ذلك كنتيخة لجائحة كورونا التي سببت موجة ضخمة حملت العالم بشكل أسرع للعال',
    description_en:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non cumque facere molestiae dicta cum. At, quibusdam ducimus. Deserunt nobis repellendus voluptas tenetur reiciendis iusto expedita, earum molestiae unde necessitatibus?',
    price: 8000,
    img:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD5O6k8BI1AkPN4i9XoCxV4PV3Cuw2A_vgTw&usqp=CAU',
    brandId: 2,
  },
  {
    id: 3,
    name: 'Type aSd 567',
    description_ar:
      'برزت التكنولوجيا المالية بشدة مؤخراً كحل أمثل للمستهلكين، في ظل الإغلاق المتتالي لمقرات البنوك و محلات الصرافة، و تسابق شركات البيع بالتجزئة على اقتحام عالم البيع عبر الإنترنت، لتفرض نفسها كحل للشركات التي تسعى لتقديم خدماتها المالية. جاء ذلك كنتيخة لجائحة كورونا التي سببت موجة ضخمة حملت العالم بشكل أسرع للعال',
    description_en:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non cumque facere molestiae dicta cum. At, quibusdam ducimus. Deserunt nobis repellendus voluptas tenetur reiciendis iusto expedita, earum molestiae unde necessitatibus?',
    price: 10000,
    img: 'https://cdn.mos.cms.futurecdn.net/d3oRYFrxL7hZWMMmUj7Cb.jpg',
    brandId: 2,
  },
  {
    id: 4,
    name: 'Type qwE 135',
    description_ar:
      'برزت التكنولوجيا المالية بشدة مؤخراً كحل أمثل للمستهلكين، في ظل الإغلاق المتتالي لمقرات البنوك و محلات الصرافة، و تسابق شركات البيع بالتجزئة على اقتحام عالم البيع عبر الإنترنت، لتفرض نفسها كحل للشركات التي تسعى لتقديم خدماتها المالية. جاء ذلك كنتيخة لجائحة كورونا التي سببت موجة ضخمة حملت العالم بشكل أسرع للعال',
    description_en:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae non cumque facere molestiae dicta cum. At, quibusdam ducimus. Deserunt nobis repellendus voluptas tenetur reiciendis iusto expedita, earum molestiae unde necessitatibus?',
    price: 15000,
    img: 'https://i.insider.com/5bb50f25ac0a6335a07940cb?width=750&format=jpeg&auto=webp',
    brandId: 2,
  },
];

const currentUser = {
  id: 102,
  name: 'محمد أحمد مصطفى',
  firstName: 'محمد',
  createdAt: new Date(2020, 0, 1),
  birthDate: new Date(1981, 9, 15),
  nationalIDNumber: 12345678901234,
  contactInfo: [
    { name: 'work', number: '0123456789', authenticated: true },
    { name: 'home', number: '0102345678', authenticated: false },
    { name: 'personal', number: '0113456789', authenticated: false },
  ],
  IDdocs: [
    {
      name: 'nationalID',
      authenticated: true,
    },
    {
      name: 'driversLicense',
      authenticated: false,
    },
    {
      name: 'passport',
      authenticated: false,
    },
  ],
};

const passwordConstraints = {
  specialCharacter: true,
  numericCharacter: true,
  uppercase: true,
  length: 8,
};

const userPaymentMethods = [
  {
    id: 1,
    paymentMethodTypeId: 1,
    activated: true,
  },
  {
    id: 2,
    paymentMethodTypeId: 2,
    activated: false,
  },
  {
    id: 3,
    paymentMethodTypeId: 3,
    activated: false,
  },
];

const paymentMethodTypes = [
  {
    id: 1,

    name: 'wallet',
  },
  {
    id: 2,
    name: 'bank',
  },
  {
    id: 3,
    name: 'vip card',
  },
];

const banks = [
  {
    id: 1,
    name: 'CIB',
  },
  {
    id: 2,
    name: 'QNB',
  },
];

const possibleIdentificationOptions = ['nationalID', 'driversLicense', 'passport'];

const current_transactions = [
  {
    id: 1,
    date: '15/10/2020',
    transactions: [
      {
        id: 1,
        type: 'incoming',
        total: 1000,
      },
      {
        id: 2,
        type: 'outgoing',
        total: 1000,
      },
      {
        id: 3,
        type: 'incoming',
        total: 1000,
      },
    ],
  },
  {
    id: 2,
    date: '15/10/2020',
    transactions: [
      {
        id: 1,
        type: 'incoming',
        total: 1000,
      },
      {
        id: 2,
        type: 'outgoing',
        total: 1000,
      },
      {
        id: 3,
        type: 'incoming',
        total: 1000,
      },
    ],
  },
];

const upcoming_transactions = [
  {
    id: 1,
    date: '15/10/2020',
    transactions: [
      {
        id: 1,
        type: 'incoming',
        changed_value: 200,
        total: 1000,
      },
      {
        id: 1,
        type: 'outgoing',
        changed_value: 2000,
        total: 1000,
      },
      {
        id: 1,
        type: 'incoming',
        changed_value: 200,
        total: 1000,
      },
    ],
  },
  {
    id: 2,
    date: '15/10/2020',
    transactions: [
      {
        id: 1,
        type: 'incoming',
        changed_value: 200,
        total: 1000,
      },
      {
        id: 1,
        type: 'outgoing',
        changed_value: 2000,
        total: 1000,
      },
      {
        id: 1,
        type: 'incoming',
        changed_value: 200,
        total: 1000,
      },
    ],
  },
];

export const api = {
  async getTransaction(id) {
    return transactions.find((transaction) => transaction.id == id);
  },
  async calculateFactoringCost(cost) {
    return 0.03 * cost;
  },
  async getCategories() {
    return categories;
  },
  async getCategory(id) {
    const category = { ...categories.find((category) => category.id == id) };
    category.brands = brands.filter((brand) => category.brands.includes(brand.id));
    return category;
  },
  async getBrand(id) {
    return brands.find((brand) => brand.id == id);
  },
  async getBrandProducts(id) {
    return products.filter((product) => product.brandId == id);
  },
  async getProduct(id) {
    return products.find((product) => product.id == id);
  },
  async calculateInstallmentPrice(price, months) {
    if (months <= 3) {
      return (price * 1.1) / months;
    } else if (months <= 6) {
      return (price * 1.3) / months;
    } else {
      return (price * 1.8) / months;
    }
  },
  async getCurrentUser() {
    return currentUser;
  },
  async getPasswordConstraints() {
    return passwordConstraints;
  },
  async getPaymentMethods() {
    return userPaymentMethods;
  },
  async getPaymentMethodsDropDown() {
    return paymentMethodTypes;
  },
  async getBanks() {
    return banks;
  },
  async getPossibleIdentificationOptions() {
    return possibleIdentificationOptions;
  },
  async getIdResult() {
    return idResult;
  },
  async getCurrentTransactions() {
    return current_transactions;
  },
  async getUpcomingTransactions() {
    return upcoming_transactions;
  },
  async getCurrentTransaction(TransactionID, EntryID) {
    let transaction = current_transactions.find((transaction) => transaction.id == TransactionID);
    return transaction.transactions.find((transaction) => transaction.id == EntryID);
  },
  async getUpcomingTransaction(TransactionID, EntryID) {
    let transaction = upcoming_transactions.find((transaction) => transaction.id == TransactionID);
    return transaction.transactions.find((transaction) => transaction.id == EntryID);
  },
  async getCurrentTransactionDete(TransactionID) {
    return current_transactions.find((transaction) => transaction.id == TransactionID).date;
  },
  async getUpcomingTransactionDete(TransactionID) {
    return upcoming_transactions.find((transaction) => transaction.id == TransactionID).date;
  },
};
