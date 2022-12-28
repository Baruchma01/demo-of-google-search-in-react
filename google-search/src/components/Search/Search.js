import { Input } from "./Input/Input";
import { useState, useEffect } from "react";
import { Items } from "./items/Items";
import { useNavigate } from "react-router-dom";

export const Search = () => {
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

  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState([]);
  const [isItemsVisible, setIsItemsVisible] = useState(true);
  const [cursor, setCursor] = useState(0);

  const handleKeyDown = (e) => {
    if (e.keyCode === 38 && cursor > 0) {
      setCursor(cursor - 1);
    } else if (e.keyCode === 40 && cursor < filteredItems.length - 1) {
      setCursor(cursor + 1);
    } else if (e.keyCode === 13) {
      const item = filteredItems[cursor];
      if (item) {
        handleClick(item);
      }
    }
  };

  const handleClick = (item) => {
    // in real life it will be saved inside DB this is just for the example
    localStorage.setItem(item.id, JSON.stringify(item.title));
    const query = `q=${item.id}`;
    navigate(`/search?${query}`);
  };

  const handleSearch = (query) => {
    if (query.length > 0) {
      const filteredItems = results
        ?.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 10);
      setFilteredItems(filteredItems);
    } else {
      setFilteredItems([]);
    }
  };

  return (
    <div className="search-container">
      <Input
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        setIsItemsVisible={(state) => setIsItemsVisible(state)}
      />
      {isItemsVisible && (
        <Items
          items={filteredItems}
          cursor={cursor}
          handleClick={(item) => handleClick(item)}
          handleMouseEnter={(i) => setCursor(i)}
        />
      )}
    </div>
  );
};
