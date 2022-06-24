import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import './desktop-style.css';
import getSearched from './modules/get-searched.js';
import itemCounter from './modules/item-counter.js';
import renderItemCount from './modules/render-item-count.js';
import renderArtArray from './modules/render-art-array.js';

const MAX_ART_OBJECTS = 12;
const initialSearch = 'painting';

getSearched(initialSearch).then((value) => {
  renderArtArray(value, MAX_ART_OBJECTS);
})

itemCounter(initialSearch).then((value) => {
  renderItemCount(value);
});