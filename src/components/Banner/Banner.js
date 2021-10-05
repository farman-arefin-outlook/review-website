import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Banner = (props) => {
    const { img, course, teacher, courseFee, description, discount, beginnerLevel, rating } = props.d;
    console.log(props);
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{course}</Card.Title>
                        <Card.Text>
                            {description}
                            <br />
                            <p>
                                <small>Discount : {discount}%</small>
                            </p>
                        </Card.Text>
                        <Card.Footer>
                            <small>{beginnerLevel}</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{course}</Card.Title>
                        <Card.Text>
                            {description}
                            <br />
                            <p>
                                <small>Discount : {discount}%</small>
                            </p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>{beginnerLevel}</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{course}</Card.Title>
                        <Card.Text>
                            {description}
                            <br />
                            <p>
                                <small>Discount : {discount}%</small>
                            </p>
                        </Card.Text>
                        <Card.Footer>
                            <small>{beginnerLevel}</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Banner;