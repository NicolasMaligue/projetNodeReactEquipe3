import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const api_path = "/orders";

  // same as componentDidMount() only => the key is [] 
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setOrders(response.data);
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
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>1392</td>
                  <td>
                    <a href="/">James Yates</a>
                  </td>
                  <td>
                    Web Designer
                    <small className="d-block">
                      Far far away, behind the word mountains
                    </small>
                  </td>
                  <td>+63 983 0962 971</td>
                  <td>
                    <a href="/" className="btn btn-success">
                      Accepted
                    </a>
                  </td>
                  <td>Very High</td>
                  <td>
                    <a href="/" className="more">
                      Details
                    </a>
                  </td>
                </tr>
              ))}

              <tr>
                <td>1392</td>
                <td>
                  <a href="/">James Yates</a>
                </td>
                <td>
                  Web Designer
                  <small className="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+63 983 0962 971</td>
                <td>
                  <a href="/" className="btn btn-warning">
                    Pending
                  </a>
                </td>
                <td>High</td>
                <td>
                  <a href="/" className="more">
                    Details
                  </a>
                </td>
              </tr>
              <tr>
                <td>1392</td>
                <td>
                  <a href="/">James Yates</a>
                </td>
                <td>
                  Web Designer
                  <small className="d-block">
                    Far far away, behind the word mountains
                  </small>
                </td>
                <td>+63 983 0962 971</td>
                <td>
                  <a href="/" className="btn btn-danger">
                    Refused
                  </a>
                </td>
                <td>Non prioritaire</td>
                <td>
                  <a href="/" className="more">
                    Details
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
