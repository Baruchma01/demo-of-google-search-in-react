import "./Items.css";

export const Items = ({ items, cursor, handleMouseEnter, handleClick }) => {
  return (
    <div className="items">
      {items.map((item, i) => (
        <div
          className={cursor === i ? "active item" : "item"}
          key={item.id}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseDown={() => handleClick(item)} //use onMouseDown instead of onClick becuase of https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};
