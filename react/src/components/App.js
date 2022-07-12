import '../App.css';
import Order from './pages/Order';
import Nav from './Nav';
import {Route, Routes} from 'react-router-dom';
import Quote from './pages/Quote';
import Invoice from './pages/Invoice';
import Customer from './pages/Customer';
import React from 'react';

const App = () => {
  return (
      <html lang="fr">
      <head>
        <meta charset="utf-8"/>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#000000"/>
        <meta
            name="description"
            content="La dream Team"
        />
        <title>React App</title>
      </head>
      <body>
      <Routes>
        <Route path="/" element={<Nav/>}/>
        <Route path="/quote" element={<Quote/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/customer" element={<Customer/>}/></Routes>
      </body>
      </html>
  );
}

export default App;
