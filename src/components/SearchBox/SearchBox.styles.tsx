import { IoSearchSharp } from "react-icons/io5";
import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  width: 100%;
  position: relative;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  border-radius: 0.6rem;
  gap: 0.4rem;
  background-color: var(--primaryBG);
  padding-bottom: 0.4rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
    gap: 1rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  color: var(--primaryText);
  background-color: transparent;
  outline: none;
  border-radius: 0.6rem;
  width: 100%;
  border-bottom: 2px solid var(--primaryAccent);

  &::placeholder {
    color: var(--primaryText);
  }

  @media (min-width: 768px) {
    border-bottom: none;
    border-right: 2px solid var(--primaryAccent);
    width: calc(100% - 400px - 1rem);
  }
`;

export const SearchIcon = styled(IoSearchSharp)`
  position: absolute;
  top: 8px;
  left: 10px;
  height: 25px;
  width: 25px;
  color: var(--primaryAccent);
`;
