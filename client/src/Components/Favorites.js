import React, {useEffect, useState} from 'react';

import FavoriteShopCard from './FavoriteShopCard';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Favorites({user}){

    const [favShops, setFavShops] = useState([]);

    useEffect(() => {
        fetch("/favorite_shops").then((r) => {
          if (r.ok) {
            r.json().then((favoriteShopData) => {setFavShops(favoriteShopData);
                console.log(favShops);
            });
          }
        });
      }, []);

    function afterDelete(){
        fetch("/favorite_shops")
          .then((r) => r.json())
          .then((favoriteShopData) => {setFavShops(favoriteShopData);});
    }

    let filteredFavs = null;

    let displayFavorites = null;

    if(!user){
        console.log("No user");
    }else{
        filteredFavs = favShops.filter((favShop) => favShop.user_id === user.id);
        displayFavorites = filteredFavs.map(fav => <FavoriteShopCard afterDelete={afterDelete} id={fav.id} name={fav.shop.name} phone_number={fav.shop.phone_number} address={fav.shop.address} />)
    }

    setTimeout(console.log(favShops), 5000)

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