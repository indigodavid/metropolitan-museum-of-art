const createPagination = (currentPage, totalPages, onPageChange) => {
  const paginationContainer = document.createElement('div');
  paginationContainer.className = 'pagination';

  const prevButton = document.createElement('button');
  prevButton.innerHTML = '&laquo; Previous';
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener('click', () => onPageChange(currentPage - 1));

  const nextButton = document.createElement('button');
  nextButton.innerHTML = 'Next &raquo;';
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener('click', () => onPageChange(currentPage + 1));

  const pageInfo = document.createElement('span');
  pageInfo.className = 'page-info';
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  paginationContainer.appendChild(prevButton);
  paginationContainer.appendChild(pageInfo);
  paginationContainer.appendChild(nextButton);

  return paginationContainer;
};

export default createPagination;