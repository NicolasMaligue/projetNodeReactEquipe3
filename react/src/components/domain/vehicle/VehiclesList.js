import { useEffect, useState } from "react";
import axios from "axios";
import VehicleRow from "./VehicleRow";
import {useNavigate} from 'react-router-dom';

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);
    const api_path = "/vehicles";
    const navigate = useNavigate();

    // same as componentDidMount() only => the key is []
    useEffect(() => {
        axios
        .get(api_path)
        .then((response) => setVehicles(response.data))
        .catch((error) => console.log(error));
    }, []);

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
                            <th scope="col">Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantité</th>
                            <th scope="col"><button className="btn btn-success me-2" onClick={() => navigate(`${api_path}/add`)}>Créer</button></th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles.map((vehicle, index) => {
                            return <VehicleRow key={index} vehicle={vehicle} index={index} vehicles={vehicles} setVehicles={setVehicles}/>;
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default VehiclesList;
