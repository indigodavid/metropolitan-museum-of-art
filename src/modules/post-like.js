const postLike = async (objectID, appID = 'pKSoTbGzFhj5RtoeFQif') => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const endpoint = `${appID}/likes/`;
  const response = await fetch(baseURL + endpoint, {
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