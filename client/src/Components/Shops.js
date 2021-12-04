import React, {useEffect, useState} from 'react';

import ShopCard from './ShopCard';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

function Shops({user}){

    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch("/shops").then((r) => {
          if (r.ok) {
            r.json().then((shopData) => {
                setShops(shopData);
                console.log(shops);
            });
          }
        });
      }, []);

      const displayShops = shops.map(shop => <ShopCard user={user} name={shop.name} phone_number={shop.phone_number} address={shop.address} />)

    return (
        <div>
            <Container id="shopsContainer">
                <h1 id="shopsH1">Explore Local Coffee Shops</h1>
                <Row>
                    <Col>
                        {displayShops}
                    </Col>
                    <Col>
                        <h1>Map should be here</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shops;