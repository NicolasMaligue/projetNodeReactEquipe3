import FunActions from "../../fun/FunActions";

const VehicleRow = (props) => {
  const price = Math.round(props.vehicle.price);
  const id = props.vehicle.id;

  return (
    <tr>
      <td>{props.vehicle.id}</td>
      <td>{props.vehicle.model}</td>
      <td>{props.vehicle.manufacturer}</td>
      <td>{props.vehicle.type}</td>
      <td>{props.vehicle.description}</td>
      <td>{price}€</td>
      <td>{props.vehicle.quantity}</td>
      <td>
        <FunActions id={id} />
      </td>
    </tr>
  );
};

export default VehicleRow;
