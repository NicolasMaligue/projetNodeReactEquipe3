import React, { useState } from "react";
import PropTypes from 'prop-types';

async function loginUser(log) {
    return fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    })
      .then(data => data.json())
   }


export default function FunLogin( { setToken } ) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          email,
          password
        });
        setToken(token);
      }
    

    return (
        <form className="form-signin" onSubmit={handleSubmit}>
            <img className="mb-4" src="https://www.kindpng.com/picc/m/230-2305239_meme-vector-png-surprised-meme-face-transparent-png.png" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Connecte toi pour plus de fun</h1>
            <label htmlFor="inputEmail" className="sr-only">Identifiant</label>
            <input type="name" id="login" className="form-control" placeholder="Email address" required="" autoFocus="" onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required="" onChange={e => setPassword(e.target.value)}/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Envoyer</button>
        </form>
    );
}


FunLogin.propTypes = {
    setToken: PropTypes.func.isRequired
}