const FunRow = (props) => {

  const NestedComponent = props.nestedComponent;
  return (
    <tr>
        {<NestedComponent data={props.nestedData}/>}
      <td>
        <a href="/" className="more">
          Details
        </a>
      </td>
    </tr>
  );
};

export default FunRow;
