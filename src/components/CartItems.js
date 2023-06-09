import { useTitle } from "../hook/useTitle"
import { Checkout } from "../components";
import { useCart } from "../context/CartContext";
 

export const CartItems = () => {
  const {total, cartList} = useCart();

  useTitle("Cart");
  
  
  return (
 <div>
     <div className="cartitems">
      <p  className="cart-title">Added to Cart Items: {cartList.length} / $ {total}</p>
      <div>
      {cartList.map((dog)=> (
        <Checkout key={dog.id} dog={dog} />
        ))}
      </div>
    </div>
 </div>
  )
}
