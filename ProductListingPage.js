import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/actions';  // You'll create the addToCart action

const plants = [
    { id: 1, name: 'Cactus', price: 10, category: 'Succulents', image: 'path_to_image' },
    { id: 2, name: 'Fern', price: 15, category: 'Indoor', image: 'path_to_image' },
    // Add more plant objects...
];

const ProductListingPage = () => {
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

    const handleAddToCart = (plant) => {
        dispatch(addToCart(plant));  // Dispatch action to add to cart
        setCart([...cart, plant]);  // Update local cart state
    };

    return (
        <div>
            <h2>Plants for Sale</h2>
            {plants.map(plant => (
                <div key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductListingPage;
