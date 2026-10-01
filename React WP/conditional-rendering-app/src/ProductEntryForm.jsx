import React, { useState } from 'react'

const ProductEntryForm = () => {

    let [product, setProduct] = useState({
        pname:'',
        price:'',
        quantity:'',
        category:'Electronics',
        brand:'',
        available:'No'
    })

    const handleChange =(e)=>{
        const {name,type,value} = e.target 
        setProduct({...product, [name]:type=="number"?Number(value):value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(product)
        clearForm()
    }

    const clearForm = ()=>{
        setProduct({
            pname:'',
            price:'',
            quantity:'',
            category:'Electronics',
            brand:'',
            available:'No'
        })
    }
  return (
    <div>
      <h3>5. Product Entry Form</h3>

      <form onSubmit={handleSubmit}>
        pname : <input type="text" name='pname' value={product.pname} onChange={handleChange}/> <br /><br />
        price : <input type="number" name='price' value={product.price} onChange={handleChange}/> <br /><br />
        quantity : <input type="number" name='quantity' value={product.quantity} onChange={handleChange}/> <br /><br />
        category : <select name="category" value={product.category} onChange={handleChange}>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Grocery">Grocery</option>
            <option value="Furniture">Furniture</option>
        </select><br /><br />
        brand : <input type="text" name='brand' value={product.brand} onChange={handleChange}/> <br /><br />
        available : <input type="checkbox" name='available' value={"Yes"} onChange={handleChange}/> <br /><br />

        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default ProductEntryForm
