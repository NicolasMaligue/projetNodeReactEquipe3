import OrderRow from "./OrderRow";
import { useNavigate } from "react-router-dom";
import { useApiEffect } from "../../hook/useApi";

const OrdersList = () => {
  const api_path = "/orders";
  const [orders, setOrders /*, pending, error*/] = useApiEffect(api_path); // Custom Hook useApi
  const navigate = useNavigate();

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
                <th scope="col">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => navigate(`${api_path}/add`)}
                  >
                    Créer
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                return (
                  <OrderRow
                    key={index}
                    order={order}
                    index={index}
                    orders={orders}
                    setOrders={setOrders}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};;

export default OrdersList;
