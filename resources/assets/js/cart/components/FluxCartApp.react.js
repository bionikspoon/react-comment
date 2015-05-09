import React from 'react';
import CartStore from '../stores/CartStore';
import ProductStore from '../stores/ProductStore';
import FluxProduct from './FluxProduct.react';
import FluxCart from './FluxCart.react';

const _getState = () => ({
    product:         ProductStore.product,
    selectedProduct: ProductStore.selected,
    cartItems:       CartStore.cartItems,
    cartCount:       CartStore.cartCount,
    cartTotal:       CartStore.cartTotal,
    cartVisibility:  CartStore.cartVisibility
});

export default class FluxCartApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = _getState();
        this._onChange = this._onChange.bind(this)

    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onChange);
        CartStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onChange);
        CartStore.removeChangeListener(this._onChange);
    }


    render() {
        return (
            <div className="flux-cart-app">
                <FluxCart products={this.state.cartItems}
                          count={this.state.cartCount}
                          total={this.state.cartTotal}
                          visible={this.state.cartVisibility} />

                <FluxProduct product={this.state.product}
                             cartitems={this.state.cartItems}
                             selected={this.state.selectedProduct} />
                <h1>Hello Cart App</h1>
            </div>
        );
    }

    _onChange() {
        this.setState(_getState());
    }
}
FluxCartApp.defaultProps = {};
FluxCartApp.propTypes = {};

let App = React.createClass({

    getInitialState() {
        return {
            tasks: []
        }
    },

    _onChange() {
        this.setState(TodoStore.getAll());
    },

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    },

    handleAddNewClick(e) {
        let title = prompt('Enter task title:');
        if (title) {
            ActionCreator.addItem(title);
        }
    },

    handleClearListClick(e) {
        ActionCreator.clearList();
    },

    render() {
        let {tasks} = this.state;
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Learning Flux</h1>

                    <p>
                        Below is a list of tasks you can implement to better
                        grasp the patterns behind Flux.<br />
                        Most features are left unimplemented with clues to guide
                        you on the learning process. </p>
                </Jumbotron>

                <TaskList tasks={tasks} />

                <Button onClick={this.handleAddNewClick}
                        bsStyle="primary">Add New</Button>
                <Button onClick={this.handleClearListClick}
                        bsStyle="danger">Clear List</Button>
            </div>
        );
    }

});

