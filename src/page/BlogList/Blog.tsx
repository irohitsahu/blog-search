import { BlogWrapper } from "./Blog.styles";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { useSearch } from "../../hooks/useSearch";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { SearchResults } from "../../components/SearchResult/SearchResults";

const Blog = () => {
  const {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    results,
    categories,
  } = useSearch();
  return (
    <BlogWrapper>
      <h1 className="text-3xl font-bold">Search Articles</h1>
      <p>Find the content you're looking for</p>
      <SearchBox query={query} onQueryChange={setQuery}>
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </SearchBox>

      <SearchResults results={results} />
    </BlogWrapper>
  );
};

export default Blog;
