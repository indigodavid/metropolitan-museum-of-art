import getArtObject from './get-art-object.js';
import renderArtObject from './render-art-object.js';

const renderArtArray = async (idsArray, page = 1, pageSize = 12) => {
  const artArray = [];
  const artObjects = document.getElementById('art-objects');
  artObjects.innerHTML = '';
  if (!idsArray || idsArray.length === 0) {
    artObjects.innerHTML = '<h1>Not found</h1>';
    return [];
  }

  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, idsArray.length);
  const pageIds = idsArray.slice(startIndex, endIndex);

  /* eslint-disable */
  for (const id of pageIds) {
    const artObject = await getArtObject(id);
    if (artObject) {
      artArray.push(artObject);
      renderArtObject(artObject);
    }
  }
  /* eslint-enable */
  if (artArray.length === 0) {
    artObjects.innerHTML = '<h1>Sorry, the items could not be displayed</h1>';
  }
  return {
    artArray,
    currentPage: page,
    totalPages: Math.ceil(idsArray.length / pageSize),
    totalItems: idsArray.length,
  };
};

export default renderArtArray;