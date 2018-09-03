import React from 'react';

class Table extends React.Component {

    returnMatchingWongles() {
        const matchingSuppliers = this.props.data.filter(wongle => {
            return wongle.supplier === this.props.supplier
        })
        const matchingProducts = this.props.data.filter(wongle => {
            return wongle.product === this.props.product
        })
        const matchingBoth = this.props.data.filter(wongle => {
            return wongle.product === this.props.product && wongle.supplier === this.props.supplier
        })

        if (this.props.supplier !== '' && this.props.product !== '') {return matchingBoth}
        else if (this.props.supplier === '') {return matchingProducts} 
        else {return matchingSuppliers}
    }

    render() {

        const wonglesList = this.returnMatchingWongles();
        const createWonglesTable = wonglesList.map((wongle, index) =>
            <tr key={index}>
                <td>{wongle.supplier}</td>
                <td>{wongle.product}</td>
                <td>{wongle.price}</td>
            </tr>
        );               
        
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>Supplier</th>
                            <th>Product</th>
                            <th>Price (£)</th>
                        </tr>
                        {createWonglesTable}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table