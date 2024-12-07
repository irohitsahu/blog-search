import React from "react";
import { SearchResult } from "../types";
import { mockResults } from "../data/mockData";

export function useSearch() {
  const [query, setQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const results = React.useMemo<SearchResult[]>(() => {
    return mockResults.filter((result) => {
      const matchesQuery =
        query.toLowerCase() === "" ||
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.excerpt.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || result.category === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategory]);

  const categories = React.useMemo(() => {
    return Array.from(new Set(mockResults.map((result) => result.category)));
  }, []);

  return {
    query,
    setQuery,
    selectedCategory,
    setSelectedCategory,
    results,
    categories,
  };
}
