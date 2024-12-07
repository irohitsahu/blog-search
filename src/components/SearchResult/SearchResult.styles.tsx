import styled from "styled-components";

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  overflow: auto;
  padding-right: 10px;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SearchResultArticle = styled.article.attrs({
  className: "shadow-sm hover:shadow-md transition-shadow",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  border-radius: var(--border-sm);
  padding: 0 0 1rem 0;
  background: radial-gradient(90% 100% at 10% 90%, #f96e2a37 0%, #768bfc60 80%);
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--secondaryText);
`;

export const BlogImage = styled.img`
  border-radius: var(--border-sm);
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardCategories = styled.span`
  padding: 0.2rem 1rem;
  border-radius: var(--border-sm);
  font-size: 12px;
  background-color: var(--primaryAccent);
  color: var(--primaryText);
`;

export const CardDate = styled.span`
  padding: 0.2rem 1rem;
  border-radius: var(--border-sm);
  font-size: 12px;
  color: var(--secondaryText);
  opacity: 0.8;
`;
