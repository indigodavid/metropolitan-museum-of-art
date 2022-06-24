import { BASE_URL, APP_ID } from './utils.js';

export const fetchComments = async (itemID) => {
  const response = await fetch(
    `${BASE_URL}/${APP_ID}/comments?item_id=${itemID}`,
  );
  const data = await response.json();
  return data.length ? data : [];
};
export const getTotalComments = async (itemID) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${APP_ID}/comments?item_id=${itemID}`,
    );
    const data = await response.json();
    return data.length === undefined ? 0 : data.length;
  } catch (error) {
    return 0;
  }
};
