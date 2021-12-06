import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function ShopCard({user, setMapState, location_link, shop_id, name, phone_number, address}){

    function favoriteHandler(){
        console.log(shop_id);
        console.log(user.id);

        fetch("/favorite_shops", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({ user_id:user.id, 
              shop_id:shop_id}),
        })
    }

    function changeLocation(){
        setMapState(location_link);
    }

    return (
        <>
            <Card onClick={changeLocation} className="shopCards" bg="dark" text="white">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ({phone_number.substr(0,3)}) {phone_number.substr(3,3)}-{phone_number.substr(6,10)}
                        <br/>
                        {address}
                    </Card.Text>
                    {user ? <Button onClick={favoriteHandler}>Favorite</Button>: null}
                </Card.Body>
            </Card>
        <br/>
        </>
    )
}

export default ShopCard;