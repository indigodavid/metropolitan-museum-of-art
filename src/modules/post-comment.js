const nameInput = document.getElementById('name');
const insightInput = document.getElementById('insight');
const URL = '';
const postScore = async () => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  const dataSent = await response.json();
  return dataSent;
};
export default postScore;