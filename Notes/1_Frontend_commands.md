# 1.in frontend Folder
creating vite  => npm create vite@latest . ( here dot indicates that install in current folder)
Run program => npm run dev


# what is DAISYUI

DaisyUI is a popular plugin for Tailwind CSS that provides a collection of pre-designed, customizable UI components. It extends Tailwind's utility-first framework by adding ready-to-use components, such as buttons, cards, forms, and more, making it easier to build user interfaces without writing extensive custom CSS.

### Key Features:
- **Pre-built Components**: DaisyUI includes a wide range of components like alerts, buttons, cards, forms, modals, and navigation bars.
- **Customizable**: Since it is based on Tailwind CSS, you can easily customize the components by using Tailwind's utility classes or overriding DaisyUI's styles.
- **Responsive and Themeable**: DaisyUI components are responsive by default and support theming, allowing for dark mode or custom color themes.

### Example:
```html
<button class="btn btn-primary">Click me</button>
```
Here, `btn` and `btn-primary` are DaisyUI-specific classes added on top of Tailwind's framework.

### Installation:
To install DaisyUI in a Tailwind CSS project, you can use npm:
```bash
npm install daisyui
```

Then, add it to your `tailwind.config.js`:
```js
module.exports = {
  plugins: [require('daisyui')],
}
```

It's useful for quickly building beautiful interfaces while maintaining the flexibility of Tailwind CSS.




# 2. TAILWINDCSS glass morphism Generator


# 3. react-hot-toast => This package will provide You the diff ways of sending Errors,okay messages on frontend

- we'll add <Toaster/> in App.jsx so its avail to all components
- usage: toast.error("This didn't work.")
- visit this site : `https://react-hot-toast.com/`


# 4. Skeletons
- Skeletons are used to show the loading state of a component.