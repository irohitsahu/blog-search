import { SearchBoxProps } from "../../types";
import { SearchBoxWrapper, SearchIcon, SearchInput } from "./SearchBox.styles";

export function SearchBox({ query, onQueryChange, children }: SearchBoxProps) {
  return (
    <SearchBoxWrapper>
      <SearchIcon />
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search articles..."
      />
      {children}
    </SearchBoxWrapper>
  );
}
