import React, {useEffect, useState} from 'react';

import ShopCard from './ShopCard';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

function Shops({user}){

    const [shops, setShops] = useState([]);
    const [mapState, setMapState] = useState("https://maps.google.com/maps?q=Houston,%20TX&t=&z=11&ie=UTF8&iwloc=&output=embed");

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

      const displayShops = shops.map(shop => <ShopCard setMapState={setMapState} shop_id={shop.id} location_link={shop.location_link} user={user} name={shop.name} phone_number={shop.phone_number} address={shop.address} />)

    return (
        <div>
            <Container id="shopsContainer">
                <h1 id="shopsH1">Explore Local Coffee Shops</h1>
                <Row>
                <div id="googleMap" class="mapouter">
                    <div class="gmap_canvas">
                        <iframe  id="gmap_canvas" src={mapState} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <br/>
                        {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
                        {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
                    </div>
                </div>
                </Row>
                <Row>
                    <Col id="shopsColumn">
                        {displayShops}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Shops;