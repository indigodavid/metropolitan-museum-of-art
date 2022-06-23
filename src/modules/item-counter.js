import getSearched from "./get-searched";

const itemCounter = async (searchQuery) => {
  const data = await getSearched(searchQuery);
  const value = data.length;
  return value ? value : 0;
}

export default itemCounter;