const getArtObject = async (objectId) => {
  const baseURl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/';
  const artObject = await fetch(baseURl + objectId);

  const queryResult = await artObject.json();
  if (
    queryResult.title
    && queryResult.primaryImage
    && queryResult.primaryImageSmall
    && queryResult.artistDisplayName
    && queryResult.objectDate
    && queryResult.dimensions
    && queryResult.isPublicDomain
  ) {
    return queryResult;
  }
  return null;
};

export default getArtObject;