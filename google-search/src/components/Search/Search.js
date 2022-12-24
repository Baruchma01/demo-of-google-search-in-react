import { Input } from "./Input/Input";
import { useState, useEffect } from "react";
import { Items } from "./items/Items";

export const Search = () => {
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // search items from the array
  const handleSearch = (query) => {
    if (query.length > 0) {
      const filteredItems = data?.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems([]);
    }
  };

  // fetch data from the api and save the data in state
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const { products } = data;
      setData(products);
    }
    fetchData();
  }, []);

  return (
    <div className="search-container" style={{ height: "500px" }}>
      <Input handleSearch={handleSearch} />
      <Items items={filteredItems} />
    </div>
  );
};
