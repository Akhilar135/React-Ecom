import React from "react"
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";

const Book = ({bselect})=>{
    return(
<div> 
    

    <div className='d-inline-flex'> 
        <Card className='shadow p-3 mb-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
        <Card.Img 
        style={{ height: '15rem' }}
        className="p-2" 
        variant="top" src={require(`./images/${bselect.image}.jpg`)} />
        
        <Card.Body>
          <Card.Title>{bselect.bname}</Card.Title>
          <Card.Text>
            Price: ₹{bselect.price}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>

        </Card.Body>
      </Card>
      
      {console.log(bselect.bname)}
    </div>
    </div>
      



  )}
  export default Book