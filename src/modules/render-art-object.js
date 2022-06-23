import Swal from 'sweetalert2';

const ul = document.getElementById('art-objects');

// To be removed when implemented
const showPopup = (id) => {
  console.log(id);
};

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
    likeCounter.innerHTML = '5 likes';

    commentButton.classList.add('comment-button');
    commentButton.innerHTML = 'Comment';
    commentButton.setAttribute('type', 'button');
    commentButton.addEventListener('click', () => {
      Swal.fire({
        html:
        `<div class=“art-container”>
        <div class=“art-img-container”>
          <img class=“arts” src=‘${artObject.primaryImage}’ alt=“art” />
          </div>
          <h3 class=“art-title”>${artObject.title}</h3>
        <div class=“art-details-container”>
           <p> ${artObject.artistDisplayName}</p>
           <p> ${artObject.dimensions}</p>
            <p> ${artObject.objectDate}</p>
        </div>
        <div class=“comments-container”>
            <h3 class=“comment-header”>Comments(0)</h3>
          <ul class=“comments-list”></ul>
        </div>
       <h4>Add comments</h4>
       <form>
        <input id="name" type="text" placeholder="your name"  required ><br><br>
    <input id="scores" type="text" placeholder="scores" required ><br><br>
    <button type="button" id="submit">comment</button>
    </form>
    </div>`,
        showCloseButton: true,
      });
    });
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
      } else {
        like.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }
      // add like function
    });

    img.addEventListener('click', () => {
      showPopup(li.id);
    });
  }
};

export default renderArtObject;