import * as actions from "./types";
import { totalPricePerItem, minusItem, plusItem } from "./reducerUtils";
const INIT_STATE = { items: [] };

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actions.ADD_TO_CART:
      const item = { ...action.payload, count: 1 };
      return { ...state, items: [...state.items, item] };

    case actions.DELETE_ITEM:
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case actions.DECREASE_CART_ITEM:
      return {
        items: state.items.map((item) => {
          if (item.id == action.payload) minusItem(item);
          return item;
        }),
      };

    case actions.INCREASE_CART_ITEM:
      return {
        items: state.items.map((item) => {
          if (item.id == action.payload) plusItem(item);
          return item;
        }),
      };

    case actions.TOTAL_PRICE:
      const items = state.items.map(totalPricePerItem);
      const total = items.map((item) => item.total).reduce((a, b) => a + b);
      return { items, total };

    case actions.SUBMIT_ORDER:
      return { items: [], order: action.payload };
    default:
      return state;
  }
};
