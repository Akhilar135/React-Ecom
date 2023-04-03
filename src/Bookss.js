import React from "react";
import Book from './Book';

const Books = ({books}) =>{
    return (
        <div className='books'>
            {books.map((book)=>(
                <Book key={book.id} bselect={book}></Book>
            ))}
            {console.log(books)}
        </div>

    )
}
export default Books