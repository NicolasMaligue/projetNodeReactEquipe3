import { useContext, useEffect } from "react";
import { ApiContext } from "../../App";
import UserRow from "./UserRow";

const UsersList = () => {
  // Custom hook api.useApi
  const api = useContext(ApiContext);
  const [users/*, pending, error*/] = api.useApiEffect(`/users`);

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Utilisateurs</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Rôle</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return <UserRow key={index} user={user} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
