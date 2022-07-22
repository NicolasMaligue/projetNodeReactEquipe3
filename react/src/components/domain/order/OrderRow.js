import FunActions from "../../fun/FunActions";
import axios from "axios";

const OrderRow = (props) => {
  const customer = props.order.quote.customer;
  const vehicle = props.order.quote.vehicle;
  const id = props.order.id;
  const api_path = "/orders";

  const onDelete = () => {
    axios
      .delete(`${api_path}/${id}`)
      .then(() => {
        console.log("DELETE GOOD");
      })
      .catch(() => {
        console.log("DELETE FAILED");
      });
    const orders_copy = [...props.orders];
    orders_copy.splice(props.index, 1);
    props.setOrders(orders_copy);
    console.log(orders_copy);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        <a href="/">
          {customer.firstname} {customer.lastname}
        </a>
      </td>
      <td>
        {vehicle.manufacturer} {vehicle.model}
        {/* <small className="d-block">
                      Far far away, behind the word mountains
                    </small> */}
      </td>
      <td>{customer.mobile || customer.phone}</td>
      <td>
        <a href="/" className="btn btn-success">
          {props.order.quote.status}
        </a>
      </td>
      <td>{props.order.priority}</td>
      <td>
        <FunActions id={id} onDelete={onDelete} role={props.role} />
      </td>
    </tr>
  );
};

export default OrderRow;
