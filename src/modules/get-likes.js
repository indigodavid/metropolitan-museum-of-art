import { BASE_URL, APP_ID } from './utils.js';

const getLikes = async (objectID, appID = APP_ID) => {
  const baseURL = BASE_URL;
  const endpoint = `/${appID}/likes/`;
  const response = await fetch(baseURL + endpoint);
  const data = await response.json();
  const item = data.find((element) => element.item_id === objectID);
  if (item) {
    return item.likes;
  }
  return 0;
};

export default getLikes;