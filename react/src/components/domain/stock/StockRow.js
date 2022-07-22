import FunActions from "../../fun/FunActions";
import axios from 'axios';

const StockRow = (props) => {
  const id = props.stock.id;
  const api_path = `/stocks`

const onDelete = () => {
  axios
  .delete(`${api_path}/${id}`)
  .then(() => {
    console.log('DELETE GOOD');
  })
  .catch(() => {
    console.log('DELETE FAILED');
  });
  const stoks_copy = [...props.stoks]
  stoks_copy.splice(props.index, 1)
  props.setStocks(stoks_copy)
  console.log(stoks_copy);
}

  return (
    <tr>
      <td>{props.stock.id}</td>
      <td>{props.stock.quantity}</td>
      {/* <td>{props.vehicle.manufacturer}</td>
      <td>{price} €</td> */}
      <td>
        <FunActions id={id} onDelete={onDelete} />
      </td>
    </tr>
  );
};

export default StockRow;
