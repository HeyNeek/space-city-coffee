import React, {useEffect, useState} from 'react';

import FavoriteShopCard from './FavoriteShopCard';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Favorites({user}){

    const [favShops, setFavShops] = useState([]);

    useEffect(() => {
        fetch("/users/1").then((r) => {
          if (r.ok) {
            r.json().then((userData) => {setFavShops(userData.shops);
                console.log(favShops);
            });
          }
        });
      }, []);

    const displayFavorites = favShops.map(shop => <FavoriteShopCard name={shop.name} phone_number={shop.phone_number} address={shop.address} />)

    if (!user) return <h2 id="favoritesExceptionH1">Sign in or create an account with us to save your favorite Coffee Shops!</h2>;

    return (
        <div>
            <Container id="favoritesContainer">
                <h1 id="favoritesH1">Your Favorites</h1>
                <Col>
                    {displayFavorites}
                </Col>
            </Container>
        </div>
    )
}

export default Favorites;