
import { useState, useEffect } from "react";
import axios from "axios";
import FunRow from "./FunRow";

const FunList = (props) => {
  const [rows, setRows] = useState([]);


  console.log('props.api_path', props.api_path);

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(props.api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setRows(response.data);
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
        <h2 className="mb-5">Commandes</h2>
        <div className="table-responsive">
          <table className="table table-striped custom-table">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Customer</th>
                <th scope="col">Vehicle</th>
                <th scope="col">Contact</th>
                <th scope="col">Status</th>
                <th scope="col">Priority</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((data, index) => (
                <FunRow key={index} nestedComponent={props.nestedComponent} nestedData={data}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FunList;
