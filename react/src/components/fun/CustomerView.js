import { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerView = () => {
  const [customer, setCustomer] = useState([]);
  const api_path = "/customers/1";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then((response) => {
        // handle success
        console.log("response.data =>", response.data);
        setCustomer(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  }, []);


  return (
    <div className="content">
      <div className="container">
        <h1 className="mb-5">Informations sur le client</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">N° Client</th>
              <td>{customer.id}</td>
            </tr>
            <tr>
              <th scope="row">Nom</th>
              <td>{customer.lastname}</td>
            </tr>
            <tr>
              <th scope="row">Prénom</th>
              <td>{customer.firstname}</td>
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              <td>{customer.address}</td>
            </tr>
            <tr>
              <th scope="row">Code postal</th>
              <td>{customer.zip}</td>
            </tr>
            <tr>
              <th scope="row">Ville</th>
              <td>{customer.city}</td>
            </tr>
            <tr>
              <th scope="row">Téléphone</th>
              <td>{customer.phone}</td>
            </tr>
            <tr>
              <th scope="row">Mobile</th>
              <td>{customer.mobile}</td>
            </tr>
            <tr>
              <th scope="row">Fiche créée par</th>
              {/* <td>{customer.creator.lastname} {customer.creator.firstname}</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerView;