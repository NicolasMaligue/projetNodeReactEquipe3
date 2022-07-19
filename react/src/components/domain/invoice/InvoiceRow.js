import FunActions from "../../fun/FunActions";
const InvoiceRow = (props) => {
  const date = new Date(props.invoice.createdAt);
  const id = props.invoice.id;

  return (
    <tr>
      <td>{props.invoice.id}</td>
      <td>{props.invoice.order.quote.customer.lastname}</td>
      <td>{props.invoice.order.quote.customer.firstname}</td>
      <td>
        {props.invoice.order.quote.vehicle.model}{" "}
        {props.invoice.order.quote.vehicle.manufacturer}
      </td>
      <td>{date.toLocaleDateString()}</td>
      <td>{props.invoice.orderId}</td>
      <FunActions id={id} />
    </tr>
  );
};

export default InvoiceRow;
