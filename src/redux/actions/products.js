import axios from "axios";

export const fetchProducts = () => (dispatch) => {
  axios.get("/api/products").then(({ data }) => {
    dispatch(setProducts(data));
  });
};

export const setProducts = (items) => ({
  type: "SET_PRODUCTS",
  payload: items,
});
