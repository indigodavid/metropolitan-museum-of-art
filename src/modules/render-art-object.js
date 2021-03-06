import displayPopup from './comment_popup.js';
import getArtObject from './get-art-object.js';
import getLikes from './get-likes.js';
import postLike from './post-like.js';

const ul = document.getElementById('art-objects');

const renderArtObject = (artObject) => {
  if (artObject) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const like = document.createElement('a');
    const likeCounter = document.createElement('span');
    const commentButton = document.createElement('button');

    li.classList.add('art-object');
    li.setAttribute('id', artObject.objectID);

    img.src = artObject.primaryImageSmall;
    div.classList.add('art-info');
    h3.innerHTML = artObject.title;
    like.setAttribute('href', '#');
    like.innerHTML = '<i class="fa-regular fa-heart"></i>';
    p.innerHTML = `by ${artObject.artistDisplayName}`;
    likeCounter.innerHTML = '0 likes';
    getLikes(li.id).then((value) => {
      likeCounter.innerHTML = `${value} likes`;
    });

    commentButton.classList.add('comment-button');
    commentButton.innerHTML = 'Comment';
    commentButton.setAttribute('type', 'button');

    div.appendChild(h3);
    div.appendChild(like);
    div.appendChild(p);
    div.appendChild(likeCounter);
    div.appendChild(commentButton);

    li.appendChild(img);
    li.appendChild(div);

    ul.appendChild(li);

    like.addEventListener('click', (e) => {
      e.preventDefault();
      like.classList.toggle('liked');

      if (like.classList.contains('liked')) {
        like.innerHTML = '<i class="fa-solid fa-heart"></i>';
        postLike(li.id).then(() => {
          getLikes(li.id).then((value) => {
            likeCounter.innerHTML = `${value} likes`;
          });
        });
      } else {
        like.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
    });

    img.addEventListener('click', () => {
      getArtObject(li.id).then((data) => {
        displayPopup(data);
      });
    });
    commentButton.addEventListener('click', () => {
      getArtObject(li.id).then((data) => {
        displayPopup(data);
      });
    });
  }
};

export default renderArtObject;
