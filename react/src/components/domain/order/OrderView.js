import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "../../App";

const OrderView = async () => {
  const { id } = useParams(); // Unpacking and retrieve id

  const api = useContext(ApiContext);
  // Custom Hook from context Api
  const [quote, setQuote] = useState({});
  const [customer, setCustomer] = useState({});
  const [vehicle, setVehicle] = useState({});
  const [order /*, pending, error*/] = api.get(`/orders/${id}`);

  useEffect(() => {
    setQuote(order.quote);
    setCustomer(order.quote.customer);
    setVehicle(order.quote.vehicle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  // const quote = order.quote;
  // const customer = order.quote.customer;
  // const vehicle = order.quote.vehicle;

  const date_order = new Date(order.createdAt);

  // check id type as int
  // if (isNaN(id) || (parseFloat(id) | 0) !== parseFloat(id)) {
  //   // todo: do it better
  //   return <h1>OrdersEdit Error: param 'id' is not an integer</h1>;
  // }

  return (
    <div className="content">
      <div className="container">
        <h1 className="mb-5">Informations sur la commande</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">
                Détails
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">
                N° de la commande
              </th>
              <td>{order.id}</td>
            </tr>
            <tr>
              <th scope="row">Date de la commande</th>
              <td>{date_order.toLocaleDateString()}</td>
            </tr>
            <tr>
              <th scope="row">N° du devis</th>
              <td>{quote.id}</td>
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
              <th scope="row" colSpan="2">
                Informations Client
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">
                Nom et Prénom
              </th>
              <td>
                {customer.lastname} {customer.firstname}
              </td>
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              <td>
                {customer.address}, {customer.zip} {customer.city}
              </td>
            </tr>
            <tr>
              <th scope="row">Téléphone</th>
              <td>{customer.mobile || customer.phone}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="row" colSpan="2">
                Informations Véhicule
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">
                Modèle
              </th>
              <td>{vehicle.model}</td>
            </tr>
            <tr>
              <th scope="row">Marque</th>
              <td>{vehicle.manufacturer}</td>
            </tr>
            <tr>
              <th scope="row">Type</th>
              <td>{vehicle.type}</td>
            </tr>
            <tr>
              <th scope="row">Description</th>
              <td>{vehicle.description}</td>
            </tr>
            <tr>
              <th scope="row">Prix</th>
              <td>{vehicle.price} €</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};;

export default OrderView;
