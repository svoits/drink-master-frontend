// import { useState } from "react";

// export const Paginator = (data, itemsPerPage) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const maxPage = Math.ceil(data.length / itemsPerPage);

//   function currentData() {
//     const begin = (currentPage - 1) * itemsPerPage;
//     const end = begin + itemsPerPage;
//     return data.slice(begin, end);
//   }

//   function next() {
//     setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
//   }

//   function prev() {
//     setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
//   }

//   function jump(page) {
//     const pageNumber = Math.max(1, page);
//     setCurrentPage(Math.min(pageNumber, maxPage));
//     setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
//   }

//   return { next, prev, jump, currentData, currentPage, maxPage };
// }
//====================================================
// import * as React from 'react';
// import Typography from '@mui/material/Typography';
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// export default function PaginationControlled() {
//   const [page, setPage] = React.useState(1);
//   const handleChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <Stack spacing={2}>
//       <Typography>Page: {page}</Typography>
//       <Pagination count={10} page={page} onChange={handleChange} />
//     </Stack>
//   );
// }
//====================================================
import { useState } from 'react';
import { StyledArrows, StyledPagination } from './Paginator.styled';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Paginator = ({
  drinksPerPage,
  totalDrinks,
  onPageChange,
  pageNumbersToShow,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalDrinks / drinksPerPage); i++) {
    pageNumbers.push(i);
  }

  const getVisiblePageNumbers = () => {
    const halfPageNumbersToShow = Math.floor(pageNumbersToShow / 2);
    const currentPageIndex = pageNumbers.indexOf(currentPage);

    const start = Math.max(0, currentPageIndex - halfPageNumbersToShow);
    const end = Math.min(pageNumbers.length - 1, start + pageNumbersToShow - 1);

    return pageNumbers.slice(start, end + 1);
  };

  return (
    <StyledPagination>
      <ul>
        <StyledArrows
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiChevronLeft size={20} />
        </StyledArrows>
        {getVisiblePageNumbers().map((number) => (
          <li key={number}>
            <button
              onClick={() => handlePageChange(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </button>
          </li>
        ))}
        <StyledArrows
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalDrinks / drinksPerPage)}
        >
          <FiChevronRight size={20} />
        </StyledArrows>
      </ul>
    </StyledPagination>
  );
};

// export default Paginator;