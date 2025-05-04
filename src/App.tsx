/* import { useState } from "react";
import { Autocomplete } from ".";

const App = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  // Sample data
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
  ];

  // Filter function to match the input with the list items
  const filterItems = (input: string, item: string) => {
    return item.toLowerCase().includes(input.toLowerCase());
  };

  // Handle selection of item
  const handleSelect = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-1/3">
        <h1 className="text-3xl mb-4">Fruit Autocomplete</h1>
        <Autocomplete
          items={items}
          filterFn={filterItems}
          onSelect={handleSelect}
          placeholder="Search fruits..."
          className="relative"
          inputClassName="w-full p-3 border rounded-lg"
          listClassName="absolute bg-white border border-gray-300 rounded-lg shadow-md mt-1 w-full max-h-60 overflow-y-auto z-10"
          itemClassName={(isActive) =>
            `px-4 py-2 cursor-pointer ${
              isActive ? "bg-blue-100" : "hover:bg-gray-200"
            }`
          }
        />
        {selectedItem && (
          <p className="mt-4">
            You selected: <strong>{selectedItem}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
 */
