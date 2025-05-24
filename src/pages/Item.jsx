import React, { useEffect, useState } from 'react'
import './Item.css'
import { addItemApi, getAllApi, updateItemApi } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
function Item() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ itemName: '', description: '', entry: '', expiryDate: '' });
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  console.log("dshg", items);

  useEffect(() => {

    fetchDatas()
  }, [])

  const fetchDatas = async () => {
    const result = await getAllApi()
    console.log(result);
    if (result.status === 200) {
      setItems(result.data)
    }
  }
 const handleSubmit = async (e) => {
    e.preventDefault();
    const { itemName, description, entry, expiryDate } = form;

    if (!itemName || !description ) {
      alert("Enter all fields");
      return;
    }

    const reqBody = { itemName, description, expiryDate };

    try {
      if (editId) {
        const result = await updateItemApi(editId, reqBody);
        if (result.status === 200) {
          alert("Item updated successfully");
        }
      } else {
        const result = await addItemApi(reqBody);
        if (result.status === 201) {
          alert("Item added successfully");
        }
      }

      setForm({ itemName: '', description: '', expiryDate: '' });
      setEditId(null);
      fetchDatas(); 
      navigate('/item-master');
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      itemName: item.itemName,
      description: item.description,
      
      expiryDate: item.expiryDate?.slice(0, 10),
    });
  };




  return (
    <>
      <div className="item-form-container">
        <h2 className="form-title">{editId ? 'Edit Item' : 'Add New Item'}</h2>
        <form className="item-form">
          <label>Item Name</label>
          <input
            type="text"
            placeholder="Enter item name"
            value={form.itemName}
            onChange={(e) => setForm({ ...form, itemName: e.target.value })}
            required
          />

          <label>Description</label>
          <input
            type="text"
            placeholder="Enter description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
          />

          {/* <label>Entry Number</label>
          <input
            type="text"
            placeholder="Enter entry number "
            value={form.entry}
            onChange={(e) => setForm({ ...form, entry: e.target.value })}
            required
          /> */}

          {/* <label>Expiry Date</label>
          <input
            type="date"
            value={form.expiryDate}
            onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
            required
          /> */}

          <button onClick={handleSubmit} type="submit" className="submit-btn">
            {editId ? 'Update Item' : 'Add Item'}
          </button>
        </form>

        <h3 className="item-list-title">Recent Items</h3>
        <table className="item-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Entry</th>
              
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.itemName}</td>
                <td>{item.description}</td>
                <td>{item.entry}</td>
                {/* <td>{item.expiryDate?.slice(0, 10)}</td> */}
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                </td>
                {/* <td>
                  <button className="edit-btn" onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Item