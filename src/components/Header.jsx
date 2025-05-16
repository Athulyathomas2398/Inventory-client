import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    
   <Navbar bg="primary" data-bs-theme="dark">
       <h3 className="brand fs-1 text-center ms-5">Stock</h3>
      </Navbar>
    
  )
}

export default Header