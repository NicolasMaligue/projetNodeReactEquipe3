const Quote = (props) => {
  const create_date = new Date(props.quote.createdAt);
  return (
    <tr>
      <td>{props.quote.id}</td>
      <td>{props.quote.customer.firstname} {props.quote.customer.lastname} </td>
      <td>{props.quote.vehicle.model} {props.quote.vehicle.manufacturer}</td>
      <td>{create_date.toLocaleDateString()}</td>
      <td>
        <a href="/" className="btn btn-warning">
          {props.quote.status}
        </a>
      </td>
      <td>
        <a href="/" className="more">
          Details
        </a>
      </td>
    </tr>
  );
};

export default Quote;
