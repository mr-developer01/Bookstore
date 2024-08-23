import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Books = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      fetchBook()
    }, [])

    const fetchBook = async () => {
        const getBooks = await axios.get("http://localhost:3000/api/v1/getbooks")
        setData(getBooks.data.books);
    }

    console.log(data);
    
    
  return (
    <div className='px-28 w-full bg-red-400 font-mono '>
        <h1 className='text-center text-[2vw] '>See All Book Collections</h1>
        <div>
            
        </div>
    </div>
  )
}

export default Books