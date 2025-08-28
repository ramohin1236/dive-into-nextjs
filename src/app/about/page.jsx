"use client"
import React, { useState } from 'react'

const page = () => {

    const [count, setCount] = useState(0)
     
    const increment = () => {
        setCount(count + 1)
    }
   
    return (
        <div>
            <h1>About Us</h1>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default page