export function currencyFormat(value: number) {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "brl",
  }).format(value);
}
