import  React, {useState} from "react"

function  AddClothes () {
  const [name, setName] = useState(" ")
  const [userName, setUserName] = useState()

  return(
 <>
    <h1>Welcome</h1>
      <form>
      <label>
        Name:
      <input  type = "text"  value ={name} onChange={(e)=>setName(e.target.value)} />
      </label>
      <input type ="submit"  value= "Submit"></input>
      </form>
   </> 
  )
}


export default AddClothes