import React from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.css";

function Electronics() {
    return (
        <div>
            <br/><h1>ELECTRONICS</h1><br/>
            <Container>
                <CardGroup >
                    <Row class="row" >
                        <Card style={{ width: '18rem' }} class = "cardclass" >
                            <Card.Img variant="top" src="https://fdn.gsmarena.com/imgroot/news/19/12/phones-of-the-decade/-727w2/gsmarena_001.jpg" class = "cardimg" />
                            <Card.Body>
                                <Card.Title>PHONES</Card.Title>
                                <Card.Text>
                                    Samsung<br/>
                                    Xiaomi<br/>
                                    Oppo<br/>
                                    Apple<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} class = "cardclass">
                            <Card.Img variant="top" src="https://s.yimg.com/uu/api/res/1.2/IZmwdyWGvg0Nh2rfw9wSbA--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-07/4a425a40-fd56-11ec-beee-be16b8848f18.cf.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>LAPTOPS</Card.Title>
                                <Card.Text>
                                    Lenovo<br/>
                                    Dell<br/>
                                    Apple<br/>
                                    Asus<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://cdn.thewirecutter.com/wp-content/media/2021/04/bookshelfspeakers-2048px-566-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>SPEAKERS</Card.Title>
                                <Card.Text>
                                    JBL<br/>
                                    Bose<br/>
                                    Phillips<br/>
                                    Sony<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://5.imimg.com/data5/UE/AT/BG/SELLER-74935595/pixel-80cm-32-inch-full-hd-led-tv-pxl32he--500x500.png" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>TV</Card.Title>
                                <Card.Text>
                                    Samsung<br/>
                                    Sony<br/>
                                    TCL<br/>
                                    Hisense<br/>
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

export default Electronics;