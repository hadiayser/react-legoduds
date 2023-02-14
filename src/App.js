import { useState } from 'react';
import './App.css'
import ContentPage from './components/ContentPage';
import Header from './components/Header';
import Nav from './components/Nav';
import './css/main.css'


const cartStart = [
  {
  id: 0,
  title: "",
  price: 0,
  }
]

function App() {
  const [cartItems, setCartItem] = useState(...cartStart)
  return (
    <div className="container">
        <Header/>
        <Nav />
        <ContentPage cartItems={cartItems} setCartItem={setCartItem}/>
    </div>
  );
}

export default App;