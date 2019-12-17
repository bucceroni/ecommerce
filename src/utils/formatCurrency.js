const formatCurrency = (price, currency) => {
  let value = "Valor não informado";
  if (price && currency === "BRL") {
    value = `R$ ${price.toFixed(2).replace(".", ",")}`;
  }
  return value;
};

export default formatCurrency;
