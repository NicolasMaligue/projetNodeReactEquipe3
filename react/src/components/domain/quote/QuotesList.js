import { useContext, useEffect } from "react";
import { ApiContext } from "../../App";
import QuoteRow from "./QuoteRow";

const QuotesList = () => {
  // Custom hook api.useApi
  const api = useContext(ApiContext);
  const [quotes /*, pending, error*/] = api.useApiEffect(`/quotes`);

  return (
    <div className="content">
      <div className="container">
        <h2 className="mb-5">Devis</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">N° de devis</th>
                <th scope="col">Client</th>
                <th scope="col">Véhicule</th>
                <th scope="col">Date du devis</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote, index) => {
                return <QuoteRow key={index} quote={quote} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuotesList;
