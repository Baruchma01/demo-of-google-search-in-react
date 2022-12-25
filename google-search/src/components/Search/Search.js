import { Input } from "./Input/Input";
import { useState, useEffect } from "react";
import { Items } from "./items/Items";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
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
    const query = `q=${item.id}`;
    navigate(`/search?${query}`);
  };

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
    <div className="search-container">
      <Input handleSearch={handleSearch} handleKeyDown={handleKeyDown} />
      <Items
        items={filteredItems}
        cursor={cursor}
        handleClick={(item) => handleClick(item)}
        handleMouseEnter={(i) => setCursor(i)}
      />
    </div>
  );
};
