const initialState = {
  items: [],
  isLoaded: false,
};

interface Action {
  type: string;
  payload: any;
}

const products = (state = initialState, action: Action) => {
  if (action.type === "SET_PRODUCTS") {
    return {
      ...state,
      items: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default products;
