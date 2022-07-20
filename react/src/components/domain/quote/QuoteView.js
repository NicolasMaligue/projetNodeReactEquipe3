import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const QuoteView = () => {
  const [quote, setQuote] = useState([]);
  const [creator, setCreator] = useState([]);
  const [customer, setCustomer] = useState({});
  const [vehicle, setVehicle] = useState({});
  const { id } = useParams(); // Unpacking and retrieve id
  const api_path = `/quotes/${id}`;

  const date_created_quote = new Date(quote.createdAt);
  const date_updated_quote = new Date(quote.updatedAt);

  console.log("QuoteView: id: ", id);

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then((response) => {
        console.log("QuoteView: data api : ", response.data);
        setQuote(response.data);
        setCreator(response.data.creator);
        setCustomer(response.data.customer);
        setVehicle(response.data.vehicle);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="content">
      <div className="container">
        <h1 className="mb-5">Informations sur le devis</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">N° du devis</th>
              <td>{quote.id}</td>
            </tr>
            <tr>
              <th scope="row">Date du devis</th>
              <td>{date_created_quote.toLocaleDateString()}</td>
            </tr>
            <tr>
              <th scope="row">Date de clôture du devis</th>
              <td>{date_updated_quote.toLocaleDateString()}</td>
            </tr>
            <tr>
              <th scope="row">Statut</th>
              <td>{quote.status}</td>
            </tr>
            <tr>
              <th scope="row">Créateur du devis</th>
              <td>{creator.lastname} {creator.firstname}</td>
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
              <td>{customer.lastname} {customer.firstname}</td>
            </tr>
            <tr>
              <th scope="row">Adresse</th>
              <td>{customer.address}, {customer.zip} {customer.city}</td>
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
              <th scope="row" colSpan="2">Informations Véhicule</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">Modèle</th>
              <td>{vehicle.model}</td>
            </tr>
            <tr>
              <th scope="row">Marque</th>
              <td>{vehicle.manufacturer}</td>
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
};

export default QuoteView;
