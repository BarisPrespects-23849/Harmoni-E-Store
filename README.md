# Harmoni E-Store

Harmoni E-Store is a modern, responsive React-based e-commerce front end. It demonstrates key skills in React and Redux by fetching products from the FakeStore API, displaying them in a dynamic grid, showing detailed product modals with quantity selection, and providing a seamless user experience with features like category search (via text and dropdown), toast notifications, and a dark mode toggle.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/harmoni-e-store.git
   cd harmoni-e-store
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

---

## Running the Project

- **Start the development server:**

  ```bash
  npm start
  ```

  The application will open in your browser at [http://localhost:3000](http://localhost:3000).

- **Build for production (optional):**

  ```bash
  npm run build
  ```

---

## Features

- **Responsive Layout:**  
  Uses CSS Grid, Flexbox, and media queries to adapt seamlessly across devices.

- **Header & Navigation:**  
  Features a yellow header with the brand "Harmoni," navigation links, and a combined category search that supports both a text-based input and a dropdown. A cart icon shows the current item count, and a dark mode toggle (with sun/moon icons) lets users switch themes.

- **Hero Section:**  
  Displays a split background (white and light yellow), large bold typography, and a "Shop Now" button with fade-in animation.

- **Product Display:**  
  Products load in a responsive grid. Each product card shows an image, truncated title, star rating (with a yellow star), price, and an "Add to Cart" button with smooth hover transitions.

- **Product Modal:**  
  Clicking a product opens a modal with detailed product information, a quantity selector, and a "Buy Now" button. A toast notification informs users when a product is added to the cart.

- **Services Section & Footer:**  
  A services section highlights key benefits (e.g., Free Delivery, 24/7 Support, Money Back Guarantee), and a centered footer provides subscription options, support contact, account links, and quick links.

---

## Project Structure

```
harmoni-e-store
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── HeroSection.js
│   │   ├── ServicesSection.js
│   │   ├── ProductCard.js
│   │   ├── ProductGrid.js
│   │   ├── ProductModal.js
│   │   └── Footer.js
│   ├── pages
│   │   └── HomePage.js
│   ├── store
│   │   └── slices
│   │       ├── productSlice.js
│   │       └── cartSlice.js
│   ├── styles
│   │   ├── App.css
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

- **components/**: Reusable UI components (header, hero, modal, etc.)  
- **pages/**: Page-level components, e.g., HomePage.  
- **store/**: Redux slices for managing product and cart state.  
- **styles/**: Global CSS files.  
- **App.js & index.js:** Main application components.

---

## Challenges & Future Improvements

- **Enhanced Cart Functionality:**  
  Expand the current cart count to include a full cart page with detailed item management.

- **Robust Error Handling:**  
  Improve error feedback for API failures and invalid category searches by replacing alerts with in-UI notifications.

- **Advanced Search:**  
  Incorporate a full-text search for product names or descriptions in addition to the category filter.

- **User Authentication:**  
  Add user login/signup functionality for a personalized experience.

- **Performance Optimizations:**  
  Utilize code splitting, lazy loading, and memoization for smoother performance.

