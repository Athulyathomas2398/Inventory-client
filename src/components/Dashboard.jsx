import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
function Dashboard() {
  return (
    <>
    <div className="dashboard-container">
      <h2 className="dashboard-title">Inventory Management Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/item-master" className="dashboard-link">Item Master</Link>
        <Link to="/goods-in" className="dashboard-link">Goods In</Link>
        <Link to="/goods-out" className="dashboard-link">Goods Out</Link>
        <Link to="/stock-report" className="dashboard-link">Stock Report</Link>
      </div>
    </div>
    </>
  )
}

export default Dashboard