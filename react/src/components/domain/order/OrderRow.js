import FunActions from "../../fun/FunActions";

const OrderRow = (props) => {
  const customer = props.order.quote.customer;
  const vehicle = props.order.quote.vehicle;
  const id = props.order.id;

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
      <FunActions id={id} />
    </tr>
  );
};

export default OrderRow;
