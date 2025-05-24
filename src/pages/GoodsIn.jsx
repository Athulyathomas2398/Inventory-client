import React, { useEffect, useState } from 'react'
import './GoodsIn.css'
import { addStockApi,  getAllApi,  getStockReportApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
function GoodsIn() {
  const navigate=useNavigate()
  const [items, setItems] = useState([]);
  // const [form, setForm] = useState({
  //   entryNumber: '',
  //   item: '',
  //   itemName:'',
  //   quantity: '',
  //   expiryDate: '',
  // });
  const [form, setForm] = useState({item:'',itemName:'',quantity:'',expiryDate:''});

  console.log("items in",items);
  useEffect(() => {
    fetchDatas()
   
  }, [])
  
    const fetchDatas=async()=>{
      const result=await getAllApi()
      console.log(result);
      if(result.status==200){
        setItems(result.data)
      }
    }

 
   const handleSubmit = async (e) => {
    e.preventDefault();
    // const { entryNumber, item,itemName, quantity, expiryDate } = form;
    const { item,itemName, quantity, expiryDate } = form;

    if (! itemName || !quantity ) {
      
      alert("Enter all fields");
      return;
    }
    const reqBody = { item,itemName, quantity, expiryDate };

      // const reqBody = {
      //   entryNumber,
      //   item,
      //   itemName,
      //   quantity,
      //   expiryDate,
      // };
  
      try {
        const result = await addStockApi(reqBody);
        console.log(result);
        if (result.status === 400) {
          alert("duplicate entry");
        } 

        if (result.status === 201) {
          alert("Data added successfully");
           setItems(result.data)
           setForm({item:"", itemName: "", quantity: "", expiryDate: "" });
          // setForm({ entryNumber: "", item: "", quantity: "", expiryDate: "" });
          navigate('/stock-report');
        }
      
      } catch (err) {
         
        console.log("Error:", err);
      }
    
  };
  return (
    <>
     <div className="goodsin-container">
      <h2 className="goodsin-title">Add Goods In Entry</h2>
      <form className="goodsin-form" onSubmit={handleSubmit}  >
        {/* */}
                {/* <label>Select Item</label>
<select
  value={form.entryNumber || ''}
  onChange={(e) => setForm({ ...form, entryNumber: e.target.value })}
  required
>
  <option value="">Select Entry Number</option>
  {items.map((item) => (
    <option key={item._id} value={item._id}>
      {item.entryNumber} 
    </option>
  ))}
</select> */}
        {/* <label>Entry Number</label>
        <input
          type="text"
          placeholder="Enter entry number"
          value={form.entryNumber}
          onChange={(e) => setForm({ ...form, entryNumber: e.target.value })}
          required
        /> */}

 {/* <label>item</label>
        <input
          type="text"
          placeholder="Enter item"
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
          required
        /> */}

        {/* <label>item Name</label>
        <input
          type="text"
          placeholder="Enter item name"
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
  {items.map(item => (
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

        <label>Expiry Date</label>
        <input
          type="date"
          value={form.expiryDate}
          onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
          
        />

        <button className="submit-btn" type="submit">Add Stock</button>
      </form>
    </div>
    </>
  )
}

export default GoodsIn