import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../slider/pic-1.jpg';
import pic2 from '../slider/pic-2.jpg';
import pic3 from '../slider/pic-3.jpg';

const Home = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={pic1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Introduction to Structered Programming Language.</h3>
                                <p>Structerd Programming or Modular Programming is now a programming paradigm...</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={pic2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Operating System and System Programming</h3>
                                <p>Operating System is major part of Computer Science. Now most giant company needed special knowledge about Operating System</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={pic3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Computer Networking</h3>
                                <p>Computer Networking is now play an important role in the field of computer science... </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </div>
    );
};

export default Home;