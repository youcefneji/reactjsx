import React from 'react'

export default function Header() {

    let name = "Contact"

  return (
   <div>
        <h1>Header</h1>
        <ul>
            <li>Home</li>
            <li>{name}</li>
            <li>service</li>
        </ul>
   </div> 
  )
}
