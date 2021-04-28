import i18n from 'i18next';

export const localizeNumber = (number) => {
  const numberString = `${number}`;
  const { language } = i18n;

  let result = '';
  if (language === 'ar') {
    for (const char of numberString) {
      if (char < '0' || char > '9') {
        result += char;
        continue;
      }
      result += String.fromCharCode('٠'.charCodeAt(0) + parseInt(char));
    }
  } else {
    result = numberString;
  }

  return result;
};
