import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div style={{ backgroundImage: 'url(path_to_your_image)', height: '100vh', backgroundSize: 'cover', textAlign: 'center', color: 'white' }}>
            <h1>Houseplant Store</h1>
            <p>Bringing nature to your home with unique houseplants.</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
