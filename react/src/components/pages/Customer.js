import { Component } from "react";

class Customer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <form className="row g-3">
          <div className="col-md-6">
            <label for="inputName" className="form-label">Name</label>
            <input type="" className="form-control" id="inputName" />
          </div>
          <div className="col-md-6">
            <label for="inputSurname" className="form-label">Surname</label>
            <input type="" className="form-control" id="inputSurname" />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-md-8">
            <label for="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label for="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-md-6">
            <label for="inputPhone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="inputPhone" />
          </div>
          <div className="col-md-6">
            <label for="inputMobile" className="form-label">Mobile</label>
            <input type="tel" className="form-control" id="inputMobile" />
          </div>
          <div class="col-md-4">
            <label for="inputUser" class="form-label">User</label>
            <select id="inputUser" class="form-select">
              <option selected>Sélectionner le vendeur</option>
              <option>Vendeur 1</option>
              <option>Vendeur 2</option>
              <option>Vendeur 3</option>
            </select>
          </div>
        </form>
      </>
    )
  }
}

export default Customer;