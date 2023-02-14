import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ShoppingButton from "./ShoppingButton";


export default function Product({name, cat, price, img, proid, cartItem, setCartItem}){
    return (
        <article className="product-card">
            {/* får å få bilder legger man det i public */}
            <img src={'./images/PROD_'+img} alt="Produktbilde av Zane"/>
            <ProductTitle name={name}  />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
            <ShoppingButton />
        </article>
    )
}