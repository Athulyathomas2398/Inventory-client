import React, { useState } from 'react'
import './GoodsIn.css'
import { stockOutAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
function GoodsOut() {
  const navigate=useNavigate()
  const [items, setItems] = useState([]);
    const [form, setForm] = useState({
      
      item: '',
      quantity: '',
      dateRemoved:''
    });
console.log("fitems",items,form);

     const handleSubmit = async (e) => {
        e.preventDefault();
        const { item, quantity,dateRemoved } = form;

        if (item && quantity && dateRemoved) {

          const reqBody = {
            
            item,
            quantity,
            dateRemoved
          };
      
          try {
            const result = await stockOutAPI(reqBody);
            console.log(result);
      
            if (result.status === 201) {
              alert("Stock removed successfully");
setItems(result.data)
              setForm({ item: "", quantity: "", dateRemoved: "" });
              navigate('/stock-report');
            }
          } catch (err) {
            console.log("Error:", err);
          }
        } else {
          alert("Enter all fields");
        }
      };
  return (
    <>
    <div className="goodsin-container">
      <h2 className="goodsin-title">Remove Goods </h2>
      <form className="goodsin-form"  >
        {/* onSubmit={handleSubmit} */}
        <label>Item</label>
        <input
          type="text"
          placeholder="Enter item "
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
          required
        />

        {/* <label>Select Item</label>
        <select
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
          required
        >
          <option value="">Select an item</option>
          {items.map((item) => (
            <option key={item.item._id} value={item.item._id}>
              {item.item.itemName}
            </option>
          ))}
        </select> */}

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />

        <label>Date</label>
        <input
          type="date"
          value={form.dateRemoved}
          onChange={(e) => setForm({ ...form, dateRemoved: e.target.value })}
          required
        />

        <button className="submit-btn" type="submit" onClick={handleSubmit}>Remove Stock</button>
      </form>
    </div>
    </>
  )
}

export default GoodsOut