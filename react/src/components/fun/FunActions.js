import { useNavigate, useLocation } from "react-router-dom";

const FunActions = (props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id = props.id;

  return (
    <>
      <button
        className="btn btn-success me-2"
        onClick={() => navigate(`${pathname}/${id}/view`)}
      >
        Visualiser
      </button>
      <button
        className="btn btn-warning me-2"
        onClick={() => navigate(`${pathname}/${id}/edit`)}
      >
        Modifier
      </button>
      <button className="btn btn-danger" onClick={props.onDelete}>
        Supprimer
      </button>
    </>
  );
};

export default FunActions;
