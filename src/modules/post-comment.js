import { APP_ID, BASE_URL } from './utils';

const postComment = async (username, comment, itemID) => {
  console.log('sstarted ', username, comment, itemID);
  const data = await fetch(`${BASE_URL}/${APP_ID}/comments?item_id=${itemID}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
      username,
      comment,
    }),
    headers: { 'Content-type': 'application/JSON' },
  });

  console.log(data);
  // window.location.reload();
};

export default postComment;
