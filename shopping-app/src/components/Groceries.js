import React from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.css";

function Groceries() {
    return (
        <div>
            <br/><h1>GROCERIES</h1><br/>
            <Container>
                <CardGroup >
                    <Row class="row" >
                        <Card style={{ width: '18rem' }} class = "cardclass" >
                            <Card.Img variant="top" src="https://previews.123rf.com/images/derketta776/derketta7761809/derketta776180900383/108992400-dry-groats-grocery-rice-pasta-buckwheat-and-millet-on-the-wooden-background.jpg" class = "cardimg" />
                            <Card.Body>
                                <Card.Title>RICE</Card.Title>
                                <Card.Text>
                                    Basmati<br/>
                                    Brown<br/>
                                    Jasmine<br/>
                                    White<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} class = "cardclass">
                            <Card.Img variant="top" src="https://static.toiimg.com/photo/74416043.cms" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>MASALA</Card.Title>
                                <Card.Text>
                                    Turmeric<br/>
                                    Clove<br/>
                                    Chaat<br/>
                                    Chilli<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=2000" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>BREAKFAST FOOD</Card.Title>
                                <Card.Text>
                                    Cereals<br/>
                                    Oats<br/>
                                    Bread<br/>
                                    Jam<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1n7Y4yirVrr79_MRbwwCZ9FbiQ0FMhv_CEhLrZh9R6YOh53JHgRY8-1TkwRvhu1afU54&usqp=CAU" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>SNACKS</Card.Title>
                                <Card.Text>
                                    Chips<br/>
                                    Bars<br/>
                                    Biscuits<br/>
                                    Instant Noodles<br/>
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </CardGroup>
            </Container>
        </div>
    );
}

export default Groceries;
