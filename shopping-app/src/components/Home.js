import React from 'react';
import {Container ,Card, CardGroup, Button, Col, Row} from 'react-bootstrap';  
import SearchBar from './SearchBar';
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            {/* <div className = "searchbardiv" style={{float : 'right'}}>
            <SearchBar/> 
            </div> */}
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
                            <li class="nav-item dropdown">
                                <a style={{color : 'white'}} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                </a>
                                <ul class="dropdown-menu" style={{color : 'white'}}>
                                    <li><a class="dropdown-item" href="C:\Users\Shreya.AM\mini-project-react\src\components\Groceries.js">Groceries</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li class="nav-item" style={{color : 'white'}}>
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <form class="d-flex" role="search" style={{color : 'white'}}>
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success" type="submit" style={{color : 'white'}}>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            </div>
           
        <div>
            <br/><br/><h1>HOME</h1><br/>
            <Container>
                <CardGroup >
                    <Row class="row" >
                        <Card style={{ width: '18rem' }} class = "cardclass" >
                            <Card.Img variant="top" src="https://iwellnesslife.com/wp-content/uploads/2017/02/grocery.jpg" class = "cardimg" />
                            <Card.Body>
                                <Card.Title>GROCERIES</Card.Title>
                                <Card.Text>
                                    Rice<br/>
                                    Masala<br/>
                                    Breakfast Food<br/>
                                    Snacks<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }} class = "cardclass">
                            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/digital-device-technology-equipment-gadget_53876-47954.jpg?w=360" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>ELECTRONICS</Card.Title>
                                <Card.Text>
                                    Phone<br/>
                                    Laptop<br/>
                                    Speaker<br/>
                                    Earphone<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Card style={{ width: '18rem' }} >
                            <Card.Img variant="top" src="https://laurelberninteriors.com/wp-content/uploads/2017/06/04-26260-post/Ivory_Coffee_Table_studio-mcgee-modern-and-traditional-furniture-mix.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>FURNITURE</Card.Title>
                                <Card.Text>
                                    Chair<br/>
                                    Table<br/>
                                    Desk<br/>
                                    Sofa<br/>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.racheldevine.com/blog/wp-content/uploads/2015/06/14-11073-post/P6140053-1-1024x768.jpg" class = "cardimg"/>
                            <Card.Body>
                                <Card.Title>TOILETRIES</Card.Title>
                                <Card.Text>
                                    Toothbrush<br/>
                                    Toothpaste<br/>
                                    Soap<br/>
                                    Facewash<br/>
                                </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </CardGroup>
         </Container>
     </div>
     
     </div>
    )
    }


export default Home;