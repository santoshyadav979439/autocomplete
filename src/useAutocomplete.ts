import { useState, useEffect, Dispatch, SetStateAction } from "react";
import useDebounce from "./useDebounce";

export function useAutocomplete<T>(
  items: T[],
  filterFn: (input: string, item: T) => boolean,
  onSelect: (item: T, setInput: Dispatch<SetStateAction<string>>) => void,
  fetchServerData?: (query: string) => void
) {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const [isSearching, setIsSearching] = useState<boolean>(false);

  const fetchDebouncedServerData = useDebounce(fetchServerData, 300);

  useEffect(() => {
    if (input.length) setIsSearching(true);
    else setIsSearching(false);
    if (fetchServerData) {
      fetchDebouncedServerData(input);
      //setFilteredItems(items);
    } else {
      setFilteredItems(
        input ? items.filter((item) => filterFn(input, item)) : []
      );
      setHighlightedIndex(-1);
    }
  }, [input]);
  useEffect(() => {
    if (!fetchServerData) setFilteredItems(items);
    setFilteredItems(items);
  }, [items]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredItems.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      onSelect(filteredItems[highlightedIndex], setInput);
      setFilteredItems([]);
    } else if (e.key === "Escape") {
      setIsSearching(false);
    }
  };

  return {
    input,
    setInput,
    filteredItems,
    highlightedIndex,
    setHighlightedIndex,
    handleKeyDown,
    setIsSearching,
    isSearching,
  };
}
