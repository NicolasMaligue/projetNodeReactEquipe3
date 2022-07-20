import { useEffect, useState } from "react";
import axios from "axios";
import QuoteRow from "./QuoteRow";

const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);
  const api_path = "/quotes";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then((response) => setQuotes(response.data))
      .catch((error) => console.log(error));
  }, []);

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
