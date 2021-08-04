import React from 'react'
import {useState} from 'react'

export default function AddMaterialForm(props) {

  const [description, setDescription] = useState("")

  const [price, setPrice] = useState("")

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  let handleSubmit = (e) => {
    e.preventDefault()

    let formData = {
        description: description,
        price: price,
        project_id: `${props.project_id}`
    }

    props.handleMaterialSubmit(formData)
  }

    return (
        <div>
             <form onSubmit={handleSubmit}> 
              <h2>Add a Material</h2>    
              <label>Description</label>
                <input type="text"
                name="description"
                value= {description}
                onChange= {handleDescription}
                ></input>
                <br/>
                <label>Price</label>
                <input type="text"
                name="price"
                value={price}
                onChange={handlePrice}
                ></input>
                <br/>
                <input type="submit" value="Submit"/>
              </form>
            
        </div>
    )
}
