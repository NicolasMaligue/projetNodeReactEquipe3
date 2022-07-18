const Vehicle = (props) => {

    const price = Math.round(props.vehicle.price);

    return (
        <tr>
            <td>{props.vehicle.id}</td>
            <td>{props.vehicle.model}</td>
            <td>{props.vehicle.manufacturer}</td>
            <td>{props.vehicle.type}</td>
            <td>{props.vehicle.description}</td>
            <td>{price}€</td>
            <td>{props.vehicle.quantity}</td>
            <td>
                <a href="/" className="more">
                    Details
                </a>
            </td>
        </tr>
    );
};

export default Vehicle;
