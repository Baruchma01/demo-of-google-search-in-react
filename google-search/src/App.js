import "./App.css";
import { useState, useEffect } from "react";
import { Search } from "./components/Search/Search";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const { products } = data;
      setResults(products);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <Search results={results} />
    </div>
  );
}

export default App;
