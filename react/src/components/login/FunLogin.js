import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// async function loginUser(log) {
//     return fetch('http://localhost:3001/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(log)
//     })
//       .then(data => data.json())
//    }


export default function FunLogin() {

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const [msg, setMsg] = useState('');
    // const history = useHistory();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(name + password);
          await axios.get('/logins', {
              identifier: name,
              password: password
          });
          // history.push("/dashboard");
      } catch (error) {
          if (error.response) {
              setMsg(error.response.data.msg);
          }
      }
    }
    

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <img className="mb-4" src="https://www.kindpng.com/picc/m/230-2305239_meme-vector-png-surprised-meme-face-transparent-png.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Connecte toi pour plus de fun</h1>
            <label htmlFor="inputEmail" className="sr-only">Identifiant</label>
            <input type="name" id="login" className="form-control" placeholder="Email address" required="" autoFocus="" onChange={e => setName(e.target.value)}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required="" onChange={e => setPassword(e.target.value)}/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Envoyer</button>
        </form>
    );
}


FunLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}