import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import CommentForm from './CommentForm';
import CommentCard from './CommentCard';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';

function ShopDetails({user}){

    const [shop, setShop] = useState([]);
    const [comments, setComments] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`/shops/${id}`).then((response) => {
          if (response.ok) {
            response.json().then((shopData) => setShop(shopData));
          }
        });
      }, []);

      useEffect(() => {
        fetch("/comments").then((response) => {
          if (response.ok) {
            response.json().then((commentsData) => setComments(commentsData));
          }
        });
      }, []);

      function afterCommented(){
        fetch("/comments")
        .then((r) => r.json())
        .then((commentsData) => setComments(commentsData));
       }

      const displayComments = comments.filter((comment) => comment.shop_id === shop.id)

    return (
        <Container id="shopDetailContainer">
            <br/>
            <Row>
                <div id="shopDetailGoogleMap" class="mapouter">
                    <div class="gmap_canvas">
                        <iframe  id="shopDetailgmap_canvas" src={shop.location_link} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <br/>
                        {/* <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style> */}
                        {/* <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> */}
                    </div>
                </div>
            </Row>
            <Row><h1 id="shopDetailH1">{shop.name}</h1></Row>
            <Row><h2 className="shopDetails">Address: {shop.address}</h2></Row>
            <Row><a href={`tel:${shop.phone_number}`} className="shopDetails">Phone Number: {shop.phone_number}</a></Row>
            <Row><h1 id="reviewsH1">Reviews: </h1></Row>
            { user ? <Row><CommentForm user={user} shop_id={shop.id} afterCommented={afterCommented} /></Row>: <p id="commentFormException">Please login to leave a review.</p>}
            <Row>
                <Col>
                    {displayComments.map((comment) => {return <CommentCard key={comment.id} comment={comment}/>})}
                </Col>
            </Row>

        </Container>
    )
}

export default ShopDetails;