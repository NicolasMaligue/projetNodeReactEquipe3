import { useEffect, useState } from 'react';
import { axios } from 'axios';

const OrderDetail = () => {
  // const customer = order.quote.customer;
  // const vehicle = order.quote.vehicle;
  const [order, setOrder] = useState([]);
  const api_path = "/orders/1";

  // same as componentDidMount() only => the key is []
  useEffect(() => {
    axios
      .get(api_path)
      .then(function (response) {
        // handle success
        console.log("response.data =>", response.data);
        setOrder(response.data);
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
        <h1 className="mb-5">Informations sur la commande</h1>
        <div className="row g-3">
          <div className="col-md-3">
            <h3 className="">N° de commande</h3>
            <p className="" id="">5</p>
            <p className="" id="">{order.id}</p>
          </div>
          <div className="col-md-3">
            <h3 className="">Date de la commande</h3>
            <p className="" id="">13/07/2022</p>
          </div>
          <div className="col-md-3">
            <h3 className="">N° du devis</h3>
            <p className="" id="">4</p>
          </div>
          <div className="col-md-3">
            <h3 className="">Priorité</h3>
            <p className="" id="">Urgent</p>
          </div>

          <div className="col-md-4">
            <h3 className="">Nom Prénom</h3>
            <p className="" id="">Dupont George</p>
          </div>
          <div className="col-md-4">
            <h3 className="">Adresse</h3>
            <p className="" id="">rue du paradis, 34000 Montepellier</p>
          </div>
          <div className="col-md-4">
            <h3 className="">Téléphone</h3>
            <p className="" id="">0123456789</p>
          </div>

          <div className="col-md-3">
            <h3 className="">Model du véhicule</h3>
            <p className="" id="">Clio</p>
          </div>
          <div className="col-md-2">
            <h3 className="">Marque</h3>
            <p className="" id="">Renault</p>
          </div>
          <div className="col-md-2">
            <h3 className="">Type</h3>
            <p className="" id="">Berline</p>
          </div>
          <div className="col-md-3">
            <h3 className="">Description</h3>
            <p className="" id="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-md-2">
            <h3 className="">Prix</h3>
            <p className="" id="">14000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;