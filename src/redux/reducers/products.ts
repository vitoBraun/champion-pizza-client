const initialState = {
  items: [],
  error: null,
  isLoaded: false,
};

interface Action {
  type: Actions;
  payload: any;
}

const enum Actions {
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_ERROR = "SET_ERROR",
}

const products = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isLoaded: false,
      };
    default:
      return state;
  }
};

export default products;
