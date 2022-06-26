import { doughType } from "../../types/CartTypes";

var initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const enum Actions {
  ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
  PLUS_CART_ITEM = "PLUS_CART_ITEM",
  MINUS_CART_ITEM = "MINUS_CART_ITEM",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  CLEAR_CART = "CLEAR_CART",
}

interface Action {
  payloadDough: doughType;
  type: Actions;
  payload: any;
}

//вычисляем сумму позиции
const getTotalPrice = (arr: any) => {
  return arr.reduce(
    (sum: number, obj: { price: number }) => obj.price + sum,
    0
  );
};

const _get = (obj: any, path: string) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

//вычисляем сумму всей корзины
const getTotalSum = (obj: any, path: string) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

//вычисляем, сколько пицц традиционного теста и сколько тонкого
const getDoughCount = (items: any, doughType: doughType) => {
  let x = 0;
  items.forEach((item: any) => {
    if (item.dough === doughType) {
      x += 1;
    }
  });
  return x;
};

//вычисляем сумму тонкого/традиционного теста
const getTotalPriceDoughType = (items: any, doughType: doughType) => {
  const x = getDoughCount(items, doughType);
  return items[0].price * x;
};

const cart = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_PRODUCT_CART": {
      const currentItems = !state.items[action.payload.variantId]
        ? [action.payload]
        : [...state.items[action.payload.variantId].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.variantId]: {
          items: currentItems,
          totalPrice: getTotalPrice(currentItems),

          thinCount: getDoughCount(currentItems, "Тонкое"),
          traditionCount: getDoughCount(currentItems, "Традиционное"),

          thinTotalPrice: getTotalPriceDoughType(currentItems, "Тонкое"),
          traditionTotalPrice: getTotalPriceDoughType(
            currentItems,
            "Традиционное"
          ),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "PLUS_CART_ITEM": {
      const itemToAdd = { ...state.items[action.payload].items[0] };
      itemToAdd.dough = action.payloadDough;

      const newObjItems = [...state.items[action.payload].items, itemToAdd];

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),

          thinCount: getDoughCount(newObjItems, "Тонкое"),
          traditionCount: getDoughCount(newObjItems, "Традиционное"),

          thinTotalPrice: getTotalPriceDoughType(newObjItems, "Тонкое"),
          traditionTotalPrice: getTotalPriceDoughType(
            newObjItems,
            "Традиционное"
          ),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "MINUS_CART_ITEM": {
      const oldItems = [...state.items[action.payload].items];
      const slicedItems = [
        ...oldItems.filter((item) => item.dough === action.payloadDough),
      ].slice(1);
      const restItems = [
        ...oldItems.filter((item) => item.dough !== action.payloadDough),
      ];
      const newArr = [...restItems, ...slicedItems];

      const newObjItems = slicedItems.length >= 1 ? newArr : oldItems;

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),

          thinCount: getDoughCount(newObjItems, "Тонкое"),
          traditionCount: getDoughCount(newObjItems, "Традиционное"),

          thinTotalPrice: getTotalPriceDoughType(newObjItems, "Тонкое"),
          traditionTotalPrice: getTotalPriceDoughType(
            newObjItems,
            "Традиционное"
          ),
        },
      };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }
    case "REMOVE_CART_ITEM": {
      const oldState = { ...state };
      const oldItems = [...oldState.items[action.payload].items];
      const newObjItems = oldItems.filter(
        (item) => item.dough !== action.payloadDough
      );
      // console.log(newObjItems);

      newObjItems.length === 0 && delete oldState.items[action.payload];

      const newItems =
        newObjItems.length === 0
          ? { ...oldState.items }
          : {
              ...oldState.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),

                thinCount: getDoughCount(newObjItems, "Тонкое"),
                traditionCount: getDoughCount(newObjItems, "Традиционное"),

                thinTotalPrice: getTotalPriceDoughType(newObjItems, "Тонкое"),
                traditionTotalPrice: getTotalPriceDoughType(
                  newObjItems,
                  "Традиционное"
                ),
              },
            };

      const totalCount = getTotalSum(newItems, "items.length");
      const totalPrice = getTotalSum(newItems, "totalPrice");

      return {
        ...oldState,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case "CLEAR_CART": {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }

    default:
      return state;
  }
};
export default cart;
