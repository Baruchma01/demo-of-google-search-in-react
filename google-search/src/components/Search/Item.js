import { useLocation } from "react-router-dom";
import { Search } from "./Search";
import { useEffect, useState } from "react";

export const Item = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q");
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://dummyjson.com/products/${query}`);
      const data = await response.json();
      setProduct(data);
    }
    fetchData();
  }, [query]);

  return (
    <div className="item-container">
      <Search />
      <div className="title">Title {product?.title}</div>
      <div className="Description"> Description ${product?.description}</div>
    </div>
  );
};
