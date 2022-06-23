import Swal from 'sweetalert2';
import getArtObject from './get-art-object.js';
import sendComment from './post-comment.js';

const loadPopup = (id) => {
  getArtObject(id).then((artObject) => {
    Swal.fire({
      html:
        `<div class=“popup-wrapper”>
        <div class=“art-img-container”>
          <img class=“arts” src=${artObject.primaryImageSmall} alt=“art” />
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
    <input id="insight" type="text" placeholder="Your insight" required ><br><br>
    <button type="button" class="submit">comment</button>
    </form>
    </div>`,
      showCloseButton: true,
    });
  });
};

export default loadPopup;