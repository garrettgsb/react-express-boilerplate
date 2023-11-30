export const getEntityCardRandomePosition = () => {
  const rotate = (Math.random() * 2 - 1).toFixed(1);

  const x = Math.floor(Math.random() * 11) - 5;
  const y = Math.floor(Math.random() * 11) - 5;

  return `rotate(${rotate}deg) translate(${x}px, ${y}px)`;
};

export const buildQueryParams = (url, params) => {
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(([field, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${field}=${encodeURIComponent(v)}`).join('&');
      }

      return `${field}=${value}`
    })
    .join('&');

  return `${url}?${queryParams}`;
};

export const debounce = (func, delay) => {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
