
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Item from './pages/Item';
import GoodsIn from './pages/GoodsIn';
import GoodsOut from './pages/GoodsOut';
import Report from './pages/Report';
function App() {
 
  return (
    <>
      <Header />
      
      
      <Routes>
         <Route path="/" element={<Dashboard /> } />
        <Route path="/item-master" element={<Item />} />
        <Route path="/goods-in" element={<GoodsIn />} />
        <Route path="/goods-out" element={<GoodsOut />} />
        <Route path="/stock-report" element={<Report />} />
      </Routes>
    
      <Footer />
    </>
  )
}

export default App
