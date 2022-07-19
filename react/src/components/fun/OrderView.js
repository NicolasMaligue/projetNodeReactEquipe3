import { useEffect, useState } from 'react';
import axios from 'axios';

const OrderDetail = () => {
  const [order, setOrder] = useState([]);
  const api_path = "/orders/1";

  const date_order = new Date(order.createdAt);
  console.log(order.quote);

  // const customer = order.quote.customer;
  // const vehicle = order.quote.vehicle;

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setOrder(response.data);
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
        <h1 className="mb-5">Informations sur la commande</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">N° de la commande</th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th scope="row">Date de la commande</th>
              <td>{date_order.toLocaleDateString()}</td>
            </tr>
            <tr>
              <th scope="row">N° du devis</th>
              {/* <td>{order.quote.id}</td> */}
            </tr>
            <tr>
              <th scope="row">Priorité</th>
              <td>{order.priority}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="row" colSpan="2">Informations Client</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">Nom et Prénom</th>
              {/* <td>{customer.lastname} {customer.firstname}</td> */}
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              {/* <td>{customer.address}, {customer.zip} {customer.city}</td> */}
            </tr>
            <tr>
              <th scope="row">Téléphone</th>
              {/* <td>{customer.mobile || customer.phone}</td> */}
            </tr>
          </tbody>
        </table>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="row" colSpan="2">Informations Véhicule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">Modèle</th>
              {/* <td>{vehicle.model}</td> */}
            </tr>
            <tr>
              <th scope="row">Marque</th>
              {/* <td>{vehicle.manufacturer}</td> */}
            </tr>
            <tr>
              <th scope="row">Type</th>
              {/* <td>{vehicle.type}</td> */}
            </tr>
            <tr>
              <th scope="row">Description</th>
              {/* <td>{vehicle.description}</td> */}
            </tr>
            <tr>
              <th scope="row">Prix</th>
              {/* <td>{vehicle.price} €</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetail;