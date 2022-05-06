import React from "react";

const CartItem = ({
  variantId,
  name,
  variantName,
  image,
  dough,
  totalItemPrice,
  totalItemCount,
  onRemove,
  onMinus,
  onPlus,
  categoryName,
}) => {
  const handleRemoveClick = () => {
    onRemove(variantId, dough);
  };
  const handlePlusItem = () => {
    onPlus(variantId, dough);
  };
  const handleMinusItem = () => {
    onMinus(variantId, dough);
  };

  return (
    <tr border="1">
      <td className="tg-baqh">
        {" "}
        <span className="delete-btn" onClick={handleRemoveClick}></span>
      </td>
      <td className="tg-baqh">
        {" "}
        <div className="cart-image">
          <img
            alt={name + variantName}
            src={"../images/" + image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "template/img/noimage.png";
            }}
          />
        </div>
      </td>
      <td className="tg-baqh">
        <div className="cart-description">
          {categoryName.toUpperCase() === "Пицца".toUpperCase() ? (
            <>
              <b>
                {name} {variantName}
              </b>{" "}
              <br /> {dough} тесто
            </>
          ) : (
            <>
              <b>
                {name} {variantName}
              </b>
            </>
          )}
        </div>
      </td>
      <td className="tg-baqh">
        <div className="quantity">
          <button className="btn" onClick={handleMinusItem}>
            <img
              alt="-"
              src="/template/img/btns/minus_ico.svg"
              width="20"
              height="20"
            />
          </button>
          <div className="itemCount">{totalItemCount}</div>
          <button className="btn" onClick={handlePlusItem}>
            <img
              alt="+"
              src="/template/img/btns/plus_ico.svg"
              width="20"
              height="20"
            />
          </button>
        </div>
      </td>
      <td className="tg-baqh">
        {" "}
        <div div className="total-price">
          {totalItemPrice}₽
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
