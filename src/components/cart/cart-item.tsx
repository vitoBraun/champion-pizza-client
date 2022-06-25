import React from "react";
import { CartItemProps } from "../../types/CartTypes";

const CartItem = ({
  variantId,
  name,
  variantName,
  image,
  doughType,
  totalItemPrice,
  totalItemCount,
  onRemove,
  onMinus,
  onPlus,
  categoryName,
}: CartItemProps) => {
  const handleRemoveClick = () => {
    onRemove({variantId, doughType});
  };
  const handlePlusItem = () => {
    onPlus({variantId, doughType});
  };
  const handleMinusItem = () => {
    onMinus({variantId, doughType});
  };

  return (
    <tr style={{ border: 1 }}>
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
            onError={(event) => {
              (event.target as HTMLImageElement).onerror = null;
              (event.target as HTMLImageElement).src =
                "template/img/noimage.png";
            }}
          />
        </div>
      </td>
      <td className="tg-baqh">
        <div className="cart-description">
          {categoryName.toUpperCase() === "Пицца".toUpperCase() ? (
            <div>
              <b>
                {name} {variantName}
              </b>{" "}
              <br /> {doughType} тесто
            </div>
          ) : (
            <div>
              <b>
                {name} {variantName}
              </b>
            </div>
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
        <div className="total-price">{totalItemPrice}₽</div>
      </td>
    </tr>
  );
};

export default CartItem;
