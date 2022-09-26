import React from "react";

export default function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (i) => {
    setActiveIndex(i);
  };

  const categories = ["Все", "Летние", "Демисезонные", "Зимние"];

  return (
    <div className="categories">
       <ul>
        {categories.map((value, i) => (
        <li
          onClick={() => onClickCategory(i)}
          className={activeIndex === i ? "active" : ""}
        >
        {value}
        </li>
           ))}
       </ul>
    </div>
  );
}
