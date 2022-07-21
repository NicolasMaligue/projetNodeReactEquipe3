import FunActions from "../../fun/FunActions";
import axios from "axios";

const UserRow = (props) => {
  const id = props.user.id;
  const api_path = "/users";

  const onDelete = () => {
    axios
      .delete(`${api_path}/${id}`)
      .then(() => {
        console.log("DELETE GOOD");
      })
      .catch(() => {
        console.log("DELETE FAILED");
      });
    const users_copy = [...props.users];
    users_copy.splice(props.index, 1);
    props.setUsers(users_copy);
    console.log(users_copy);
  };

  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.firstname}</td>
      <td>{props.user.role}</td>
      <FunActions id={id} onDelete={onDelete} />
    </tr>
  );
};

export default UserRow;
