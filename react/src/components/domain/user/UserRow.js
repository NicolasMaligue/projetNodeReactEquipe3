import FunActions from "../../fun/FunActions";
import FunActionActiveUser from "../../fun/FunActionActiveUser.js";
import { ENUM } from "../../../config/enum.config.js";

const UserRow = (props) => {
  const id = props.user.id;
  const login_role = "Administrateur"; //hack without role from login
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.firstname}</td>
      <td>{props.user.role}</td>
      <td>
        <FunActions id={id} />
        {login_role === ENUM.user.role.admin && (
          <FunActionActiveUser user={props.user} />
        )}
      </td>
    </tr>
  );
};;

export default UserRow;
