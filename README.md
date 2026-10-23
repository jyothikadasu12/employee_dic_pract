# Employee Directory

A responsive Employee Directory built with **React, TypeScript, and Vite**. This project fetches employee data from the DummyJSON API and allows users to search employees by name.

## Features

- Fetch employee data from an external API.
- Display employee names, email addresses, and departments.
- Search employees by first or last name.
- Handle loading, success, and error states.
- Use reusable React components.
- Define data structures using TypeScript interfaces and types.
- Configure the API URL using environment variables.
- Responsive layout for different screen sizes.

## Tech Stack

- React
- TypeScript
- Vite
- HTML and CSS
- Fetch API
- DummyJSON API

## Project Structure

```text
employee_dic_pract/
├── public/
├── src/
│   ├── components/
│   │   ├── EmployeeList.tsx
│   │   └── SearchBox.tsx
│   ├── App.tsx
│   ├── api.ts
│   ├── types.ts
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/employee_dic_pract.git
```

### 2. Navigate to the project directory

```bash
cd employee_dic_pract
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a local `.env` file in the project root:

```env
VITE_API_URL=https://dummyjson.com/users?limit=10
```

The `.env.example` file provides a template for the required configuration.

```env
VITE_API_URL=your_api_url_here
```

Do not commit `.env` to GitHub. Keep it in `.gitignore`.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## How It Works

1. **API fetching:** `api.ts` sends a request to DummyJSON and returns the employee data.
2. **Type definitions:** `types.ts` defines the structure of employee records and request states.
3. **State management:** `App.tsx` uses `useState` to store the search query and request status.
4. **Side effects:** `useEffect` loads the employee data when the component mounts.
5. **Search:** The search input updates the query, and the employee list is filtered by name.
6. **Reusable components:** `SearchBox.tsx` handles search input, while `EmployeeList.tsx` displays employee cards.
7. **Rendering:** React updates the UI when state changes.

## Concepts Learned

| Concept | Purpose |
|---|---|
| TypeScript interfaces | Define the structure of employee data |
| Union types | Represent loading, success, and error states |
| React components | Divide the UI into reusable parts |
| Props | Pass data and callbacks between components |
| `useState` | Store changing application data |
| `useEffect` | Fetch data when the component mounts |
| `async` / `await` | Handle asynchronous API requests |
| Array `filter()` | Search for matching employees |
| Array `map()` | Render a list of employee cards |
| React `key` | Identify list items during rendering |
| Environment variables | Configure the API URL |
| Conditional rendering | Display loading, error, or success UI |

## API

This project uses the DummyJSON Users endpoint:

https://dummyjson.com/users?limit=10

The API returns sample user data, including names, email addresses, and company department information.

## Error Handling

The application displays a loading message while data is being fetched. If the request fails, it displays an error message. When the request succeeds, the employee list is displayed.

## Important Note

TypeScript provides compile-time type checking, but it does not automatically validate the actual JSON received from an external API at runtime.

The project uses sample API data for learning. It does not include authentication, a database, or a backend for managing employee records.

## Future Improvements

- Add department filtering.
- Add sorting by employee name.
- Add pagination.
- Add employee detail pages using React Router.
- Add a custom API backend.
- Add runtime validation for API responses.
- Add automated tests.

## Author

Your Name

## License

This project was created for learning and educational purposes.
