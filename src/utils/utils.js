import moment from "moment";

import "moment/locale/ru";
import "moment/locale/en-gb";

export const parseCurrencies = (currency) => {
  if (currency === "BTC") return "bitcoin";
  else if (currency === "ETH") return "ethereum";
  else if (currency === "USD") return "usd";
};

export const parseTimestamp = (timestamp) => {
  return moment.unix(timestamp).format("MM/DD/YYYY");
};
