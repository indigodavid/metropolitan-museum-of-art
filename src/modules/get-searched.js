const getSearched = async (text) => {
  const baseURl = 'https://collectionapi.metmuseum.org/public/collection/v1/search';
  const query = `?q=${text}&hasImages=true`;
  const objects = await fetch(baseURl + query);

  const queryResult = await objects.json();
  return queryResult.objectIDs;
};

export default getSearched;