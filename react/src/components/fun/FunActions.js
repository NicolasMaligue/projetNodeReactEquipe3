import { useNavigate, useLocation } from "react-router-dom";

const FunActions = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = props.id;

  return (
    <td className="">
      <button className="btn btn-info me-2" onClick={() => navigate(`${pathname}/${id}/view`)}>
        Visualiser
      </button>
      <button className="btn btn-primary me-2" onClick={() => navigate(`${pathname}/${id}/edit`)}>
        Modifier
      </button>
      <button className="btn btn-warning" onClick={props.onDelete}>
        Supprimer
      </button>
    </td>
  );
};

export default FunActions;
