import { useEffect, useState } from "react";
import axios from "axios";
import Vehicle from "../domain/Vehicle";

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([]);
    const api_path = "/vehicles";

    // same as componentDidMount() only => the key is []
    useEffect(() => {
        axios
        .get(api_path)
        .then(function (response) {
            // handle success
            console.log("response.data =>", response.data);
            setVehicles(response.data);
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
                            return <Vehicle key={index} vehicle={vehicle}/>;
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Vehicles;
