import getSearched from './get-searched.js';

const itemCounter = async (searchQuery) => {
  const data = await getSearched(searchQuery);
  const value = data.length;
  return value || 0;
};

export default itemCounter;