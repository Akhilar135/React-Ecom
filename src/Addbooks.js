import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const Addbook = ({onAdd}) => {
    const[bname,setName]= useState('')
    const[price,setPrice]= useState('')
    const[img,setImage]=useState('')

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log('Submited');
      onAdd({bname,price})

        setName('')
        setPrice(0)
        setImage('')

    }

  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>
                    Add Book
                </Card.Title>
                <br></br>
                
        <form onSubmit={onSubmit}>
            <label>Book Name </label><br></br>
            <input type='text' placeholder='Enter Book Name' value = {bname} onChange={(e)=>setName(e.target.value)} ></input><br></br>
            <br></br>
            <label>Price</label><br></br>
            
            <input type='number' value = {price} onChange={(e)=>setPrice(e.target.value)}></input><br></br>
           <br></br>
           <label >Image: </label>
        
          
           <input type='file' value={img} onChange={(e)=>setImage(e.target.value)}></input>
          <br></br>
          <br></br>
            <input type='submit' value='Save'></input>
        </form>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default Addbook