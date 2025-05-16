import React, { useEffect, useState } from 'react'
import './Report.css'
import { getAllStockApi, getStockOutApi } from '../services/allAPI';
function Report() {
  const [report, setReport] = useState([]);
  console.log("report",report);
  const [report1, setReport1] = useState([]);
  console.log("report1",report1);
useEffect(() => {
  fetchDatas()
  getDatas()
}, [])

  const fetchDatas=async()=>{
    const result=await getAllStockApi()
    console.log(result);
    if(result.status==200){
      setReport(result.data)
    }
  }
  const getDatas=async()=>{
    const result=await getStockOutApi()
    console.log(result);
    if(result.status==200){
      setReport(result.data)
    }
  }
  return (
    <>
    <div className="form-container">
      <h3>Stock Report</h3>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Item </th>
            <th>Total Stock</th>
            <th>Expiry Date</th>
            <th>Entry Number</th>
            
          </tr>
        </thead>
        <tbody>
          {report.map((item, index) => (
            <tr key={index}>
              <td>{item.item._id}</td>
              <td>{item.quantity
}</td>
              <td>{item.expiryDate ? new Date(item.expiryDate).toLocaleDateString() : "N/A"}</td>
              <td>{item.entryNumber}</td>
              <td>{item.dateRemoved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Report