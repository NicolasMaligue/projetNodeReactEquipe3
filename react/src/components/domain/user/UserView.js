import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const UserView = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams(); // Unpacking and retrieve id
  const api_path = `/users/${id}`;

  console.log("UserView: id: ", id);

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then((response) => {
        console.log("UserView: data api : ", response.data);
        setUser(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <h1 className="mb-5">Informations sur l'utilisateur</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">Identifiant de l'utilisateur</th>
              <td>{user.id}</td>
            </tr>
            <tr>
              <th scope="row">Nom</th>
              <td>{user.lastname}</td>
            </tr>
            <tr>
              <th scope="row">Prénom</th>
              <td>{user.firstname}</td>
            </tr>
            <tr>
              <th scope="row">Rôle</th>
              <td>{user.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserView;
