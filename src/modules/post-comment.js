const sendComment = async (id, name, comment) => {
  const commentBtn = document.querySelector('.submit');
  commentBtn.id = id;
  const inputName = document.querySelector('#name');
  inputName.value = name;
  const inputComment = document.querySelector('#insight');
  inputComment.value = comment;
  if (!inputName.value || !inputComment.value) {
    alert('Not empty values allowed, please add your name and comment!');
  } else {
    const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pKSoTbGzFhj5RtoeFQif';
    const connect = await fetch(`${baseURL}/comments/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: commentBtn.id,
        username: inputName.value,
        comment: inputComment.value,
      }),
      headers: { 'Content-type': 'application/JSON' },
    });
    await connect.text();
    window.location.reload();
  }
};
export default sendComment;