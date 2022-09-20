# Mini E-Commerce

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Reference UI
- Home page, Cart, Product Details : [https://battleaxe.gumroad.com/](https://battleaxe.gumroad.com/)
- Cart in Homepage : [https://ebay.com/](https://ebay.com/) (ebay cart)

## Directory structure folder projects
```
mini-ecommerce
├─ .env.development
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ cart
│  │  │  ├─ CartContainer.tsx
│  │  │  └─ CartHomeItem.tsx
│  │  ├─ categories
│  │  │  └─ CategoriesContentItem.tsx
│  │  ├─ checkout
│  │  │  └─ Checkout.tsx
│  │  ├─ Loading.tsx
│  │  ├─ mainlayout
│  │  │  ├─ index.tsx
│  │  │  └─ Sidebar
│  │  │     └─ SidebarCategories.tsx
│  │  ├─ products
│  │  │  ├─ ProductHomesDetail.tsx
│  │  │  ├─ ProductHomesItem.tsx
│  │  │  ├─ ProductViewAll.tsx
│  │  │  └─ ProductViewByCategories.tsx
│  │  └─ ToastError.tsx
│  ├─ index.css
│  ├─ index.tsx
│  ├─ pages
│  │  ├─ cart
│  │  │  └─ CartPage.tsx
│  │  ├─ checkout
│  │  └─ homes
│  │     └─ HomesPage.tsx
│  ├─ react-app-env.d.ts
│  ├─ reportWebVitals.ts
│  ├─ setupTests.ts
│  ├─ store
│  │  └─ index.ts
│  ├─ utils
│  │  ├─ constants.ts
│  │  ├─ context
│  │  │  └─ CartContext.tsx
│  │  ├─ helpers.ts
│  │  ├─ hooks
│  │  │  └─ useContext.tsx
│  │  ├─ services.ts
│  │  └─ types.ts
│  └─ ___mocks___
│     ├─ categories.json
│     └─ product.json
├─ tailwind.config.js
└─ tsconfig.json

```

## Powered By
- [Create React App](https://github.com/facebook/create-react-app) to initialize the project with Javascript and TypeScript💎.
- [React Context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/) to manage the app state.
- [Localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to manage data favorite phonebook.
- [Tailwindcss ⚡](https://tailwindcss.com/docs/) to build the user interface.
- [React-Query](https://react-query-v3.tanstack.com/) to make a respone from endpoint API.
- Hosted on [Vercel 🚀](https://vercel.com/).

## Environment Variables

- `REACT_APP_SERVICES_API_URL` contains from endpoint dummyjson.com

## Run on Local

- Clone the project

  ```bash
    git clone https://github.com/iffatandriano/mini-ecommerce
  ```

- Go to the project directory

  ```bash
    cd mini-ecommerce
  ```

- Install dependencies

  ```bash
    npm install or yarn install
  ```

- Set up the [environment variables](#environment-variables)

- Start the server

  ```bash
    npm run dev or yarn dev
  ```

- Open http://localhost:3000 with your browser to see the result.
