const getComments = async (i, title, wrapper) => {
  const id = i;
  const commentTitle = title;
  const commentsWrapper = wrapper;
  const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pKSoTbGzFhj5RtoeFQif';
  const connect = await fetch(
    `${baseURL}/comments?item_id=commentBtn${id}`,
    {
      method: 'GET',
    },
  );
  const response = await connect.json();
  if (connect.status === 200) {
    commentTitle.innerHTML += `(${response.length})`;
    for (let i = 0; i < response.length; i += 1) {
      const entry = document.createElement('p');
      entry.innerHTML = `${response[i].creation_date}---> ${response[i].username}:  ${response[i].comment}`;
      commentsWrapper.appendChild(entry);
    }
  }
};

export default getComments;