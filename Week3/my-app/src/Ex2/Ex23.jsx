import React, { useState } from 'react'

export default function Ex22() {
  const [name, setName] = useState("Adam")
  const [age, setAge] = useState(35)
  return (
    <>
      <h1 style={{color: "red"}}>Ex2.3</h1>
      <section>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name}</p>
      </section>
      <section>
        <input 
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
      </section>
    </>
  )
}
 