import FunActions from "../../fun/FunActions";

const UserRow = (props) => {
  const id = props.user.id;

  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.firstname}</td>
      <td>{props.user.role}</td>
      <FunActions id={id} />
    </tr>
  );
};

export default UserRow;
