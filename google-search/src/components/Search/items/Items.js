import "./Items.css";

export const Items = ({ items, cursor, handleMouseEnter, handleClick }) => {
  return (
    <div className="items">
      {items.map((item, i) => (
        <div
          className={cursor === i ? "active" : null}
          key={item.id}
          onMouseEnter={() => handleMouseEnter(i)}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
