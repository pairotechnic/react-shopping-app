import React from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.css";

function Toiletries() {
    return (
        <div>
            <br/><h1>TOILETRIES</h1><br/>
            <Container>
                <CardGroup >
                    <Row class="row" >
                        <Card style={{ width: '18rem' }} class = "cardclass" >
                            <Card.Img variant="top" src="https://iwellnesslife.com/wp-content/uploads/2017/02/grocery.jpg" class = "cardimg" />
                            <Card.Body>
                                <Card.Title>BRUSH</Card.Title>
                                <Card.Text>
                                    Colgate<br/>
                                    Oral-B<br/>
                                    Pepsodent<br/>
                                    Sensodyne<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} class = "cardclass">
                            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/digital-device-technology-equipment-gadget_53876-47954.jpg?w=360" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>PASTE</Card.Title>
                                <Card.Text>
                                    Colgate<br/>
                                    Oral-B<br/>
                                    Pepsodent<br/>
                                    Sensodyne<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://laurelberninteriors.com/wp-content/uploads/2017/06/04-26260-post/Ivory_Coffee_Table_studio-mcgee-modern-and-traditional-furniture-mix.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>SOAP</Card.Title>
                                <Card.Text>
                                    Dettol<br/>
                                    Lifebuoy<br/>
                                    Dove<br/>
                                    Cinthol<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.racheldevine.com/blog/wp-content/uploads/2015/06/14-11073-post/P6140053-1-1024x768.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>FACEWASH</Card.Title>
                                <Card.Text>
                                    Garnier<br/>
                                    Neutrogena<br/>
                                    Himalaya<br/>
                                    Pond's<br/>
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

export default Toiletries;