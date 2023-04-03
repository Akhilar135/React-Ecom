import React from 'react'
import  Bookdata  from './product';
import { useState } from 'react';
import{ Card, Button } from "react-bootstrap";
import Navbarbox from "../Header";
import Addbook from '../Addbooks';
import Books from '../Bookss';
const Products = () => {

    const [showForm, setShowForm] = useState(false)
    const[books, setBooks]= useState(Bookdata)

    const addBook = (book)=>{
      setBooks([...books,book])
    }
  return (
    
    
    
    <div>
      <div><header>
        <Navbarbox onAdd={ ()=> setShowForm(!showForm)}></Navbarbox>
        <Books books={books}></Books>
        </header>
        </div>
        {showForm && <Addbook onAdd={addBook}></Addbook>}
        
      <br></br>
        <h1 className ='bg-info text-white'>Books</h1>
        <br>
        </br>
         {books.map((book)=>(
          <div className='d-inline-flex'>
              <Card className='shadow p-3 mb-2 bg-body-tertiary rounded' style={{ width: '13rem' }}>
              <Card.Img 
              style={{ height: '15rem' }}
              className="p-2" 
              variant="top" src={require(`./images/${book.image}.jpg`)} />
              
              <Card.Body>
                <Card.Title>{book.bname}</Card.Title>
                <Card.Text>
                  Price: ₹{book.price}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>

              </Card.Body>
            </Card>
          
            
            </div>


        ))} 
        <br></br>


      
        </div>
  );
}

export default Products