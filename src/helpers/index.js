/* eslint-disable consistent-return */
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
const hasNoValue = (val) => !val;

const getParamsWithValues = (obj) => {
  if (Object.values(obj).every(hasNoValue)) return;
  // eslint-disable-next-line no-unused-vars
  const ParamsWithValues = Object.entries(obj).filter(([key, val]) => !hasNoValue(val));

  return ParamsWithValues;
};

const sanitizeParamValues = (arr) => {
  if (!arr) return;
  return arr.map(([key, value]) => {
    if (value && typeof value === 'string') {
      const newValue = value.trim().split(' ').join('+');

      return [key, newValue];
    }
    return [key, value];
  });
};

const makeQueryString = (arr) => {
  if (!arr) return;
  const amp = '&';
  const result = arr.map(([key, val]) => `${key}=${val}`).reduce((a, b) => `${a}${amp}${b}`);
  return `?${result}`;
};

const queryParam = pipe(getParamsWithValues, sanitizeParamValues, makeQueryString);
// eslint-disable-next-line import/prefer-default-export
export const generateUrl = (params) => queryParam(params);
