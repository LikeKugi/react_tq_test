import { FC, FormEvent, JSX, useId, useState } from 'react';
import styled from 'styled-components';

const SearchBox = styled.form`
  max-width: max-content;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

const SearchLabel = styled.label`
  padding-inline: 1rem;
`;

const SearchInput = styled.input`
  display: block;
  padding-block: 0.5rem;
  padding-inline: 1rem;
`;

const SearchButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  background-color: seagreen;
  color: #f9f9f9;

  &:active {
    background-color: aquamarine;
    color: #1a1a1a;
  }
`;

const SearchReset = styled.button`
  display: block;
  padding: 0.5rem 1rem;

  background-color: #1a1a1a;
  color: #f9f9f9;

  &:active {
    background-color: darkgray;
    color: #1a1a1a;
  }
`;

interface ISearchProps {
  submitHandler: (arg: string) => void;
  value: string;
}

const Search: FC<ISearchProps> = ({submitHandler, value}): JSX.Element => {

  const [val, setVal] = useState(value);

  const inputId = useId();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    submitHandler(val);
  };

  const handleReset = (e: FormEvent) => {
    e.preventDefault();
    setVal('');
    submitHandler('');
  };

  return (
    <SearchBox onSubmit={handleSubmit}
               onReset={handleReset}>
      <SearchLabel htmlFor={inputId}>Search</SearchLabel>
      <SearchInput id={inputId}
                   value={val}
                   onChange={e => setVal(e.target.value)}
                   type={'text'}
                   placeholder={'Search...'}/>
      <SearchButton type={'submit'}>Search</SearchButton>
      <SearchReset type={'reset'}>Reset</SearchReset>
    </SearchBox>
  );
};
export default Search;
