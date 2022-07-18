const Quote = (props) => {
  return (
    <tr>
      <td>{props.quote.id}</td>
      <td>{props.quote.customerId}</td>
      <td>{props.quote.vehicleId}</td>
      <td>{props.quote.creatorId}</td>
      <td>{props.quote.createdAt}</td>
      <td>{props.quote.updatedAt}</td>
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
