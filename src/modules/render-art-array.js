import getArtObject from "./get-art-object.js";
import renderArtObject from "./render-art-object";

const renderArtArray = async (idsArray, size = 1) => {
  const artArray = [];
  let index = 0;
  const artObjects = document.getElementById('art-objects');
  artObjects.innerHTML = '';
  if(!idsArray) {
    artObjects.innerHTML = '<h1>Not found</h1>';
    return [];
  }
  while (artArray.length < size && index < idsArray.length ) {
    const artObject = await getArtObject(idsArray[index++]);
    if (artObject) {
      artArray.push(artObject);
      renderArtObject(artObject);
    }
  }
  if (artArray.length === 0) {
    artObjects.innerHTML = '<h1>Sorry, the items could not be displayed</h1>';
  }
  return artArray;
}

export default renderArtArray;