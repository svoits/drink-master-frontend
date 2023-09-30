import { useState } from 'react';
import { Button, List, StyledArrows, Wrapper } from './Paginator.styled';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Paginator = ({
  currentPage,
  drinksPerPage,
  totalDrinks,
  onPageChange,
  pageNumbersToShow,
}) => {
  // const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    // setCurrentPage(pageNumber);
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
    <Wrapper>
      <List>
        <StyledArrows
          type="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <HiChevronLeft size={24} />
        </StyledArrows>
        {getVisiblePageNumbers().map((number) => (
          <li key={number}>
            <Button
              onClick={() => handlePageChange(number)}
              className={number === currentPage ? 'active' : ''}
            >
              {number}
            </Button>
          </li>
        ))}
        <StyledArrows
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalDrinks / drinksPerPage)}
        >
          <HiChevronRight size={24} />
        </StyledArrows>
      </List>
    </Wrapper>
  );
};

export default Paginator;
