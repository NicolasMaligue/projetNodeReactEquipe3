const Customer = (props) => {
  return (
    <tr>
      <td>{props.customer.id}</td>
      <td>{props.customer.lastname}</td>
      <td>{props.customer.firstname}</td>
      <td>{props.customer.address}</td>
      <td>{props.customer.zip}</td>
      <td>{props.customer.city}</td>
      <td>{props.customer.mobile || props.customer.phone}</td>
      <td><a href="/">{props.customer.creator.firstname} {props.customer.creator.lastname}</a></td>
      {/* données créateur */}
      <td>
        <a href="/" className="more">
          Details
        </a>
      </td>
    </tr>
  );
};

export default Customer;
