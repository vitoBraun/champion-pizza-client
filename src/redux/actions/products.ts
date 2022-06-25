import axios from "axios";

export const fetchProducts =
  () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    axios.get("/api/products").then(({ data }) => {
      dispatch(setProducts(data));
    });
  };

export const setProducts = (items: any) => ({
  type: "SET_PRODUCTS",
  payload: items,
});
