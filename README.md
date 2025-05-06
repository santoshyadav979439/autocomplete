# 🔍 @fab-ui/autocomplete

A flexible, accessible, and developer-friendly Autocomplete component built with React and Tailwind CSS.

---

## ✨ Features

- ✅ TypeScript support
- ✅ Custom item rendering
- ✅ Keyboard navigation (↑ ↓ Enter)
- ✅ Debounced server-side fetching
- ✅ Accessible with WAI-ARIA roles
- ✅ Tailwind CSS-powered styling
- ✅ Easily themeable

---
### Github
https://github.com/santoshyadav979439/autocomplete
 
## 📦 Installation

```bash
npm install @fab-ui/autocomplete
# or
yarn add @fab-ui/autocomplete

```import React, { useState } from "react";
import Autocomplete from "@fab-ui/autocomplete";
import "@fab-ui/autocomplete/dist/index.css"; // required for styles

const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

export default function App() {
  const handleSelect = (item: string, setInput: (val: string) => void) => {
    console.log("Selected:", item);
    setInput(item);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Autocomplete
        items={items}
        filterFn={(input, item) => item.toLowerCase().includes(input.toLowerCase())}
        onSelect={handleSelect}
        placeholder="Search fruits..."
      />
    </div>
  );
}```

🛠 Props

| Prop              | Type                                                            | Required | Description                                                     |
| ----------------- | --------------------------------------------------------------- | -------- | --------------------------------------------------------------- |
| `items`           | `T[]`                                                           | ✅        | List of items to display or search.                             |
| `filterFn`        | `(input: string, item: T) => boolean`                           | ✅        | Function to filter items based on input.                        |
| `onSelect`        | `(item: T, setInput: Dispatch<SetStateAction<string>>) => void` | ✅        | Called when an item is selected. Allows setting input manually. |
| `renderItem`      | `(item: T, isActive?: boolean) => React.ReactNode`              | ❌        | Optional custom rendering of each item.                         |
| `placeholder`     | `string`                                                        | ❌        | Input placeholder text. Default is `"Search..."`.               |
| `fetchServerData` | `(query: string) => void`                                       | ❌        | Optional async fetch function (debounced by 300ms).             |

🎨 Styling
This component is styled with Tailwind CSS. You must import the precompiled styles:

```import "@fab-ui/autocomplete/dist/index.css";```

♿ Accessibility
- Uses proper WAI-ARIA roles:
    - combobox, listbox, option

- Supports keyboard navigation:
    - ArrowDown, ArrowUp, Enter

- Focus management and aria-activedescendant included

📃 License
MIT © Santosh Yadav


