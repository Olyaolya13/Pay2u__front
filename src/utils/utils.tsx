export const BASE_URL = 'https://pay2u.myddns.me';
export const TOKEN = '0c616c9dc43f5c271f922bae1a1b91288b34d92c';

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
