# @fab-ui/autocomplete

A flexible, accessible, and customizable Autocomplete component built with React and Tailwind CSS.

## ✨ Features

* 🔍 Supports custom filtering logic
* 🧠 Keyboard navigation (arrow keys & enter key)
* 🖱️ Mouse interaction support
* 🧩 Custom rendering of items
* 🌐 Optional server-side data fetching
* ♿ Fully accessible using ARIA roles & attributes

🔗 GitHub Repository
You can find the full source code and contribute to this project on GitHub:
https://github.com/santoshyadav979439/autocomplete

## 📦 Installation

Install the package via npm:

```bash
npm install @fab-ui/autocomplete
```

## 🛠 Usage

Import the component and styles:

```tsx
import Autocomplete from "@fab-ui/autocomplete";
import "@fab-ui/autocomplete/dist/index.css";
```

### Example

```tsx
import React, { useState } from "react";
import Autocomplete from "@fab-ui/autocomplete";
import "@fab-ui/autocomplete/dist/index.css";

const countries = ["India", "Indonesia", "United States", "Germany"];

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-1/2 mx-auto mt-10">
      <Autocomplete
        items={countries}
        filterFn={(input, item) => item.toLowerCase().includes(input.toLowerCase())}
        onSelect={(item, setInput) => {
          setSelected(item);
          setInput(item);
        }}
      />
      <p className="mt-4">Selected: {selected}</p>
    </div>
  );
}

export default App;
```

## 🧪 Props

```ts
export type AutocompleteProps<T> = {
  items: T[];
  filterFn: (input: string, item: T) => boolean;
  renderItem?: (item: T, isActive?: boolean) => React.ReactNode;
  onSelect: (item: T, setInput: Dispatch<SetStateAction<string>>) => void;
  placeholder?: string;
  fetchServerData?: (query: string) => void;
};
```

## 📁 Styles

The component is styled using Tailwind CSS and exported through the package:

```ts
import "@fab-ui/autocomplete/dist/index.css";
```

No additional Tailwind setup is required in the consumer project.

## 🚀 Publishing (for maintainers)

```bash
npm run build
npm publish
```

Ensure you are logged in to npm with:

```bash
npm login
```

---

## 📃 License

MIT © \Santosh Yadav
