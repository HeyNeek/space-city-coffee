import React, {useEffect, useState} from 'react';

import ShopCard from './ShopCard';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Favorites({user}){

    if (!user) return <h2 id="favoritesExceptionH1">Sign in or create an account with us to save your favorite Coffee Shops!</h2>;

    return (
        <div>
            <Container id="favoritesContainer">
                <h1 id="favoritesH1">Your Favorites</h1>
                <Col>
                    <h1>Cards should go here</h1>
                </Col>
            </Container>
        </div>
    )
}

export default Favorites;