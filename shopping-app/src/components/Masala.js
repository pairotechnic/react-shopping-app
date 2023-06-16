import React, {useState} from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.css";
import Cart from './Cart'
import { Link } from 'react-router-dom'


function Masala() {
    const [isClicked,setIsClicked]=useState(false)
    var x=0;
    var y=0;

    const [image, setImage] = useState("");
    const [title, setTitle] = useState([]);
    const [brand, setBrand] = useState("defaultBrand");
    const [price, setPrice] = useState(0);
    const [qty, setqty] = useState(0);

    const [details, setDetails] = useState([{
        image : '',
        title : '',
        brand : '',
        price : 0,
        qty : 0
    }]);

    function tur()
    {

        var index = -1;

        for (var i=0; i<details.length; i++){
            if (details[i].title == "Turmeric"){

                details[i].qty ++;
                index=1;
            }
        }
        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Turmeric").src,
                    title : "Turmeric",
                    brand : "ORGANIC",
                    price : 700,
                    qty : 1
                }
            )
        }
        index=-1;
    }

    function clo()
    {
       
        // setTitle("Clove")
        //  setBrand("BADIA")
        //   setPrice(price + 580)
        //   setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Clove"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }

        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Clove").src,
                    title : "Clove",
                    brand : "BADIA",
                    price : 580,
                    qty : 1
                }
            )
        }
        // index=-1;
    }
    function cha()
    {
       
        // setTitle("Chaat")
        // setBrand("EVEREST")
        // setPrice(price + 465)
        // setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Chaat"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }
        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Chaat").src,
                    title : "Chaat",
                    brand : "EVEREST",
                    price : 465,
                    qty : 1
                }
            )
        }
    }

    function chi()
    {
       
        // setTitle("CHAAT")
        // setBrand("AACHI")
        // setPrice(price + 180)
        // setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Chilli"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }
        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Chilli").src,
                    title : "Chilli",
                    brand : "AACHI",
                    price : 180,
                    qty : 1
                }
            )
        }
    }
    function pep()
    {
       
        // setTitle("Clove")
        //  setBrand("BADIA")
        //   setPrice(price + 580)
        //   setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Pepper"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }

        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Pepper").src,
                    title : "Pepper",
                    brand : "EVEREST",
                    price : 100,
                    qty : 1
                }
            )
        }
        // index=-1;
    }
    function gar()
    {
       
        // setTitle("Clove")
        //  setBrand("BADIA")
        //   setPrice(price + 580)
        //   setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Garlic"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }

        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Garlic").src,
                    title : "Garlic",
                    brand : "Organic Garlic",
                    price : 80,
                    qty : 1
                }
            )
        }
        // index=-1;
    }
    function ore()
    {
       
        // setTitle("Clove")
        //  setBrand("BADIA")
        //   setPrice(price + 580)
        //   setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Oregano"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }

        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Oregano").src,
                    title : "Oregano",
                    brand : "Oregano Seasoning",
                    price : 499,
                    qty : 1
                }
            )
        }
        // index=-1;
    }
    function cin()
    {
       
        // setTitle("Clove")
        //  setBrand("BADIA")
        //   setPrice(price + 580)
        //   setqty(qty+1)

        var index = -1;
        
        for (var i=0; i<details.length; i++){
            if (details[i].title == "Cinnamon"){

                details[i].qty ++;
                // details[i].price=700
                index=1;
            }
        }

        if (index == -1){
            details.push(
                {
                    image : document.getElementById("Cinnamon").src,
                    title : "Cinnamon",
                    brand : "Organic Tatva",
                    price : 220,
                    qty : 1
                }
            )
        }
        // index=-1;
    }

    function sub()
    {
        setIsClicked(true)
    }

    if(isClicked==false)
    {
        return (


            
        
            <div>
                {console.log({title, brand, price})}


                <div>
                <nav class="navbar navbar-expand-lg  navbar bg-dark" style={{color : 'white'}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{color : 'white'}} >B-Store</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a style={{color : 'white'}} class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <Link to="/Profile">
                            <li class="nav-item">
                                
                                <a class="nav-link" href="#" style={{color : 'white'}}>My Profile</a>
                                


                            </li>
                            </Link>

                            <li class="nav-item">
                                
                                <a class="nav-link" href="#" style={{color : 'white'}} onClick={sub}>Cart</a>
                                {/* <button style={{width:'50px'}} onClick={sub}>cart</button> */}


                            </li>

                            
                            {/* <li class="nav-item dropdown">
                                <a style={{color : 'white'}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                </a>
                                <ul class="dropdown-menu" style={{color : 'white'}}>
                                    <li><a class="dropdown-item" href="C:\Users\Shreya.AM\mini-project-react\src\components\Groceries.js">Groceries</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                            {/* <li class="nav-item" style={{color : 'white'}}>
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex" role="search" style={{color : 'white'}}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit" style={{color : 'white'}}>Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
            </div>
                <br/><h1>MASALA</h1>  

                
    
                <Container>
                    <CardGroup >
                        <Row class="row" >
                            <Card style={{ width: '17rem' }} class = "cardclass" >
                                <Card.Img id="Turmeric" variant="top" src="https://m.media-amazon.com/images/I/71c3W1xdIVL._SL1500_.jpg" class = "cardimg" />
                                <Card.Body>
                                    <Card.Title>Turmeric</Card.Title>
                                    <Card.Text>
                                       <p>Brand : ORGANIC</p> <br/>
                                        <p>Price : 700 per kg</p><br/>
                                    </Card.Text>
                                    
                                    <Button variant="primary" onClick ={tur}>Add to Cart</Button>
                                    
                                    
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '17rem' }} class = "cardclass">
                                <Card.Img id = "Clove" mvariant="top" src="https://badiaspices.com/wp-content/uploads/2020/09/033844002213.jpg" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>CLOVE</Card.Title>
                                    <Card.Text>
                                        <p>Brand : BADIA</p><br/>
                                       <p> Price : 580 per kg</p> <br/>
                                    </Card.Text>
                                    <Button variant="primary" onClick={clo}>Add to Cart</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '17rem' }} >
                                <Card.Img id = "Chaat" variant="top" src="https://images.jdmagicbox.com/quickquotes/images_main/everest-chaat-masala-100-gm-240636375-g82psz8x.jpg" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>CHAAT</Card.Title>
                                    <Card.Text>
                                        <p>Brand : EVEREST </p><br/>
                                        <p> Price : 465 per kg</p><br/>
                                        {/* <Cart n></Cart> */}
                                        
                                    </Card.Text>
                                    <Button variant="primary" onClick={cha} >Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img id = "Chilli" variant="top" src="https://m.media-amazon.com/images/I/91AayPPf20L._SL1500_.jpg" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>CHILLI</Card.Title>
                                    <Card.Text>
                                        <p>Brand : AACHI</p><br/>
                                       <p>  Price : 180 per kg</p><br/>
                                    </Card.Text>
                                <Button variant="primary" onClick={chi}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img id = "Pepper" variant="top" src="https://m.media-amazon.com/images/I/91qEsl89yHL._SY879_.jpg" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>PEPPER</Card.Title>
                                    <Card.Text>
                                        <p>Brand : Everest</p><br/>
                                       <p>  Price : 100 per kg</p><br/>
                                    </Card.Text>
                                <Button variant="primary" onClick={pep}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img id = "Garlic" variant="top" src="https://cdn.shopify.com/s/files/1/0275/8020/3094/products/garlicpeel_540x.jpg?v=1630043016" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>GARLIC</Card.Title>
                                    <Card.Text>
                                        <p>Brand : Organic Garlic</p><br/>
                                       <p>  Price : 80 per kg</p><br/>
                                    </Card.Text>
                                <Button variant="primary" onClick={gar}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img id = "Oregano" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NL4j4hE78LnW3RVKZjkYw2b0Trcj3vAKPg&usqp=CAU" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>OREGANO</Card.Title>
                                    <Card.Text>
                                        <p>Brand : Oregano Seasoning</p><br/>
                                       <p>  Price : 499 per kg</p><br/>
                                    </Card.Text>
                                <Button variant="primary" onClick={ore}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '17rem' }}>
                                <Card.Img id = "Cinnamon" variant="top" src="https://images-eu.ssl-images-amazon.com/images/I/81l9FDij7kL._AC_UL900_SR900,600_.jpg" class = "cardimg"/>
                                <Card.Body>
                                    <Card.Title>CINNAMON</Card.Title>
                                    <Card.Text>
                                        <p>Brand : Organic Tatva</p><br/>
                                       <p>  Price : 220 per kg</p><br/>
                                    </Card.Text>
                                <Button variant="primary" onClick={cin}>Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Row>
                    </CardGroup>
                </Container>
                
                
                
            </div>
        )

    }
    else{
        
        return(<Cart Details={details}/> )
        
    }
}

export default Masala;