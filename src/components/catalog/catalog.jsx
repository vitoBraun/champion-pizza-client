import "../../styles/catalog.css";
import React from "react";
import CatalogItem from "./catalog-item";
// import CatalogItemLoading from "./catalog-item-loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/products";
import { addProductToCart } from "../../redux/actions/cart";

const Catalog = () => {
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const dispatch = useDispatch();
  const items = useSelector(({ products }) => products.items);
  // const isLoaded = useSelector(({ products }) => products.isLoaded);

  const handleAddToCart = (obj) => {
    dispatch(addProductToCart(obj));
  };

  try {
    // if (!isLoaded) {
    //   return Array(10)
    //     .fill(0)
    //     .map((_, index) => <CatalogItemLoading key={index} />);
    // }

    const shop = items.map((catalog) => (
      <div key={catalog._id}>
        {catalog.products.length > 0 && (
          <h3 id={"category" + catalog.categoryName}>
            {catalog.categoryName.toUpperCase()}
          </h3>
        )}

        {catalog.products.map((product) => {
          if (product.variants.length > 0) {
            return (
              <CatalogItem
                onClickAddProduct={handleAddToCart}
                key={product._id}
                product={product}
                categoryName={catalog.categoryName}
                categoryId={catalog._id}
              />
            );
          }
          return false;
        })}
      </div>
    ));
    return <div className="catalog">{shop}</div>;
  } catch (e) {
    return (
      <div className="catalog center">
        {console.log(e.message)}
        <p>Нет данных</p>
      </div>
    );
  }
};

export default Catalog;
