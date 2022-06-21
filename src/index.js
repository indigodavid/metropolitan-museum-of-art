// import _ from 'lodash';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import getDepartments from './modules/get-departments.js';
import getSearched from './modules/get-searched.js';

const departmentList = document.getElementById('department-list');

getDepartments().then((array) => {
  array.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = element.displayName;
    departmentList.appendChild(li);
  });
});

getSearched('gogh').then(value => {
  console.log(value);
})

/* function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  return element;
} */

// document.body.appendChild(component());