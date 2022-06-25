import React from "react";
import { useDispatch } from "react-redux";
import "../styles/cart.css";
import CartItem from "../components/cart/cart-item";
import { useSelector } from "react-redux";
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from "../redux/actions/cart";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { CartAction } from "../types/CartTypes";
import { RootState } from "../redux/store";
import { OrderObj } from "../types/OrderTypes";

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items }: OrderObj = useSelector(
    ({ cart }: RootState) => cart
  );

  const onClearCart = () => {
    dispatch(clearCart());
  };

  const onRemoveItem = ({ variantId, doughType }: CartAction) => {
    dispatch(removeCartItem({ variantId, doughType }));
  };

  const onPlusItem = ({ variantId, doughType }: CartAction) => {
    dispatch(plusCartItem({ variantId, doughType }));
  };

  const onMinusItem = ({ variantId, doughType }: CartAction) => {
    dispatch(minusCartItem({ variantId, doughType }));
  };

  // const placeOrder = () => {
  //   //написать функцкию отправки заказа
  //   console.log("ваш заказ", { items, totalCount, totalPrice });
  // };

  const productsInCart = Object.keys(items).map((key) => {
    return {
      object: items[key].items[0],
      thinCount: items[key].thinCount,
      traditionCount: items[key].traditionCount,
      thinTotalPrice: items[key].thinTotalPrice,
      traditionTotalPrice: items[key].traditionTotalPrice,
    };
  });

  const cartItem = (obj, doughType) => {
    var totalItemCount,
      totalItemPrice = null;

    switch (doughType) {
      case "Тонкое":
        totalItemCount = obj.thinCount;
        totalItemPrice = obj.thinTotalPrice;
        break;
      case "Традиционное":
        totalItemCount = obj.traditionCount;
        totalItemPrice = obj.traditionTotalPrice;
        break;
      case null:
        totalItemPrice = items[obj.object.variantId].totalPrice;
        totalItemCount = items[obj.object.variantId].items.length;
        break;
      default:
        break;
    }

    return (
      <CartItem
        key={obj.object.variantId + doughType}
        variantId={obj.object.variantId}
        name={obj.object.name}
        variantName={obj.object.variantName}
        image={obj.object.image}
        price={obj.object.price}
        dough={doughType}
        totalItemPrice={totalItemPrice}
        totalItemCount={totalItemCount}
        onRemove={onRemoveItem}
        onPlus={onPlusItem}
        onMinus={onMinusItem}
        categoryName={obj.object.categoryName}
      />
    );
  };

  const allCartItems = [];

  productsInCart.map((obj) => {
    if (obj.object.categoryName.toUpperCase() === "Пицца".toUpperCase()) {
      if (obj.thinCount > 0) {
        allCartItems.push(cartItem(obj, "Тонкое"));
      }
      if (obj.traditionCount > 0) {
        allCartItems.push(cartItem(obj, "Традиционное"));
      }
    } else {
      allCartItems.push(cartItem(obj, null));
    }
    return false;
  });

  return (
    <div className="cart" style={{ textAlign: "center" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src="/template/img/logo.svg" alt="" />
      </div>

      {totalCount ? (
        <div className="cart-container">
          <h4>Проверьте ваш заказ:</h4>
          <table className="tg">
            <thead>{allCartItems.map((obj) => obj)}</thead>
          </table>

          <div className="order-bottom">
            <div style={{ width: "100%", textAlign: "right" }}>
              <Link className="grayLink" to="/cart" onClick={onClearCart}>
                Очистить корзину
              </Link>
            </div>
            <div className="order-ti">
              <div className="total-order-price">
                Товаров: <b>{totalCount}</b>
              </div>

              {/* <div className="min-sum">Минимальныая сумма заказа 500 ₽</div> */}
              <div className="total-order-price">
                Cумма: <b>{totalPrice} ₽</b>
              </div>
            </div>

            <div className="order-ti">
              <Link to="/checkout">
                <Button className="checkoutBut btn">Всё верно!</Button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          В корзине пусто
          <br />
          <img
            id="cartimg"
            className="cartimg"
            height="100px"
            alt="cartImage"
            src="/template/img/cart.png"
          />
        </div>
      )}
      <br />
      <div style={{ width: "100%", textAlign: "center" }}>
        <Link to="/" className="grayLink">
          Назад к меню
        </Link>
      </div>
    </div>
  );
};

export default Cart;
