import * as actions from "./types";
import { totalPricePerItem, minusItem, addItem, plusItem } from "./reducerUtils";
const INIT_STATE = { items: [], count: 0 };


export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const item = { ...action.payload };
      return {
        ...state,
        items: addItem([...state.items], item),
        count: state.count + 1,
      };

    case actions.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        count: state.count >= 1 ? state.count - 1: 0,
      };

    case actions.DECREASE_CART_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) minusItem(item);
          return item
        }),
        count: state.count >= 1 ? state.count - 1: 0,
      };

    case actions.INCREASE_CART_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) plusItem(item);
          return item;
        }),
        count: state.count + 1,
      };

    case actions.TOTAL_PRICE:
      const items = state.items.map(totalPricePerItem);
      const itemsAfterTotal = items.map((item) => item.total);
      const total =
        itemsAfterTotal.length > 0
          ? itemsAfterTotal.reduce((a, b) => a + b)
          : 0;
      return {...state, items, total };

    case actions.SUBMIT_ORDER:
      return { ...state, items: [], order: action.payload, count: 0 };
    default:
      return state;
  }
};
