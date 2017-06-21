export const makeFetch = (url) => {
  return fetch(url).then((response) => {
    return response.json();
  });
};
