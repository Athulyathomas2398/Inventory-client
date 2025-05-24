import React, { useEffect, useState } from 'react'
import './Report.css'
import {  deleteStockReportEntryApi, getAllStockApi, getStockReportApi} from '../services/allAPI';
function Report() {
  const [report, setReport] = useState([]);
  console.log("report",report);
  const [added,setAdded]=useState([])
  console.log("added",added);
  
  
useEffect(() => {
  fetchDatas()
  //getAdded()
}, [])

// const getAdded=async()=>{
//   const result=await getAllStockApi()
//     console.log(result);
//     if(result.status==200){
//       setAdded(result.data)
//     }

// }

  const fetchDatas=async()=>{
    const result=await getStockReportApi()
    console.log(result);
    if(result.status==200){
      setReport(result.data)
    }
  }

   const handleDelete = async (id) => {
     console.log("Deleting entry with id:", id);  
  if (!id) {
    alert("Error: ID is undefined.");
    return;
  }
    const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
    if (confirmDelete) {
      try {
        const result = await deleteStockReportEntryApi(id);
        if (result.status === 200) {
          alert('Entry deleted');
          fetchDatas(); 
        }
      } catch (error) {
        alert('Error deleting entry');
        console.error(error);
      }
    }
  };
 
  return (
    <>
    <div className="form-container">
      <h3>Stock Report</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Item Id</th>
            <th>Item Name</th>
            <th>Total Stock</th>
            <th>Expiry Date</th>
            {/* <th>Entry Number</th> */}
            {/* <th>quantity er</th> */}
            {/* <th>Date Added</th> */}
            
          </tr>
        </thead>
        <tbody>
          {report.map((item, index) => (

           
             //const goodsOut = added.filter(entry => entry.itemId === item.itemId);
            

    
             <tr key={index}>
      <td>{item.itemId}</td>
      <td>{item.itemName}</td>
      <td>{item.availableQuantity}</td>
      {/* <td>{new Date(item.expiryDate).toLocaleDateString()}</td> */}
      <td>{item.expiryDate?.slice(0,10)}</td>
      {/* <td>{item.entryNumber}</td> */}
      {/* <td>{item.goodsOut}</td> */}
      {/* <td>{new Date(item.dateAdded).toLocaleDateString()}</td> */}
      {console.log("Report row:", item)}
      {/* <td>
        <button onClick={() => handleDelete(item._id)}>Delete</button>
      </td> */}
    </tr>
))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Report