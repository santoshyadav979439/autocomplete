import React from "react";
import { useAutocomplete } from "./useAutocomplete";

export type AutocompleteProps<T> = {
  items: T[];
  filterFn: (input: string, item: T) => boolean;
  renderItem?: (item: T, isActive: boolean) => React.ReactNode;
  onSelect: (item: T) => void;
  placeholder?: string;
};

export function Autocomplete<T extends string | object>({
  items,
  filterFn,
  renderItem,
  onSelect,
  placeholder = "Search...",
}: AutocompleteProps<T>) {
  const {
    input,
    setInput,
    filteredItems,
    highlightedIndex,
    setHighlightedIndex,
    handleKeyDown,
  } = useAutocomplete(items, filterFn);

  return (
    <div className="relative w-full">
      <input
        className="w-full border p-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      {filteredItems.length > 0 && (
        <ul className="absolute bg-white shadow-md mt-1 w-full max-h-60 overflow-y-auto border rounded z-10">
          {filteredItems.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer ${
                index === highlightedIndex ? "bg-blue-100" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => onSelect(item)}
            >
              {renderItem
                ? renderItem(item, index === highlightedIndex)
                : (item as string)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
