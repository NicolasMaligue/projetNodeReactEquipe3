import { useEffect, useState } from "react";
import axios from "axios";
import Order from "../domaine/Order";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const api_path = "/orders";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setOrders(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Commandes</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Customer</th>
                <th scope="col">Vehicle</th>
                <th scope="col">Contact</th>
                <th scope="col">Status</th>
                <th scope="col">Priority</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return <Order key={index} order={order}/>;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
