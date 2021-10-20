import  React, {useState, useEffect } from "react"

function  AddClothes () {
 
  const [sku, setSku] = useState("")
  const [brand, setBrand] = useState("")
  const [type, setType] = useState("")
  const [color, setColor] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    const data = {
      "sku": sku,
      "brand": brand,
      "type": type,
      "color": color,
      "price": price
    }

      fetch('https://bc-clothes.web.app/products', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => {
        res.json()
        alert("Item added successfully")
        })
      .catch(err => alert(err))
  };
    
  return(
 <>
    <h1>Add Clothes</h1>
      <form onSubmit={e => {
        e.preventDefault()
        handleSubmit(e)
      }}>
      <label>
        Sku:
      <input  type = "text"  value ={sku} onChange={(e)=>setSku(e.target.value)} />
      </label>
      <br />
      <label>
        Brand:
      <input  type = "text"  value ={brand} onChange={(e)=>setBrand(e.target.value)} />
      </label>
      <br />
      <label>
        Type:
      <input  type = "text"  value ={type} onChange={(e)=>setType(e.target.value)} />
      </label>
      <br />
      <label>
        Color:
      <input  type = "text"  value ={color} onChange={(e)=>setColor(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
      <input  type = "number"  value ={price} onChange={(e)=>setPrice(e.target.value)} />
      </label>
      <br />
      <button  type ="submit" value= "Submit">Add item</button>
      </form>
   </> 
  )
}

export default AddClothes


