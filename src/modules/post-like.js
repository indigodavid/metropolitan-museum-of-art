import { BASE_URL, APP_ID } from './utils.js';

const postLike = async (objectID, appID = APP_ID) => {
  const endpoint = `/${appID}/likes/`;
  const response = await fetch(BASE_URL + endpoint, {
    method: 'POST',
    body: JSON.stringify({
      item_id: objectID,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

export default postLike;