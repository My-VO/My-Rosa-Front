import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { AuthContext } from '../contexts/AuthContext';

const API = process.env.REACT_APP_API;

function Orders() {
  const { state: authState } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const getOrders = await axios(`${API}/orders`, {
        headers: { Authorization: `Bearer ${authState.token}` },
      });

      setOrders(getOrders.data);
    };
    fetchOrders();
  }, [authState]);

  return (
    <>
      <div>
        <h2>Mes commandes</h2>
        <div>
          {orders.map((order) => (
            <div key={order.orderId}>
              <div>
                <div>
                  <div>
                    <span>Ma commande du</span>
                    <br />
                    <span>{order.createdAt}</span>
                  </div>
                  <div>
                    <span>Montant Total</span>
                    <br />
                    <span>{parseFloat(order.priceTotal).toFixed(2)} €</span>
                  </div>
                  <div>
                    <span>N° de commande</span>
                    <br />
                    <span>{order.orderId}</span>
                  </div>
                </div>
                <div>
                  <h3>
                    {order.OrdersStatuses[0].Status.description
                      .charAt(0)
                      .toUpperCase() +
                      order.OrdersStatuses[0].Status.description.slice(1)}
                  </h3>
                  <div>
                    {order.OrderItems.map((orderItem) => (
                      <div key={orderItem.id}>
                        <div>
                          <img
                            src={orderItem.Item.PicturesItems[0].picture}
                            alt={orderItem.Item.name}
                          />
                        </div>
                        <div>
                          <h3>{orderItem.Item.name.toUpperCase()}</h3>
                          <p>
                            {orderItem.Item.variety}{' '}
                            {orderItem.Item.type
                              .toLowerCase()
                              .replace('4l/5l', '4L/5L')}
                          </p>
                          <p>
                            Prix: {parseFloat(orderItem.Item.price).toFixed(2)}
                          </p>
                          <p>Quantité: {parseFloat(orderItem.quantityOrder)}</p>
                          <p>
                            Total:{' '}
                            {parseFloat(orderItem.priceTotalItem).toFixed(2)} €
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
