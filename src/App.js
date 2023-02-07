import './App.css'
import ContentPage from './components/ContentPage';
import Product from './components/Product'
import './css/main.css'
import products from './products.json'
import Header from './components/Header';
import Nav from './components/Nav';
import PageTitle from './components/PageTitle';


function App() {
  return (
    <div className="container">
     <Header/>
     <Nav/>
     <ContentPage/>
    </div>
  );
}

export default App;
