//API
import pagarme from "pagarme/browser";

export function cartCheckout(products) {
  return pagarme.client
    .connect({ api_key: process.env.REACT_APP_API_KEY })
    .then(client => client.transactions.all())
    .then(transactions => console.log("transactions", transactions))
    .catch(error => console.error(error));
}

export function connectClient() {
  return pagarme.client
    .connect({ api_key: process.env.REACT_APP_API_KEY })
    .then(client => client.transactions.all())
    .then(transactions => console.log("transactions", transactions))
    .catch(error => console.error(error));
}
