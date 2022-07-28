import React from 'react'

export default function Our_Work({ kittens }) {
  return (
    <>
      <h1>Our Work</h1>
      <ul>
        {kittens.map(({ src: { tiny }, alt, id }) => {
          // console.log('kitten', kitten)
          return (
            <li key={id}>
              <img src={tiny} alt={alt} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
