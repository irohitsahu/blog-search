import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  width: 400px;
  gap: 1rem;
  justify-content: start;
  align-items: center;
  overflow-x: auto;
  padding: 0 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

export const CategoryButton = styled.button<{ $isSelected: boolean }>`
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-lg);
  font-size: 0.875rem;
  background-color: ${(props) =>
    props.$isSelected ? "var(--primaryAccent)" : "var(--primaryBG)"};
  color: var(--primaryText);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) =>
      props.$isSelected ? "var(--primaryAccent)" : "var(--secondaryText)"};
  }

  @media (min-width: 640px) {
    padding: 0.25rem 1rem;
  }
`;
