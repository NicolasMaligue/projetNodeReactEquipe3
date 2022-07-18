const Order = (props) => {
  const order = props.data;
  const customer = order.quote.customer;
  const vehicle = order.quote.vehicle;
  return (
    <tr>
      <td>{order.id}</td>
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
          {order.quote.status}
        </a>
      </td>
      <td>{order.priority}</td>
      <td>
        <a href="/" className="more">
          Details
        </a>
      </td>
    </tr>
  );
};

export default Order;
