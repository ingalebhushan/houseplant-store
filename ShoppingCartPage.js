import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from './redux/actions';

const ShoppingCartPage = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>Increase</button>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>Decrease</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
            ))}
            <p>Total items: {totalItems}</p>
            <p>Total cost: ${totalCost}</p>
            <button>Checkout - Coming Soon</button>
            <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
        </div>
    );
};

export default ShoppingCartPage;
