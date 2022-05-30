export const parseCurrencies = (currency) => {
  if (currency === "BTC") return "bitcoin";
  else if (currency === "ETH") return "ethereum";
  else if (currency === "USD") return "usd";
};

export const parseTimestamp = (timestamp) => {
  var date = new Date(timestamp);

  return date.toLocaleString();
};
