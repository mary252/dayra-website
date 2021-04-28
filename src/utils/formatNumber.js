export const formatNumber = (number) => {
  if (parseInt(`${number}`) === NaN) return NaN;

  number = Math.round(number * 100) / 100;
  const remainder = ((number * 100) % 100) / 100;
  const numberString = `${Math.floor(number)}`;
  let result = '';
  for (let i = 0; i < numberString.length; i++) {
    const char = numberString.charAt(numberString.length - 1 - i);
    if (i != 0 && i % 3 == 0 && char !== '-') result = ',' + result;
    result = char + result;
  }

  if (remainder > 0) {
    const remainderString = `${remainder * 100}`;
    result += `.${remainderString.charAt(0)}${
      remainderString.charAt(1) > 0 ? remainderString.charAt(1) : ''
    }`;
  }

  return result;
};
