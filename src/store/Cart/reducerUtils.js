export const plusItem = (item) => {
  item.count++;
  return item;
};

export const minusItem = (item) => {
  item.count = item.count >= 1 ? item.count - 1: 0;
  return item;
};
export const totalPricePerItem = (item) => {
  item.total = item.count * item.price;
  return item;
};
