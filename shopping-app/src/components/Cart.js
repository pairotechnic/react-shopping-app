import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Cart.css';

function Cart(props) {
  
  const [price,setPrice]=useState([]);
  price.push(props.price)
  var total =0
  var amount = 0
  var total_qty = 0
  
  console.log(total)
  // console.log(props.Details[2].price)

  for (var i=0; i<props.Details.length; i++){

    (total) = (total) + ((props.Details[i].price) * (props.Details[i].qty))
  }
  for (var i=0; i<props.Details.length; i++){
 
    (total_qty) = (total_qty) + (props.Details[i].qty)
  }
  return (
    <div class="cartpage">
        <div class="cartdiv">
            <h1>Shopping Cart</h1>
           
            {/* <p style={{ color : 'blue' }}>Deselect all items</p> */}
            <p style={{float : 'right'}}>Price</p><br/><hr/>
            {props.Details.map(function x(p){
              if (p.price == 0){
                return
              }
              return(
                <div>
                  <div class="productimgdiv">
                    <img class = "cardimg" src={p.image} alt="car"/>
                  </div>
                  <div class="productinfodiv">
                    <h1>{p.title}</h1><br/>
                    <h4>{p.brand}</h4><br/><br/>
                    Qty : {p.qty}
                  </div>
                  <div class="productpricediv">
                    ₹{p.price} 
                  </div>
                </div>
                
              )
            })}
            <br/>
        </div>
        
        <div class="subtotaldiv">  
            <h5>Subtotal ({total_qty} items): ₹{Number(total)}</h5><hr/>

          
            <Link to="/ProceedToBuy">
            <button style = {{width : '100%'}} type="button" class="btn btn-warning">Proceed to Buy</button>
            </Link>
        </div>
    </div>
  )
}

export default Cart