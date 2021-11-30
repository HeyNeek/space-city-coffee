import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import coffeeBoi from '../coffeeBoi.gif';
import people from '../people.jpeg'
import skyline from '../houstonSkyline.jpeg';
import laptop from '../laptop.jpeg';

function Home(){
    return(
        <div>
            <Container id="homePageContainer">
                <h1 id="homePageMissionTitle">Our Mission:</h1>
                <h2 id="missionStatement">Our mission here at Space City Coffee is to connect you to local coffee shops in the Houston area. 
                    It's our belief that local businesses like the shops you see on this site are what make Houston 
                    flavorful and special!</h2>
                <img src={coffeeBoi} alt="coffeeBoi" id="coffeeBoi"/>
                <br/>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                        className="carouselImg"
                        src={people}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="carouselText">Support Houston's finest coffee establishments</h3>
                        <p className="carouselText">Explore Space City's best local coffee shops to share with your friends!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                        className="carouselImg"
                        src={skyline}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3 className="carouselText">Find Houston's Local Coffee Shops</h3>
                        <p className="carouselText">Use our map tool to find your next favorite place to get your daily cup of joe.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carouselImg"
                        src={laptop}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3 className="carouselText">Join the movement!</h3>
                        <p className="carouselText">Create an account so you can keep track of your favorite shops.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <br/>
            </Container>
        </div>
    )
}

export default Home;