// const getArtObject = async () => {
//   const baseURl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects/451023';
//   const artObject = await fetch(baseURl);

async function getArt() {
  const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/451023');
  const queryResult = await response.json();
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
}
export default getArt;