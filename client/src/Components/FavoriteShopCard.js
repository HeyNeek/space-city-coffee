import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';

function FavoriteShopCard({name, phone_number, address}){

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
                    <Button>Remove from favorites</Button>
                </Card.Body>
            </Card>
        <br/>
        </>
    )
}

export default FavoriteShopCard;