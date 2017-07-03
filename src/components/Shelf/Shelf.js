import React, { Component } from 'react';


class Shelf extends Component {
    constructor(props) {
        super(props);
        this.onAddItemToCart = this.onAddItemToCart.bind(this);
        this.onRemoveItemFromCart = this.onRemoveItemFromCart.bind(this);
        this.state = {
            shelfItems: [
                {id: 1, type: 'shampoo'},
                {id: 2, type: 'chocolate'},
                {id: 3, type: 'yogurt'},
            ]
        }
    }
    onAddItemToCart(item) {
        this.props.addItem(item);
    }
    onRemoveItemFromCart(item) {
        this.props.removeItem(item);
    }
    render() {
        const shelfItems = this.state.shelfItems.map((item, idx) => {
            return <li key={idx}>
                        {item.type}
                        <button onClick={() => this.onAddItemToCart(item)}>[+]</button>
                        <button onClick={() => this.onRemoveItemFromCart(item)}>[-]</button>
                    </li>
        });
        return (
            <div>
                <h2>Store Shelf:</h2>
                <ul>
                    {shelfItems}
                </ul>
            </div>
        );
    }
}

export default  Shelf;