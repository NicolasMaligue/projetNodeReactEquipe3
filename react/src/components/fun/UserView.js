import { useEffect, useState } from 'react';
import axios from 'axios';

const UserView = () => {
  const [user, setUser] = useState([]);
  const api_path = "/users/1";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
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