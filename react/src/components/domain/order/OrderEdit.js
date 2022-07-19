import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const OrdersEdit = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams(); // Unpacking and retrieve id
  const api_path = `/orders/${id}`;

  console.log("OrdersEdit: id: ", id);

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then((response) => {
        console.log("OrdersEdit: data api : ", response.data);
        setOrder(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // check id type as int
  if (isNaN(id) || (parseFloat(id) | 0) !== parseFloat(id)) {
    // todo: do it better
    return <h1>OrdersEdit Error: param 'id' is not an integer</h1>;
  }

  return <h1>OrderEdit</h1>;
};

export default OrdersEdit;
