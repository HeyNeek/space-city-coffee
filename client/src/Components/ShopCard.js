import React, {useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css';

function ShopCard({user, setMapState, location_link, shop_id, name, phone_number, address}){

    const [show, setShow] = useState(false);

    function favoriteHandler(){
        console.log(shop_id);
        console.log(user.id);

        fetch("/favorite_shops", {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({ user_id:user.id, 
              shop_id:shop_id}),
        })

        setShow(true);
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
                    {show ? <><br/><Alert variant="success" onClose={() => setShow(false)} dismissible><Alert.Heading>Added to favorites!</Alert.Heading></Alert></> : null}
                </Card.Body>
            </Card>
        <br/>
        </>
    )
}

export default ShopCard;