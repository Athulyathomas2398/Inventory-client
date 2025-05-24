import React, { useEffect, useState } from 'react'
import './GoodsIn.css'
import { getAllApi, stockOutAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
function GoodsOut() {
  const navigate=useNavigate()
  const [items, setItems] = useState([]);
    const [form, setForm] = useState({
      
      
      itemName:'',
      quantity: ''
    });
console.log("fitems",items,form);
const[stockOut,setStockOut]=useState([])
 useEffect(() => {
    fetchDatas()
   
  }, [])
  
    const fetchDatas=async()=>{
      const result=await getAllApi()
      console.log(result);
      if(result.status==200){
        setStockOut(result.data)
      }
    }



     const handleSubmit = async (e) => {
        e.preventDefault();
        const {  itemName, quantity } = form;

        if (!itemName || !quantity) {

          alert("Enter all fields");
        }

          const reqBody = {

            itemName,
            quantity
          };
      
          try {
            const result = await stockOutAPI(reqBody);
            console.log(result);
      
            if (result.status === 201) {
              alert("Stock removed successfully");
              setItems(result.data)
              setForm({ itemName: "", quantity: "" });
              navigate('/stock-report');
            }
          } catch (err) {
            console.log("Error:", err);
          }
        
      };
  return (
    <>
    <div className="goodsin-container">
      <h2 className="goodsin-title">Remove Goods </h2>
      <form className="goodsin-form"  >
        {/* onSubmit={handleSubmit} */}
        {/* <label>Item</label>
        <input
          type="text"
          placeholder="Enter item "
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
          required
        />
        <label>ItemName</label>
        <input
          type="text"
          placeholder="Enter item "
          value={form.itemName}
          onChange={(e) => setForm({ ...form, itemName: e.target.value })}
          required
        /> */}

       <label>Select Item</label>
<select
  value={form.itemName}
  onChange={(e) => setForm({ ...form, itemName: e.target.value })}
  required
>
  <option value="">Select an item</option>
  {stockOut.map(item => (
    console.log("select",item),
    <option key={item._id} value={item.itemName}>
      {item.itemName}
    </option>
  ))}
</select>

        <label>Quantity</label>
        <input
          type="number"
          placeholder="Enter quantity"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />

        {/* <label>Date</label>
        <input
          type="date"
          value={form.dateRemoved}
          onChange={(e) => setForm({ ...form, dateRemoved: e.target.value })}
          required
        /> */}

        <button className="submit-btn" type="submit" onClick={handleSubmit}>Remove Stock</button>
      </form>
    </div>
    </>
  )
}

export default GoodsOut