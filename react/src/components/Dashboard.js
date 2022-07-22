import { useContext } from "react";
import { ApiContext } from "./App";
import QuoteRow from "./domain/quote/QuoteRow";
import UserRow from "./domain/user/UserRow";

const Dashboard = () => {

    // const [roles, setRoles] = useState([]);

    // useEffect(() => {
    //     const roles = JSON.parse(localStorage.getItem('roles'));
    //     if (roles){
    //         setRoles(roles);
    //     } 
    //     else if(!roles){

    //     }

    const toto = "commercial";

    
  const api_path_quotes = "/quotes";
  // Custom hook api.useApi
  const api_quote = useContext(ApiContext);
  const [quotes, setQuotes] = api_quote.useApiEffect(api_path_quotes);
  const filtered_quote = quotes.filter((filter)=> {
    return filter.status == "En attente";
  });

  const api_path_user = "/users";
  // Custom hook api.useApi
  const api_user = useContext(ApiContext);
  const [users, setUsers] = api_user.useApiEffect(api_path_user);
  const filtered_user = users.filter((filter)=> {
    return filter.role == "Commercial";
  });
  console.log(filtered_user);
  
    if(toto === "commercial"){
        
        return (
            <div className="content">
                <div className="container">
                <h2 className="mb-5">Devis en attente</h2>
                <div className="table-responsive">
                    <table className="table table-striped custom-table">
                    <thead>
                        <tr>
                        <th scope="col">N° de devis</th>
                        <th scope="col">Client</th>
                        <th scope="col">Véhicule</th>
                        <th scope="col">Date du devis</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered_quote.map((quote, index) => {
                        return <QuoteRow key={index} index={index} quote={quote} quotes={quotes} setQuotes={setQuotes}/>;
                        })}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        );
    }
    if(toto === "patron"){
        
        return (
                
            <div className="content">
                <div className="container">
                <h2 className="mb-5">Gestion des Commerciaux</h2>
                <div className="table-responsive">
                    <table className="table table-striped custom-table">
                    <thead>
                        <tr>
                        <th scope="col">User</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Rôle</th>
                        <th scope="col">
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered_user.map((user, index) => {
                        return (
                            <UserRow
                            key={index}
                            user={user}
                            index={index}
                            users={users}
                            setUsers={setUsers}
                            />
                        );
                        })}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            );
    }
    if(toto === "administrateur"){
        
        return (
            <div className="content">
                <div className="container">
                <h2 className="mb-5">Gestion Utilisateurs</h2>
                <div className="table-responsive">
                    <table className="table table-striped custom-table">
                    <thead>
                        <tr>
                        <th scope="col">User</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Rôle</th>
                        <th scope="col">
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => {
                        return (
                            <UserRow
                            key={index}
                            user={user}
                            index={index}
                            users={users}
                            setUsers={setUsers}
                            />
                        );
                        })}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            );
    }
}

export default Dashboard;