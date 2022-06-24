import { APP_ID, BASE_URL } from './utils.js';

const postComment = async (username, comment, itemID) => {
  await fetch(`${BASE_URL}/${APP_ID}/comments?item_id=${itemID}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username,
      comment,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });
};

export default postComment;
