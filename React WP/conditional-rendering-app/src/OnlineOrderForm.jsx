import React, { useState } from 'react'

const OnlineOrderForm = () => {

    let [order, setOrder] = useState({
        customerName :"",
        mobile :"",
        product :"",
        quantity :"",
        price:'',
        paymentMethod :"Cash on Delivery",
        deliveryType :"Standard",
        address :"",
        totalPrice :''
    })

    const handleChange = (e)=>{
      const {name,type,value}=e.target 
      setOrder({...order, [name]:type=="number"?Number(value):value})
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      let totalPrice = order.quantity * order.price
      let newOrder = {...order, totalPrice:totalPrice}
      console.log(newOrder)
      clearForm()
    }

    const clearForm = ()=>{
      setOrder({
        customerName :"",
        mobile :"",
        product :"",
        quantity :"",
        price:'',
        paymentMethod :"Cash on Delivery",
        deliveryType :"Standard",
        address :"",
        totalPrice :''
      })
    }
  return (
    <div>
      <h3>10. Online Order Form</h3>
      <form onSubmit={handleSubmit}>
        customerName : <input type="text" name="customerName" value={order.customerName} onChange={handleChange} /><br /><br />
        mobile : <input type="tel" name="mobile" value={order.mobile} onChange={handleChange} /><br /><br />
        product : <input type="text" name="product" value={order.product} onChange={handleChange} /><br /><br />
        quantity : <input type="number" name="quantity" value={order.quantity} onChange={handleChange} /><br /><br />
        price : <input type="number" name="price" value={order.price} onChange={handleChange} /><br /><br />
        paymentMethod : <select name="paymentMethod" value={order.paymentMethod} onChange={handleChange}>
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
        </select><br /><br />
        deliveryType : <select name="deliveryType" value={order.deliveryType} onChange={handleChange}>
          <option value="Standard">Standard</option>
          <option value="Express">Express</option>
        </select><br /><br />
        address : <input type="text" name="address" value={order.address} onChange={handleChange} /><br /><br />

        <button type='submit'>Place Order</button>
      </form>
    </div>
  )
}

export default OnlineOrderForm
