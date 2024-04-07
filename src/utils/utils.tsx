export const BASE_URL = 'https://pay2u.myddns.me';
export const TOKEN = '3d8ee9cafbef1fbc5fadcaa5369020da1e2ca99a';

const headers = {
  authorization: `Token ${TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getServices = () => {
  return fetch(`${BASE_URL}/api/v1/services/`, {
    method: 'GET',
    headers
  }).then(getResponseData);
};
