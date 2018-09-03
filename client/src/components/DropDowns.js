import React from 'react';

class Dropdowns extends React.Component {

    getSuppliersList() {
        const suppliers = this.props.data.map(value => value.supplier);
        const uniqueSuppliers = [...new Set(suppliers)];
        const uniqueSuppliersSorted = uniqueSuppliers.sort();
        return uniqueSuppliersSorted;
    }

    getProductsList() {
        const products = this.props.data.map(value => value.product);
        const uniqueProducts = [...new Set(products)];
        const uniqueProductsSorted = uniqueProducts.sort();
        return uniqueProductsSorted;
    }

    render() {
        const suppliersList = this.getSuppliersList()
        const supplierOptions = suppliersList.map((item) =>
            <option key={item}>{item}</option>
        );

        const productsList = this.getProductsList()
        const productOptions = productsList.map((item) =>
            <option key={item} value={item}>{item}</option>
        );

        return (
            <div>
                <span>Supplier </span>
                <select onChange={event => this.handleSupplierChange(event.target.value)}>
                    <option value=""></option>
                    {supplierOptions}
                </select>
                <span> Product </span>
                <select onChange={event => this.handleProductChange(event.target.value)}>
                    <option value=""></option>
                    {productOptions}
                </select>
            </div>
        )
    }

    handleSupplierChange(event) {
        this.props.onSupplierChange(event)
    }

    handleProductChange(event) {
        this.props.onProductChange(event)
    }

}

export default Dropdowns