import { ReactNode } from "react";

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  blogImage: string;
}

export interface SearchBoxProps {
  query: string;
  onQueryChange: (query: string) => void;
  children: ReactNode;
}

export interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface SearchResultsProps {
  results: SearchResult[];
}
