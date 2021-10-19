import React, { useState, useEffect } from "react";


function Clothes() {
  const [clothing, setClothing] = useState()
  useEffect(() => {
    fetch('https://bc-clothes.web.app/products')
      .then(res => res.json())
      .then(data => setClothing(data))
      .catch(err => alert(err))
  }, [])
  return(
    <>
    <h1>Clothes</h1>
    {!clothing
      ?<h2>Loading</h2>
      :clothing.map(item => {
        return(
          <div key={item.id}>
          <h3>{item.brand} {item.color} {item.style} {item.type}</h3>
          <p>${item.price}</p>
          </div>
        )
      })
    }
    </>
  )
}


export default Clothes