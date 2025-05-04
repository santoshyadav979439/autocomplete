# 🔍 React Autocomplete Component

A lightweight, customizable, and generic autocomplete component built with **React**, **TypeScript**, and styled using **Tailwind CSS**.

Supports keyboard navigation, custom filtering, and item rendering for both strings and object arrays.

---

## ✨ Features

- ✅ TypeScript generic support
- 🎯 Custom filtering logic (`filterFn`)
- 🎨 Custom rendering (`renderItem`)
- ⌨️ Keyboard navigation
- 💡 Fully styled with Tailwind CSS (optional)

---

## 📦 Installation

```bash
npm install your-package-name
# or
yarn add your-package-name

🚀 Usage 

```
import { Autocomplete } from 'your-package-name';

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

function App() {
  return (
    <div className="max-w-md mx-auto mt-10">
      <Autocomplete
        items={fruits}
        filterFn={(input, item) => item.toLowerCase().includes(input.toLowerCase())}
        onSelect={(item) => alert(`You selected: ${item}`)}
      />
    </div>
  );
}

```
🔧 Props

| Prop          | Type                                              | Required | Description                                           |
| ------------- | ------------------------------------------------- | -------- | ----------------------------------------------------- |
| `items`       | `T[]`                                             | ✅        | Array of items (strings or objects)                   |
| `filterFn`    | `(input: string, item: T) => boolean`             | ✅        | Custom filter function to match input with items      |
| `onSelect`    | `(item: T) => void`                               | ✅        | Called when an item is selected                       |
| `renderItem`  | `(item: T, isActive: boolean) => React.ReactNode` | ❌        | Optional render function for custom list item display |
| `placeholder` | `string`                                          | ❌        | Placeholder text for the input field                  |


🧠 Advanced Example (Objects + Custom Render)

```
type User = { id: number; name: string };

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

<Autocomplete
  items={users}
  filterFn={(input, user) => user.name.toLowerCase().includes(input.toLowerCase())}
  onSelect={(user) => console.log(user)}
  renderItem={(user, isActive) => (
    <div className={isActive ? 'font-bold' : ''}>{user.name}</div>
  )}
/>

```

** ⌨️ Keyboard Support **

⬇️ / ⬆️: Navigate the dropdown

Enter: Select highlighted item

Esc: Close the list (if implemented in useAutocomplete)
 import React, { useState } from "react";
import { Autocomplete } from "@fab-ui/autocomplete";
import "@fab-ui/autocomplete/dist/index.css";
const items = [
  { id: "1", label: "Apple" },
  { id: "2", label: "Banana" },
  { id: "3", label: "Cherry" },
  // Add more items here
];

const filterFn = (input, item) => {
  return item.label.toLowerCase().includes(input.toLowerCase());
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState();
  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <Autocomplete
        items={items}
        filterFn={filterFn}
        onSelect={handleSelect}
        renderItem={(item, isActive) => (
          <div
            style={{
              backgroundColor: isActive ? "lightblue" : "white",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            {item.label}
          </div>
        )}
      />
      {selectedItem && (
        <div>
          <h3>Selected Item:</h3>
          <p>{selectedItem.label}</p>
        </div>
      )}
    </div>
  );
};

export default App;
```
 
 ```
