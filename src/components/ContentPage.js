import products from '../products.json'
import PageTitle from './PageTitle'
import Product from './Product'
export default function ContentPage({name, cartItem, setCartItem}){
    return (
        <main>
            <PageTitle/>
            <div id="product-list">
            {products.map((product) =>{
          return(
          <Product
           key={product.prodid}
            name={product.title} 
            price={product.price} 
            cat={product.category}
             img= {product.imagefile} 
             cartItem={cartItem}
             setCartItem={setCartItem}
             proid={product.prodid}/>
              )
                } 
              )}
            </div>
        </main>
    )
}