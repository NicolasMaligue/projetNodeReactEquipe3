import { useEffect, useState } from "react";
import axios from "axios";
import Customer from "../domaine/Customer";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const api_path = "/customers";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setCustomers(response.data);
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
        <h2 className="mb-5">Clients</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">Customer</th>
                <th scope="col">Nom</th>
                <th scope="col">Prénom</th>
                <th scope="col">Adresse</th>
                <th scope="col">Code postale</th>
                <th scope="col">Ville</th>
                <th scope="col">Contact</th>
                <th scope="col">Créateur</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => {
                return (
                  <Customer key={index} customer={customer} />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customers;
