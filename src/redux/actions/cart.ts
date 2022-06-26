import axios from "axios";
import { CartAction } from "../../types/CartTypes";
import { Customer, OrderObj } from "../../types/OrderTypes";

export const placeNewOrder = async (orderObj: OrderObj, customer: Customer) => {
  await axios
    .post("/api/order/neworder", {
      orderObj: orderObj,
      customer: customer,
    })
    .then((data) => {
      // setOrderPlaced(true);
    });
  // .catch((err) => {
  //   if (err.response.status !== 200) {
  //     setOrderPlaced(false);
  //   }
  // });
};

export const addProductToCart = (obj: {}) => ({
  type: "ADD_PRODUCT_CART",
  payload: obj,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});

export const removeCartItem = ({
  variantId,
  doughType = null,
}: CartAction) => ({
  type: "REMOVE_CART_ITEM",
  payload: variantId,
  payloadDough: doughType,
});

export const plusCartItem = ({ variantId, doughType = null }: CartAction) => ({
  type: "PLUS_CART_ITEM",
  payload: variantId,
  payloadDough: doughType,
});

export const minusCartItem = ({ variantId, doughType = null }: CartAction) => ({
  type: "MINUS_CART_ITEM",
  payload: variantId,
  payloadDough: doughType,
});
