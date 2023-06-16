import React from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.css";

function Furniture() {
    return (
        <div>
            <br/><h1>FURNITURE</h1><br/>
            <Container>
                <CardGroup >
                    <Row class="row" >
                        <Card style={{ width: '18rem' }} class = "cardclass" >
                            <Card.Img variant="top" src="https://iwellnesslife.com/wp-content/uploads/2017/02/grocery.jpg" class = "cardimg" />
                            <Card.Body>
                                <Card.Title>CHAIRS</Card.Title>
                                <Card.Text>
                                    Rocking<br/>
                                    Lawn<br/>
                                    Plastic<br/>
                                    Office<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} class = "cardclass">
                            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/digital-device-technology-equipment-gadget_53876-47954.jpg?w=360" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>TABLES</Card.Title>
                                <Card.Text>
                                    Dining<br/>
                                    Study<br/>
                                    Side<br/>
                                    Coffee<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://laurelberninteriors.com/wp-content/uploads/2017/06/04-26260-post/Ivory_Coffee_Table_studio-mcgee-modern-and-traditional-furniture-mix.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>BEDS</Card.Title>
                                <Card.Text>
                                    King<br/>
                                    Queen<br/>
                                    Single<br/>
                                    Crib<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.racheldevine.com/blog/wp-content/uploads/2015/06/14-11073-post/P6140053-1-1024x768.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>SOFA</Card.Title>
                                <Card.Text>
                                    Chesterfield<br/>
                                    Loveseat<br/>
                                    Futon<br/>
                                    Sectional<br/>
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

export default Furniture;