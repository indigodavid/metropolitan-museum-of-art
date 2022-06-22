const ul = document.getElementById('art-objects');

const renderArtObject = (artObject) => {
  if (artObject) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    li.classList.add('art-object');
    li.setAttribute('id', artObject.objectID);
    img.src = artObject.primaryImageSmall;
    h3.innerHTML = artObject.title;
    p.innerHTML = 'by ' + artObject.artistDisplayName;

    div.appendChild(h3);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    ul.appendChild(li);
  }
}

export default renderArtObject;