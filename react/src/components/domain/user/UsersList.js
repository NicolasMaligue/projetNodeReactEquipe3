import { useContext } from "react";
import { ApiContext } from "../../App";
import UserRow from "./UserRow";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const api_path = "/users";
    // Custom hook api.useApi
    const api = useContext(ApiContext);
    const [users, setUsers/*, pending, error*/] = api.useApiEffect(api_path);

  const navigate = useNavigate();

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
                <th scope="col">
                  <button
                    className="btn btn-success me-2"
                    onClick={() => navigate(`${api_path}/add`)}
                  >
                    Créer
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <UserRow
                    key={index}
                    user={user}
                    index={index}
                    users={users}
                    setUsers={setUsers}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
