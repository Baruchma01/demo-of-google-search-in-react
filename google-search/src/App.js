import "./App.css";
import { Search } from "./components/Search/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Item } from "./components/Search/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/search",
    element: <Item />,
  },
]);

function App() {
  return (
    <div className="App">
      {/* <Search results={results} /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
