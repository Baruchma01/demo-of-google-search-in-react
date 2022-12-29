import "./Items.css";

export const Items = ({ items, cursor, handleMouseEnter, handleClick }) => {
  const handleDeleteHistory = (item) => {
    if (!!localStorage.getItem(item.id)) {
      localStorage.removeItem(item.id);
    }
  };
  return (
    <div className="items">
      {items.map((item, i) => {
        let className = "item";
        // in real life it will be saved inside DB this is just for the example
        const dataHistory = localStorage.getItem(item.id);
        if (!!dataHistory) {
          className += " in-history";
        }
        if (cursor === i) {
          className += " active";
        }

        return (
          <div
            className={className}
            key={item.id}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseDown={() => handleClick(item)} //use onMouseDown instead of onClick becuase of https://stackoverflow.com/questions/17769005/onclick-and-onblur-ordering-issue
          >
            <p>{item.title}</p>
            {!!dataHistory && (
              <span
                className="delete-history"
                onMouseDown={(e) => {
                  e.stopPropagation();
                  handleDeleteHistory(item);
                }}
              >
                delete
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
