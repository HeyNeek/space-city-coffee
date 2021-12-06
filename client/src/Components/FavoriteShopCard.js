import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function FavoriteShopCard({id, name, phone_number, address}){

    function deleteFavorite(){
        fetch(`/favorite_shops/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        window.location.reload(false);
    }

    return (
        <>
            <Card className="shopCards" bg="dark" text="white">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ({phone_number.substr(0,3)}) {phone_number.substr(3,3)}-{phone_number.substr(6,10)}
                        <br/>
                        {address}
                    </Card.Text>
                    <Button variant="danger" onClick={deleteFavorite} >Remove from favorites</Button>
                </Card.Body>
            </Card>
        <br/>
        </>
    )
}

export default FavoriteShopCard;