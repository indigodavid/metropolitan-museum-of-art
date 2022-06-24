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
const searchInput = document.getElementById('search-input');
const artObjects = document.getElementById('art-objects');

const searchArt = (query, displayedResults) => {
  getSearched(query).then((value) => {
    renderArtArray(value, displayedResults);
  }).catch((reason) => {
    artObjects.innerHTML = reason;
  });
  itemCounter(query).then((value) => {
    renderItemCount(value);
  }).catch(() => {
    renderItemCount(0);
  });
}

searchArt(initialSearch, MAX_ART_OBJECTS);

searchInput.oninput = () => {
  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (searchInput.value) {
        searchArt(searchInput.value, MAX_ART_OBJECTS);
        searchInput.value = '';
      }
    }
    return null;
  })
}