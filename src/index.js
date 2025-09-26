import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import './desktop-style.css';
import getSearched from './modules/get-searched.js';
import itemCounter from './modules/item-counter.js';
import renderItemCount from './modules/render-item-count.js';
import renderArtArray from './modules/render-art-array.js';
import createPagination from './modules/pagination.js';

const MAX_ART_OBJECTS = 12;
const initialSearch = 'painting';
const searchButton = document.getElementById('search');
const searchInput = document.getElementById('search-input');
const artObjects = document.getElementById('art-objects');

let currentIdsArray = [];
let currentPage = 1;
let currentQuery = initialSearch;

const renderPagination = (pageInfo) => {
  const existingPagination = document.querySelector('.pagination');
  if (existingPagination) {
    existingPagination.remove();
  }

  if (pageInfo.totalPages > 1) {
    const pagination = createPagination(
      pageInfo.currentPage,
      pageInfo.totalPages,
      (newPage) => {
        currentPage = newPage;
        renderArtArray(currentIdsArray, currentPage, MAX_ART_OBJECTS)
          .then(renderPagination);
      },
    );

    artObjects.parentNode.insertBefore(pagination, artObjects.nextSibling);
  }
};

const searchArt = (query, page = 1) => {
  currentQuery = query;
  currentPage = page;

  getSearched(query).then((value) => {
    currentIdsArray = value;
    return renderArtArray(value, page, MAX_ART_OBJECTS);
  }).then((pageInfo) => {
    renderPagination(pageInfo);
  }).catch((reason) => {
    artObjects.innerHTML = reason;
  });

  itemCounter(query).then((value) => {
    renderItemCount(value);
  }).catch(() => {
    renderItemCount(0);
  });
};

searchArt(initialSearch, 1);

searchInput.oninput = () => {
  window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      if (searchInput.value) {
        searchArt(searchInput.value, 1);
        searchInput.value = '';
      }
    }
    return null;
  });
};

searchButton.addEventListener('click', () => {
  searchInput.classList.toggle('active');
});