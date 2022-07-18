const Invoice = (props) => {

    const date = new Date(props.invoice.createdAt)

    return (
        <tr>
            <td>{props.invoice.id}</td>
            <td>{props.invoice.order.quote.customer.lastname}</td>
            <td>{props.invoice.order.quote.customer.firstname}</td>
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
