import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate()
  return (
    
   <Navbar bg="primary" data-bs-theme="dark">
       <h3 className="brand fs-1 text-center ms-5">Stock</h3>
      <button className="btn btn-outline-light ms-auto" onClick={() => navigate('/')}>Dashboard</button>

      </Navbar>
    
  )
}

export default Header