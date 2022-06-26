import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const categories = ({
  className,
  handleNav,
}: {
  className: string;
  handleNav: () => void;
}) => {
  const items = useSelector(({ products }: RootState) => products.items);
  const categories = items.map(
    (category: {
      visible: any;
      _id: React.Key | null | undefined;
      categoryName: string;
    }) =>
      category.visible && (
        // category.products.length > 0 &&
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
