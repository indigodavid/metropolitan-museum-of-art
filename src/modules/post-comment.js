import renderArtObject from "./render-art-object";
// const postComment = async (objectId, username, comment);
const username = document.getElementById('name');
// const comment = document.getElementById('insight');
console.log(username);

// const URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const response = await fetch(URL, {
//   method: 'POST',
//   body: JSON.stringify({ comment: comment.value, username: username.value }),
//   headers: { 'Content-type': 'application/json; charset=UTF-8' },
// });
// const dataSent = await response.json();
// return dataSent;
// export default postComment;
renderArtObject();