''
import React from 'react'

export default function page() {
  return (
    <div>
      <input type="text" placeholder="Full Name" className="input " onChange={(e)=>console.log(e.target.value)}></input>
    </div>
  )
}

