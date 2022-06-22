const getLikes = async (objectID, appID = 'pKSoTbGzFhj5RtoeFQif') => {
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const endpoint = appID + '/likes/';
  const response = await fetch(baseURL + endpoint);
  const data = await response.json();
  const item = data.find(element => element.item_id === objectID);
  if (item) {
    return item.likes;
  }
  return 0;
}

export default getLikes;