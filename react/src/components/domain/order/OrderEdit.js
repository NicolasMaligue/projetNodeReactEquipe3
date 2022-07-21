import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ApiContext } from "../../App";

const OrdersEdit = () => {
  const { id } = useParams(); // Unpacking and retrieve id
  const api = useContext(ApiContext);
  const [order, pending, error] = api.useApiEffect(`/orders/${id}`); // Custom Hook from context Api

  // check id type as int
  if (isNaN(id) || (parseFloat(id) | 0) !== parseFloat(id)) {
    // todo: do it better
    return <h1>OrdersEdit Error: param 'id' is not an integer</h1>;
  }

  const titre = <h1>OrderEdit</h1>;

  if (pending)
    return (
      <>
        {titre}
        <p>Chargement en cours...</p>
      </>
    );

  if (error)
    return (
      <>
        {titre}
        <p>{error.message}</p>
      </>
    );

  if (order)
    return (
      <>
        {titre}
        <p>{JSON.stringify(order)}</p>
      </>
    );

  return (
    <>
      {titre}
      <p> Le chargement des données va bientôt commencer </p>
    </>
  );
};

export default OrdersEdit;
