import React from "react";
import { useSelector } from "react-redux";

const categories = ({ className, handleNav }) => {
  const items = useSelector(({ products }) => products.items);
  const categories = items.map(
    (category) =>
      category.products.length > 0 && (
        <li key={category._id}>
          <a href={"#category" + category.categoryName} onClick={handleNav}>
            {category.categoryName.toUpperCase()}
          </a>
        </li>
      )
  );
  return <ul className={className}>{categories}</ul>;
};

export default categories;
