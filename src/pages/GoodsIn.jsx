import React, { useState } from 'react'
import './GoodsIn.css'
import { addStockApi } from '../services/allAPI';
function GoodsIn() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    entryNumber: '',
    item: '',
    quantity: '',
    expiryDate: '',
  });
   const handleSubmit = async (e) => {
    e.preventDefault();
    const { entryNumber, item, quantity, expiryDate } = form;

    if (entryNumber && item && quantity && expiryDate) {
      
      const reqBody = {
        entryNumber,
        item,
        quantity,
        expiryDate,
      };
  
      try {
        const result = await addStockApi(reqBody);
        console.log(result);
  
        if (result.status === 201) {
          alert("Data added successfully");
          setItems(result.data)
          setForm({ entryNumber: "", item: "", quantity: "", expiryDate: "" });
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
      <h2 className="goodsin-title">Add Goods In Entry</h2>
      <form className="goodsin-form" onSubmit={handleSubmit}  >
        {/* */}
        <label>Entry Number</label>
        <input
          type="text"
          placeholder="Enter entry number"
          value={form.entryNumber}
          onChange={(e) => setForm({ ...form, entryNumber: e.target.value })}
          required
        />

 <label>item</label>
        <input
          type="text"
          placeholder="Enter item"
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
            <option key={item._id} value={item._id}>
              {item.itemName}
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

        <label>Expiry Date</label>
        <input
          type="date"
          value={form.expiryDate}
          onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
          required
        />

        <button className="submit-btn" type="submit">Add Stock</button>
      </form>
    </div>
    </>
  )
}

export default GoodsIn