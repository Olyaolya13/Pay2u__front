export const BASE_URL = 'https://pay2u.myddns.me';
export const TOKEN = '9e089128ff5a4926b08381cb5cbf3084a245b6b9';

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
