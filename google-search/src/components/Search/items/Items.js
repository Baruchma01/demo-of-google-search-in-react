import "./Items.css";
import { useNavigate } from "react-router-dom";

export const Items = ({ items }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const query = `q=${item.id}`;
    navigate(`/search?${query}`);
  };

  return (
    <div className="items">
      {items.map((item) => (
        <div className="item" key={item.id} onClick={() => handleClick(item)}>
          {item.title}
        </div>
      ))}
    </div>
  );
};
