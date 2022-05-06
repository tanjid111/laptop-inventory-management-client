import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../Images/Banner/1.png'
import banner2 from '../../../Images/Banner/2.png'
import banner3 from '../../../Images/Banner/3.png'
import banner4 from '../../../Images/Banner/4.png'
import banner5 from '../../../Images/Banner/5.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel variant="light" fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4 className='text-dark'>Find the laptop To fit your style</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h4>Gaming on the go!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>Best Performance</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>Take it where ever you go!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h4>Best keyboard comfort!</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;