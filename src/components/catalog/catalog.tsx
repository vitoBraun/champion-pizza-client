import "../../styles/catalog.css";
import React, { ReactComponentElement, ReactNode, useEffect } from "react";
import CatalogItem from "./catalog-item";
import CatalogItemLoading from "./catalog-item-loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/products";
import { addProductToCart } from "../../redux/actions/cart";
import { RootState } from "../../redux/store";

const Catalog = () => {
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const dispatch = useDispatch();
  const items = useSelector(({ products }: RootState) => products.items);
  const isLoaded = useSelector(({ products }: RootState) => products.isLoaded);
  const handleAddToCart = (obj: {}) => {
    dispatch(addProductToCart(obj));
  };

  try {
    if (!isLoaded) {
      return (
        <React.Fragment>
          <div className="catalog">
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <CatalogItemLoading key={index} />
              ))}
          </div>
        </React.Fragment>
      );
    }

    const shop = items.map(
      (catalog: {
        visible: any;
        catalogName: any;
        _id: React.Key | null | undefined;
        products: any[];
        categoryName: string;
      }) =>
        catalog.visible && (
          <div key={catalog.catalogName + catalog._id}>
            <div key={catalog._id}>
              {catalog.products.length > 0 && (
                <h3 id={"category" + catalog.categoryName}>
                  {catalog.categoryName.toUpperCase()}
                </h3>
              )}

              {catalog.products.map(
                (product) =>
                  product.variants.length > 0 &&
                  product.visible && (
                    <CatalogItem
                      onClickAddProduct={handleAddToCart}
                      key={product.name + " " + product._id}
                      product={product}
                      // categoryName={catalog.categoryName}
                      // categoryId={catalog._id}
                    />
                  )
              )}
            </div>
          </div>
        )
    );
    return <div className="catalog">{shop}</div>;
  } catch (e) {
    return (
      <React.Fragment>
        {/* <div className="catalog center">
          {console.log(e.message)}
          <p>Нет данных</p>
        </div> */}
      </React.Fragment>
    );
  }
};

export default Catalog;
