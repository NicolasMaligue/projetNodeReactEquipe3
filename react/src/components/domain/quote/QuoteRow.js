import FunActions from "../../fun/FunActions";

const QuoteRow = (props) => {
  const create_date = new Date(props.quote.createdAt);
  const id = props.quote.id;

  return (
    <tr>
      <td>{props.quote.id}</td>
      <td>
        {props.quote.customer.firstname} {props.quote.customer.lastname}{" "}
      </td>
      <td>
        {props.quote.vehicle.model} {props.quote.vehicle.manufacturer}
      </td>
      <td>{create_date.toLocaleDateString()}</td>
      <td>
        <a href="/" className="btn btn-warning">
          {props.quote.status}
        </a>
      </td>
      <td>
        <FunActions id={id} />
      </td>
    </tr>
  );
};

export default QuoteRow;
