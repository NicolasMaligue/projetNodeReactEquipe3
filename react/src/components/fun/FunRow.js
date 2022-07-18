const FunRow = (props) => {

  const NestedComponent = props.nestedComponent;
  return (
    <tr>
        {<NestedComponent data={props.nestedData}/>}
      <td className="">
        <button className="btn btn-warning me-2">Modifier</button>
        <button className="btn btn-danger">Supprimer</button>
      </td>
    </tr>
  );
};

export default FunRow;
