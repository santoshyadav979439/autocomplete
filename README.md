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


