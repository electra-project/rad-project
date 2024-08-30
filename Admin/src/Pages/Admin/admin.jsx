import './admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes,Route} from 'react-router-dom'
import AddProduct from '../../Components/Addproducts/Addproduct.jsx'
import ListProduct from '../../Components/Listproduct/Listproduct.jsx'

const admin = () => {
  return (
    <div className="admin">
      <Sidebar />
      <Routes>
        <Route path='/addproduct' element={<AddProduct />}/>
        <Route path='/listproduct' element={<ListProduct />}/>
      </Routes>
    </div>
  )
}

export default admin
