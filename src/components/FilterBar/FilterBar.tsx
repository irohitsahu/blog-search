import { FilterBarProps } from "../../types";
import { CategoryButton, FilterContainer } from "./FilterBar.styles";

export function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterBarProps) {
  return (
    <FilterContainer>
      <CategoryButton
        $isSelected={selectedCategory === ""}
        onClick={() => onCategoryChange("")}
      >
        All
      </CategoryButton>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          $isSelected={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </FilterContainer>
  );
}
