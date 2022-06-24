import getArtObject from "./get-art-object.js";
import renderArtObject from "./render-art-object";

const renderArtArray = async (idsArray, size = 1) => {
  const artArray = [];
  let index = 0;
  while (artArray.length < size && index < idsArray.length ) {
    const artObject = await getArtObject(idsArray[index++]);
    if (artObject) {
      artArray.push(artObject);
      renderArtObject(artObject);
    }
  }
  return artArray;
}

export default renderArtArray;