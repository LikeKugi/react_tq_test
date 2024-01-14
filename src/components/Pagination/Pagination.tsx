import { FC, JSX } from 'react';
import styled from 'styled-components';

const PaginationButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const PaginationDisplay = styled.span`
  display: block;
  padding: 0.5rem 1rem;
  border: 1px solid;
`;

const PaginationActions = styled.div`
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: max-content;
  gap: 0.5rem;
`;

interface IPaginationProps {
  firstDisabled: boolean;
  lastDisabled: boolean;
  currentPage: number;
  clickHandler: (arg: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
                                            currentPage,
                                            clickHandler,
                                            lastDisabled,
                                            firstDisabled
                                          }): JSX.Element => {

  const onPaginate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: number) => {
    e.preventDefault();
    if (!(e.target instanceof HTMLButtonElement) || e.target.disabled) return;
    clickHandler(page);
  };

  return (
    <PaginationActions>
      <PaginationButton disabled={firstDisabled}
                        onClick={(e) => onPaginate(e, currentPage - 1)}
                        type={'button'}>Previous</PaginationButton>
      <PaginationDisplay>{currentPage}</PaginationDisplay>
      <PaginationButton disabled={lastDisabled}
                        onClick={(e) => onPaginate(e, currentPage + 1)}
                        type={'button'}>Next</PaginationButton>
    </PaginationActions>
  );
};
export default Pagination;
