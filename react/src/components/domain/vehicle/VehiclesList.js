import { useApiEffect } from "../../hook/useApi";
import VehicleRow from "./VehicleRow";
import { useNavigate } from "react-router-dom";

const VehiclesList = () => {
  const api_path = "/vehicles";
  // Custom hook useApi
  const [vehicles, setVehicles /*, pending, error*/] = useApiEffect(api_path);
  const navigate = useNavigate();

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Véhicules</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">Véhicule</th>
                <th scope="col">Modèle</th>
                <th scope="col">Marque</th>
                <th scope="col">Prix</th>
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
              {vehicles.map((vehicle, index) => {
                return (
                  <VehicleRow
                    key={index}
                    vehicle={vehicle}
                    index={index}
                    vehicles={vehicles}
                    setVehicles={setVehicles}
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

export default VehiclesList;
