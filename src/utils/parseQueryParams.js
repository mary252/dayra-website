export const parseQueryParams = (params) => {
  const result = {};
  for (const entry of new URLSearchParams(params).entries()) {
    result[entry[0]] = entry[1];
  }
  return result;
};
