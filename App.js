import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/products" component={ProductListingPage} />
                <Route path="/cart" component={ShoppingCartPage} />
            </Switch>
        </Router>
    );
};

export default App;
