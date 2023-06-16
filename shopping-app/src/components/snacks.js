import React,{useState} from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.css";
import Cart from './Cart'

function Snacks() {
    const [isClicked,setIsClicked]=useState(false)
    var x=0;
    var y=0;
    const [title, setTitle] = useState("defaultTitle");
    const [brand, setBrand] = useState("defaultBrand");
    const [price, setPrice] = useState(0);
    const [qty, setqty] = useState(0);
    function chip()
    {
       
        setTitle("chips")
         setBrand("Haldirms")
          setPrice(price+20)
          setqty(qty+1)
    }
    function inst()
    {
       
        setTitle("INSTANT NOODLES")
         setBrand("manchow")
          setPrice(price+50)
          setqty(qty+1)
    }
    function bis()
    {
       
        setTitle("BISCUITS")
         setBrand("OREO")
          setPrice(price+45)
          setqty(qty+1)
    }
    function bar()
    {
       
        setTitle("BARS")
         setBrand("HEALTHLINE")
          setPrice(price+230)
          setqty(qty+1)
    }
    function sub()
    {
        setIsClicked(true)
    }

    if(isClicked==false)
    {

    return (
        <div>
            <br/><h1>SNACKS</h1><br/>
            <Container>
                <CardGroup >
                    <Row class="row" >
                        <Card style={{ width: '18rem' }} class = "cardclass" >
                            <Card.Img variant="top" src="https://5.imimg.com/data5/VT/BB/UY/ANDROID-86816785/product-jpeg-500x500.jpg" class = "cardimg" />
                            <Card.Body>
                                <Card.Title>CHIPS</Card.Title>
                                <Card.Text>
                                   <p>Brand : HALDIRAMS</p> <br/>
                                    <p>Price : 20/-</p><br/>
                                </Card.Text>
                                <Button variant="primary " onClick={chip}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} class = "cardclass">
                            <Card.Img variant="top" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1586788360-61AsYby7HoL.jpg?crop=1xw:1xh;center,top&resize=480:*" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>BARS</Card.Title>
                                <Card.Text>
                                    <p>Brand : HEALTHLINE</p><br/>
                                   <p> Price : 230/-</p> <br/>
                                </Card.Text>
                                <Button variant="primary" onClick={bar}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61u9RgVeeZL._AC_UL320_.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>BISCUITS</Card.Title>
                                <Card.Text>
                                    <p>Brand : OREO </p><br/>
                                    <p> Price : 45/-</p><br/>
                                    
                                </Card.Text>
                                <Button variant="primary"onClick={bis}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91sFWJgCLDL._SL1500_.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>INSTANT NOODLES</Card.Title>
                                <Card.Text>
                                    <p>Brand :MANCHOW</p><br/>
                                   <p>  Price:50/-</p><br/>
                                </Card.Text>
                            <Button variant="primary" onClick={inst}>Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </CardGroup>
            </Container>
            <br></br>
            <button onClick={sub}> cart</button>
        </div>
    );
    }
    else{
        return(<Cart Title={title} Brand={brand} Price={price} q={qty}/> )
        

    }
}

export default Snacks;