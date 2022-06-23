const getSearched = (text) => new Promise((resolve) => {
  let result = [];
  switch (text) {
    case 'painting':
      result = [1, 2, 3];
      break;
    case 'rembrandt':
      result = [1, 2, 3, 4];
      break;
    case 'gogh':
      result = [1, 2, 3, 4, 5];
      break;
    default:
      result = [];
  }
  resolve(result);
});

export default getSearched;