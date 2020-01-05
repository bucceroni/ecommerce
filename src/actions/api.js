import pagarme from "pagarme/browser";

export function cartCheckout(products) {
  let amount =
    products.reduce((acc, cur) => acc + cur.total * cur.price, 0) * 100;

  let items = products.map(product => {
    return {
      id: JSON.stringify(product.id),
      title: product.name,
      unit_price: product.price * 100,
      quantity: product.total,
      tangible: true
    };
  });
  let split_rules = [
    {
      recipient_id: products[0].storeId,
      percentage: 85,
      liable: true,
      charge_processing_fee: true
    },
    {
      recipient_id: "re_ck50fwlpt08fq0e6dz521cqlc",
      percentage: 15,
      liable: false,
      charge_processing_fee: false
    }
  ];

  return pagarme.client
    .connect({ api_key: process.env.REACT_APP_API_KEY })
    .then(client =>
      client.transactions.create({
        amount,
        card_number: "4111111111111111",
        card_cvv: "123",
        card_expiration_date: "0922",
        card_holder_name: "Morpheus Fishburne",
        customer: {
          external_id: "#3311",
          name: "Morpheus Fishburne",
          type: "individual",
          country: "br",
          email: "mopheus@nabucodonozor.com",
          documents: [
            {
              type: "cpf",
              number: "30621143049"
            }
          ],
          phone_numbers: ["+5511999998888", "+5511888889999"],
          birthday: "1965-01-01"
        },
        billing: {
          name: "Trinity Moss",
          address: {
            country: "br",
            state: "sp",
            city: "Cotia",
            neighborhood: "Rio Cotia",
            street: "Rua Matrix",
            street_number: "9999",
            zipcode: "06714360"
          }
        },
        shipping: {
          name: "Neo Reeves",
          fee: 1000,
          delivery_date: "2000-12-21",
          expedited: true,
          address: {
            country: "br",
            state: "sp",
            city: "Cotia",
            neighborhood: "Rio Cotia",
            street: "Rua Matrix",
            street_number: "9999",
            zipcode: "06714360"
          }
        },
        items,
        split_rules
      })
    )
    .then(transaction => transaction)
    .catch(error => console.error(error));
}

export function cartPayables(id) {
  return pagarme.client
    .connect({ api_key: process.env.REACT_APP_API_KEY })
    .then(client =>
      client.payables.find({
        transactionId: JSON.stringify(id)
      })
    )
    .then(payables => payables)
    .catch(error => console.error(error));
}
