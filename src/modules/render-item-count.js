const renderItemCount = (num) => {
  const counter = document.getElementById('item-counter');
  counter.innerHTML = `(${num})`;
};

export default renderItemCount;