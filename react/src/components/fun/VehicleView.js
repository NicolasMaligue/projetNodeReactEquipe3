import { useEffect, useState } from 'react';
import axios from 'axios';

const VehicleView = () => {
  const [vehicle, setVehicle] = useState([]);
  const api_path = "/vehicles/1";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setVehicle(response.data);
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
        <h1 className="mb-5">Informations sur le véhicule</h1>

        <table class="table table-responsive table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col" colSpan="2">Détails</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="col-4">N° du véhicule</th>
              <td>{vehicle.id}</td>
            </tr>
            <tr>
              <th scope="row">Modèle</th>
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
            <tr>
              <th scope="row">En stock</th>
              <td>{vehicle.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VehicleView;