import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Notfound from './pages/notFound/Notfound'


const API_URL = 'https://makeup-api.herokuapp.com/api/v1'
const PRODUCT_API_URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand='

function App() {

  // toggle function
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleToggleMenu = () => {
    setToggleMenu(current => !current)
    console.log(toggleMenu)
  }

  const [items, setItems] = useState([])

  const [brands, setBrands] = useState('')
  const [products, setProducts] = useState('')




  // on first time load
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products.json`)
        setItems(response.data)
      } catch (error) {
        if (error.response) {
          console.log(error.response.status)
        } else {
          console.log(`Error: ${error.message}`)
        }
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} handleToggleMenu={handleToggleMenu} />
      <Routes>
        <Route path='/' element={<Home items={items} />} />

        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
