const User = (props) => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.lastname}
      </td>
      <td>
        {props.user.firstname}
      </td>
      <td>{props.user.role}</td>
      <td>
        <a href="/" className="more">
          Details
        </a>
      </td>
    </tr>
  );
};

export default User;
