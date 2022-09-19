export const changePriceToDollarTypes = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const countDiscountFromPriceProduct = (
  price: number,
  percentPrice: number,
) => {
  return Math.floor(price - (price * percentPrice) / 100);
};
