import dayjs from "dayjs";
import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salário",
          type: "deposit",
          category: "Emprego",
          amount: 4000,
          createdAt: dayjs().format('DD-MM-YYYY'),
          isDeposit: true,
        },
        {
          id: 2,
          title: "Salário",
          type: "deposit",
          category: "Emprego",
          amount: 4000,
          createdAt: dayjs().format('DD-MM-YYYY'),
          isDeposit: true,
        },
      ],
    })
  },

  routes() {
    this.namespace = "api";

    this.get("/transections", () => {
      return this.schema.all('transaction')
    });

    this.post("/transections", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
