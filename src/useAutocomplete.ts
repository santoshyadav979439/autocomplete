import { useState, useEffect } from "react";

export function useAutocomplete<T>(
  items: T[],
  filterFn: (input: string, item: T) => boolean
) {
  const [input, setInput] = useState("");
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  useEffect(() => {
    setFilteredItems(
      input ? items.filter((item) => filterFn(input, item)) : []
    );
    setHighlightedIndex(-1);
  }, [input, items]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredItems.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      setInput(filteredItems[highlightedIndex] as unknown as string);
      setFilteredItems([]);
    }
  };

  return {
    input,
    setInput,
    filteredItems,
    highlightedIndex,
    setHighlightedIndex,
    handleKeyDown,
  };
}
