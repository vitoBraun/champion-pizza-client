import axios from "axios";

export const fetchProducts =
  () => (dispatch: (arg0: { type: string; payload: any }) => void) => {
    axios
      .get("/api/products")
      .then(({ data }) => {
        dispatch(setProducts(data));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };

export const setProducts = (items: any) => ({
  type: "SET_PRODUCTS",
  payload: items,
});

export const setError = (item: any) => ({
  type: "SET_ERROR",
  payload: item,
});
