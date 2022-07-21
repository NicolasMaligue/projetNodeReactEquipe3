import { useContext, useEffect } from "react";
import { ApiContext } from "../../App";
import VehicleRow from "./VehicleRow";

const VehiclesList = () => {
  // Custom hook api.useApi
  const api = useContext(ApiContext);
  const [vehicles /*, pending, error*/] = api.useApiEffect(`/vehicles`);

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Factures</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">Véhicule</th>
                <th scope="col">Modèle</th>
                <th scope="col">Marque</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Prix</th>
                <th scope="col">Quantité</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => {
                return <VehicleRow key={index} vehicle={vehicle} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehiclesList;
