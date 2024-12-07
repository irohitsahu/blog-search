import { SearchResultsProps } from "../../types";
import {
  BlogImage,
  CardBody,
  CardCategories,
  CardDate,
  CardFooter,
  CardHeader,
  SearchResultArticle,
  SearchResultWrapper,
} from "./SearchResult.styles";

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <SearchResultWrapper>
        <p className="text-slate-400 py-5 text-sm text-center">
          No results found.
          <br />
          Try adjusting your search.
        </p>
      </SearchResultWrapper>
    );
  }

  return (
    <SearchResultWrapper>
      {results.map((result) => (
        <SearchResultArticle key={result.id}>
          <CardHeader>
            <BlogImage src="https://i.ibb.co/dDmNm4z/1.png" alt="blog image" />
            <h2 className="text-xl font-semibold px-4">{result.title}</h2>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">{result.excerpt}</p>
            <CardFooter>
              <CardCategories>{result.category}</CardCategories>
              <CardDate>{result.date}</CardDate>
            </CardFooter>
          </CardBody>
        </SearchResultArticle>
      ))}
    </SearchResultWrapper>
  );
}
