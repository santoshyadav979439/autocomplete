import React, { Dispatch, SetStateAction } from "react";
import { useAutocomplete } from "./useAutocomplete";

export type AutocompleteProps<T> = {
  items: T[];
  filterFn: (input: string, item: T) => boolean;
  renderItem?: (item: T, isActive?: boolean) => React.ReactNode;
  onSelect: (item: T, setInput: Dispatch<SetStateAction<string>>) => void;
  placeholder?: string;
  fetchServerData?: (query: string) => void;
};

function Autocomplete<T extends string | object>({
  items,
  filterFn,
  renderItem,
  onSelect,
  placeholder = "Search...",
  fetchServerData,
}: AutocompleteProps<T>) {
  const {
    input,
    setInput,
    filteredItems,
    highlightedIndex,
    setHighlightedIndex,
    handleKeyDown,
    isSearching,
    setIsSearching,
  } = useAutocomplete(items, filterFn, onSelect, fetchServerData);

  return (
    <div className="relative w-full">
      <input
        className="w-full p-2 border rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        onBlur={() => setTimeout(() => setIsSearching(false), 100)}
        onFocus={() => setIsSearching(true)}
        role="combobox"
        aria-autocomplete="list"
        aria-label="Search input"
        aria-expanded={isSearching}
        aria-controls="autocomplete-listbox"
        aria-activedescendant={
          highlightedIndex >= 0
            ? `autocomplete-option-${highlightedIndex}`
            : undefined
        }
      />
      {isSearching && filteredItems.length > 0 && (
        <ul
          id="autocomplete-listbox"
          className="absolute bg-white shadow-md mt-1 w-full max-h-60 overflow-y-auto border rounded z-10"
          onMouseDownCapture={(e) => e.preventDefault()}
          role="listbox"
        >
          {filteredItems.map((item, index) => (
            <li
              role="option"
              key={index}
              className={`px-4 py-2 cursor-pointer ${
                index === highlightedIndex ? "bg-blue-100" : ""
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => onSelect(item, setInput)}
              id={`autocomplete-option-${index}`}
              aria-selected={index === highlightedIndex}
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

export default React.memo(Autocomplete);
