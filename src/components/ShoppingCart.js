export default function ShoppingCart({active}){

    return (
        <section id="cartview" className={active ? null : "hidden"}>
            <h3>Din handlevogn</h3>
            <ul>
                <li>Din handlevogn er tom.</li>
            </ul>
            <p>Totalt: Kr. <span id="total">0</span>,-</p>
        </section>
    )
}