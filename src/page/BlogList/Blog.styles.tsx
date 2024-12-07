import styled from "styled-components";

export const BlogWrapper = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2rem 5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 10rem;
  }
  @media (min-width: 1536px) {
    padding: 2rem 20rem;
  }
`;
