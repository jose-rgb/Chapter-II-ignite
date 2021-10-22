import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';


//routes fake api
createServer({
  //db fake do miraje
  models: {
    transaction: Model,
  },

  //para db n comecar vazio
  seeds(server) {
    server.db.loadData({
      //nome do model no plural
      transactions: [
        {
          id: 1,
          title: 'Dev de gamer',
          type: 'deposit',
          category: 'dev',
          amount: 60000,
          createdAt: new Date('2021-10-20 09:00:00'),
        },
        {
          id: 2,
          title: 'aluguel',
          type: 'withdrawal',
          category: 'despesas',
          amount: 1000,
          createdAt: new Date('2021-10-23 09:00:00'),
        }
      ],
    })
  },


  routes() {
    this.namespace = 'api';

    //listar todos
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    // criar transaction
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)

      //dois args, o model e os dados
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

