import { useEffect, useState } from "react";
import axios from "axios";
import Invoice from "../domain/Invoice";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);
    const api_path = "/invoices";

    // same as componentDidMount() only => the key is []
    useEffect(() => {
        axios
        .get(api_path)
        .then(function (response) {
            // handle success
            console.log("response.data =>", response.data);
            setInvoices(response.data);
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
                            <th scope="col">Invoice</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prénom</th>
                            <th scope="col">Véhicule</th>
                            <th scope="col">Date de création</th>
                            <th scope="col">Order</th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        <tbody>
                        {invoices.map((invoice, index) => {
                            return <Invoice key={index} invoice={invoice}/>;
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Invoices;
