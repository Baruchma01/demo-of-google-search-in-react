import "./Items.css";

export const Items = ({ items }) => {
  return (
    <div className="items">
      {items.map((item) => (
        <div className="item"> {item.title} </div>
      ))}
    </div>
  );
};
