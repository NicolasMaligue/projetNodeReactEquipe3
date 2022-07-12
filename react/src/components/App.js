import '../App.css';
import Nav from './Nav';

function App() {
  return(
      <html lang="fr">
        <head>
          <meta charset="utf-8" />
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="La dream Team"
          />
          <title>React App</title>
        </head>
        <body>
          <Nav />
        </body>
      </html>
  )
}

export default App;
