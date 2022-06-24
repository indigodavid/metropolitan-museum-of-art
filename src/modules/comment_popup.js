import Swal from 'sweetalert2';
import postComment from './post-comment.js';
import { fetchComments } from './get_comment.js';

const displayPopup = (data) => {
  Swal.fire({
    html: `<div class=“popup-wrapper”>
        <div class=“art-img-container”>
          <img class=“arts” src=${data.primaryImageSmall} alt=“art” />
          </div>
          <h3 class=“art-title”>${data.title}</h3>
        <div class=“art-details-container”>
           <p> ${data.artistDisplayName}</p>
           <p> <b>Art dimension</b>: ${data.dimensions}</p>
            <p> <b>Art date </b> :${data.objectDate}</p>
        </div>
        <div class=“comments-container”>
            <h3 class=“comment-header”>Comments<span id="total-comments"></span></h3>
          <ul class="comments-list"></ul>
        </div>
       <h4>Add comments</h4>
       <form id='form' method='post' action='#'>
        <input id="name" type="text" placeholder= "your name"  required> <br><br>
    <textarea id="comment" type="text" placeholder= "Your insight" required rows="3" cols="50"> </textarea><br><br>
    <input type="submit" class="submit" value='comment'/>
    </form>
    </div>`,
    showCloseButton: true,
  });
  const name = document.getElementById('name');
  const comment = document.getElementById('comment');
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    postComment(name.value, comment.value, data.objectID).then(() => {
      Swal.close();
      displayPopup(data);
    });
  });

  fetchComments(data.objectID).then((data) => {
    document.getElementById('total-comments').innerHTML = ` (${data.length})`;
    if (data.length) {
      data.forEach((item) => {
        const li = document.createElement('li');
        li.className = 'comment';
        li.textContent = `${item.creation_date} ${item.username}: ${item.comment}`;
        document.querySelector('.comments-list').appendChild(li);
      });
    }
  });
};

export default displayPopup;
