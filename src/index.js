import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import './desktop-style.css';
import getSearched from './modules/get-searched.js';
import renderArtObject from './modules/render-art-object.js';
import getArtObject from './modules/get-art-object.js';
import itemCounter from './modules/item-counter.js';
import renderItemCount from './modules/render-item-count.js';

const MAX_ART_OBJECTS = 12;
const initialSearch = 'painting';

getSearched(initialSearch).then((value) => {
  for (let index = 0; index < 100; index += 1) {
    let counter;
    getArtObject(value[index]).then((artObject) => {
      counter = document.getElementById('art-objects').children.length;
      if (counter === MAX_ART_OBJECTS) {
        index = Number.MAX_VALUE;
        return;
      }
      renderArtObject(artObject);
    });
  }
});

itemCounter(initialSearch).then((value) => {
  renderItemCount(value);
});