import React, { useEffect, useState } from 'react';
import './Home.css';
import { Card, CardGroup, Carousel } from 'react-bootstrap';
import pic1 from '../slider/pic-1.jpg';
import pic2 from '../slider/pic-2.jpg';
import pic3 from '../slider/pic-3.jpg';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(response => response.json())
            .then(data => setData(data));
    }, [])
    return (
        <div>
            <section>
                <div className="container slider">
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
                <div className="container">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={pic1} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={pic2} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to additional
                                    content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={pic3} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This card has even longer content than the first to
                                    show that equal height action.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </section>
        </div>
    );
};

export default Home;