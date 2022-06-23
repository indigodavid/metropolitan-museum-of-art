import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import './desktop-style.css';
import getDepartments from './modules/get-departments.js';
import getSearched from './modules/get-searched.js';
import renderArtObject from './modules/render-art-object.js';
import getArtObject from './modules/get-art-object.js';
import loadPopup from './modules/getArt.js';

const departmentList = document.getElementById('department-list');
const MAX_ART_OBJECTS = 12;

getDepartments().then((array) => {
  array.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = element.displayName;
    departmentList.appendChild(li);
  });
});

getSearched('painting').then((value) => {
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
loadPopup();