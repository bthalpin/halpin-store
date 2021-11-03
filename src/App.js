import React,{ useState,useEffect } from 'react';
import Modal from 'react-modal';
import Nav from './components/Nav/Nav';
import Navigation from './components/Nav/Navigation';
import DropDown from './components//DropDown/DropDown';
import Products from './components/Products/Products';
import NavLeft from './components/Nav/NavLeft';
import Cart from './components/Cart/Cart';
import Departments from './components/Departments/Departments';
import './App.css';

Modal.setAppElement('body')

function App() {
  const [modalIsOpen,setModalIsOpen] = useState(false);
  const [category,setCategory] = useState('home')
  const [products,setProducts] = useState([])
  const [filter,setFilter] = useState('')
  const [filtered,setFiltered] = useState([])
  const [order,setOrder] = useState('')
  const [checkout,setCheckout] = useState([])
  const [cartIsOpen,setCartIsOpen] = useState(false)
  const [home,setHome] = useState(true)
  const [total,setTotal] = useState(0)
  const [storeDepartment,setStoreDepartment] = useState([])
  
  const [quantity,setQuantity] = useState([])
  

console.log(order)
  useEffect(()=>{
    fetch('http://localhost:8000/api/products/'
      )
      .then(res=>res.json())
      .then(res=>{
        console.log('here',res)
        setProducts(res)
        console.log(products,'after')
      })
      .catch(err=>console.log(err))
  },[category,order])

  useEffect(()=>{
    if (category!=='home'){

      setFiltered(products.filter((item)=>(item.department===category||category==='all')&&(filter===''||item.name.toUpperCase().includes(filter.toUpperCase())||item.description.toUpperCase().includes(filter.toUpperCase())||item.department.toUpperCase().includes(filter.toUpperCase()))))
      // setHome(false)
    }
  },[filter,products,category,storeDepartment])

  useEffect(()=>{
    fetch('http://localhost:8000/api/departments/',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }
      )
      .then(res=>res.json())
      .then(res=>{
        setStoreDepartment(res)
      })
      .catch(err=>console.log(err))
  },[])

  const openModal = ()=>{
    setModalIsOpen(true)
    console.log('open')
  }

  const sort = (order) =>{
    setOrder(order)
  }
  
  const removeFromCart= (item,i)=>{
    let newQuant =quantity
    newQuant.splice(i,1)
    setQuantity([...newQuant])
    setCheckout(checkout.filter((product)=>product.id!==item.id))
    
    console.log('i',i)
}

  
  // console.log(checkout)
  return (
    <div className = "main">
      <div>
      <div className="navContainer">
      <Nav openModal = {openModal} filter = {filter} setFilter = {setFilter} setCartIsOpen = {setCartIsOpen} checkout = {checkout} setHome = {setHome} setCategory = {setCategory} total = {total} quantity = {quantity} category = {category}/>
      
    <Navigation sort = {sort} category = {category} home = {home}/>
      </div>
      {category==='home'?
      <div className = "container">
      <Departments setHome = {setHome} setCategory = {setCategory} storeDepartment = {storeDepartment}/>
      <DropDown storeDepartment = {storeDepartment} setCategory = {setCategory} modalIsOpen = {modalIsOpen} setModalIsOpen = {setModalIsOpen} setHome = {setHome}/>
      <Cart cartIsOpen = {cartIsOpen} setCartIsOpen = {setCartIsOpen} checkout = {checkout} setCheckout = {setCheckout} removeFromCart = {removeFromCart} quantity = {quantity} setQuantity = {setQuantity} total = {total} setTotal = {setTotal}/>
      </div>
      :
    <div className = "container">

    <NavLeft setCategory = {setCategory} storeDepartment = {storeDepartment} />
    {console.log(storeDepartment)}
    <Cart cartIsOpen = {cartIsOpen} setCartIsOpen = {setCartIsOpen} checkout = {checkout} setCheckout = {setCheckout} removeFromCart = {removeFromCart} quantity = {quantity} setQuantity = {setQuantity} total = {total} setTotal = {setTotal}/>
    <DropDown storeDepartment = {storeDepartment} setCategory = {setCategory} modalIsOpen = {modalIsOpen} setModalIsOpen = {setModalIsOpen} setHome = {setHome}/>
      <Products products = {products} filtered = {filtered} setCheckout = {setCheckout} checkout = {checkout} removeFromCart = {removeFromCart} quantity = {quantity} setQuantity = {setQuantity}/>
   {console.log('quantity',quantity)}
    </div>
    }
      </div>
      
      
      
    </div>
  );
}

export default App;
