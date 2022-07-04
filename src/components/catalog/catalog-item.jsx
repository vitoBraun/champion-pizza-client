import React, { useState } from "react";
import "../../styles/catalog-item.css";

const CatalogItem = (props) => {
  const product_variants = props.product.variants;
  const variantDefault = product_variants.length - 1;

  // const variantDefault2 = product_variants.filter((variant) => variant.visible);

  // console.log(variantDefault2.length - 1);

  const variantId = product_variants[variantDefault]._id;
  const variantPrice = product_variants[variantDefault].price;
  const variantWeight = product_variants[variantDefault].weight;

  var weightUnit = "";
  const doughTypes = ["Традиционное", "Тонкое"];

  if (
    props.product.categoryName !== "Напитки" &&
    props.product.categoryName !== "Наборы"
  ) {
    weightUnit = "гр.";
  }

  const [activeVariant, setActiveVariant] = useState(variantDefault);
  const [activeVariantId, setActiveVariantId] = useState(variantId);
  const [activeVariantPrice, setActiveVariantPrice] = useState(variantPrice);
  const [activeVariantWeight, setActiveVariantweight] = useState(variantWeight);
  const [activeDough, setActiveDough] = useState(0);

  const addToCart = () => {
    const obj = {
      productId: props.product._id,
      variantId: activeVariantId,
      categoryId: props.product.categoryId,
      categoryName: props.product.categoryName,
      name: props.product.name,
      variantName: props.product.variants[activeVariant].variantName,
      image: props.product.image,
      price: activeVariantPrice,
      dough:
        props.product.categoryName.toUpperCase() === "Пицца".toUpperCase()
          ? doughTypes[activeDough]
          : null,
    };
    props.onClickAddProduct(obj);
  };

  const onSelectDough = () => {
    setActiveDough(0);
    if (activeDough === 0) {
      setActiveDough(1);
    }
  };

  const DoughSwitch = (props) => {
    const id = props.product._id;
    if (props.product.categoryName.toUpperCase() === "Пицца".toUpperCase()) {
      return (
        <>
          <div
            className="variant-selector-group"
            product_id={id}
            onClick={() => onSelectDough()}
          >
            <button
              className={
                activeDough === 0
                  ? "variant-selector-item-active"
                  : "variant-selector-group-item"
              }
            >
              {doughTypes[0]}
            </button>
            <button
              className={
                activeDough === 1
                  ? "variant-selector-item-active"
                  : "variant-selector-group-item"
              }
            >
              {doughTypes[1]}
            </button>
          </div>
        </>
      );
    }
    return true;
  };

  const onSelectVariant = (index, variantId, variantPrice, VariantWeight) => {
    setActiveVariant(index);
    setActiveVariantId(variantId);
    setActiveVariantPrice(variantPrice);
    setActiveVariantweight(VariantWeight);
  };

  const VariantSwitch = (props) => {
    var variants = null;
    if (product_variants.length > 1) {
      variants = product_variants.map(
        (variant, index) =>
          variant.visible && (
            <button
              onClick={() =>
                onSelectVariant(
                  index,
                  variant._id,
                  variant.price,
                  variant.weight
                )
              }
              key={variant._id}
              className={
                activeVariant === index
                  ? "variant-selector-item-active"
                  : "variant-selector-group-item"
              }
            >
              {variant.variantName}
            </button>
          )
      );
    }

    if (
      props.product.categoryName.toUpperCase() === "Пицца".toUpperCase() ||
      props.product.categoryName === "Напитки")
    // props.product.variants.length > 1
    {
      return (
        <>
          <div
            className="variant-selector-group"
            product_id={props.product._id}
          >
            {variants}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {product_variants.filter((variant) => variant.visible).length > 0 && (
        <div className="catalogItem">
          <div className="img_wrapper exmpl">
            <img
              src={"/images/" + props.product.image}
              alt={props.product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "template/img/noimage.png";
              }}
            />
          </div>
          <div className="item_name_desc">
            <h4>{props.product.name}</h4>

            {props.product.description.length>0&&<div className="description">{props.product.description}</div>}
          </div>
          <div className="variant-price-weight-group">
            <div className="pg-gr">
              {activeVariantWeight} {weightUnit}
            </div>
            <div className="pg-pr">{activeVariantPrice} ₽</div>
          </div>
          <DoughSwitch product={props.product} />
          <VariantSwitch product={props.product} />
          <button className="add-to-cart" onClick={addToCart}>
            В корзину{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default CatalogItem;
