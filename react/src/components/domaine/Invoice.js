const Invoice = (props) => {

    const date = new Date(props.invoice.createdAt)

    return (
        <tr>
            <td>{props.invoice.id}</td>
            <td>
                {date.toLocaleDateString()}
            </td>
            <td>
                {props.invoice.orderId}
            </td>
            <td>
                <a href="/" className="more">
                    Details
                </a>
            </td>
        </tr>
    );
};

export default Invoice;
