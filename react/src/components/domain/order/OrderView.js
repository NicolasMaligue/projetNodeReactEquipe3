import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const OrderView = () => {
  const [order, setOrder] = useState({});
  const { id } = useParams(); // Unpacking and retrieve id
  const api_path = `/orders/${id}`;

  console.log("OrderView: id: ", id);

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then((response) => {
        console.log("OrderView: data api : ", response.data);
        setOrder(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return <h1>OrderView</h1>;
};

export default OrderView;
