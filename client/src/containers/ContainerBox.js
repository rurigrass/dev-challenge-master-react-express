import React from 'react';
import DropDowns from '../components/DropDowns';
import Table from '../components/Table';


class ContainerBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            supplier: '',
            product: '',
            wongles: []
        }
        this.selectSupplier = this.selectSupplier.bind(this)
        this.selectProduct = this.selectProduct.bind(this)
    }

    componentDidMount() {
        fetch('/wongles')
        .then(res => res.json())
        .then(wongles => this.setState({wongles}))
    }

    selectSupplier(selectedSupplier) {
        this.setState({ supplier: selectedSupplier })
    }

    selectProduct(selectedProduct) {
        this.setState({ product: selectedProduct })
    }

    render() {

        return (
            <div>
                <h1>Product pricing</h1>
                <DropDowns
                    data={this.state.wongles}
                    onSupplierChange={this.selectSupplier}
                    onProductChange={this.selectProduct} />
                <Table
                    data={this.state.wongles}
                    supplier={this.state.supplier}
                    product={this.state.product}
                />
            </div>
        )
    }
};

export default ContainerBox