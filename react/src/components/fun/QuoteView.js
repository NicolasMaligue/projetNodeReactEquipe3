import { useEffect, useState } from 'react';
import axios from 'axios';

const QuoteView = () => {
  const [quote, setQuote] = useState([]);
  const api_path = "/quotes/1";
  const date_created_quote = new Date(quote.createdAt);
  const date_updated_quote = new Date(quote.updatedAt);
  // const customer = quote.customer;
  // const vehicle = quote.vehicle;

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setQuote(response.data);
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
              {/* <td>{quote.creator.lastname} {quote.creator.firstname}</td> */}
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
              <th scope="row">Prix</th>
              {/* <td>{vehicle.price} €</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuoteView;