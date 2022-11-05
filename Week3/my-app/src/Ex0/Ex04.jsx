import React from 'react'

const array = ["First", "Second", "Third"];

const object = {
    first: 1,
    second: 2,
    third: 3,
};

export default function Ex04() {
  return (
    <section>
        <h1 style={{color: "red"}}>Ex0.4</h1>
        <h1>Array</h1>
        <ul>
            {array.map((i) => (
                <li key={i}>{i}</li>
            ))}
        </ul>

        <h1>Object</h1>
        <ul>
            {Object.keys(object).map((i) => (
                <li key={i}>
                    <strong>{i}: </strong>
                    {object[i]}
                </li>
            ))}
        </ul>
    </section>
  )
}