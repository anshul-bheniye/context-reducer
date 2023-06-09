
import { useCart } from "../context/CartContext";

export const Checkout = ({dog}) => {
   const {pic, name,price} = dog;
  const {remove} = useCart();
  return (
    <div >
          <div  className="card card-checkout" >
               <div className="checkout-image" > 
                   <img src={pic} alt={name} />
                </div>
                 
                <div>
                    <p>I am  {name}</p>
                </div>
        
                <p>Price $ {price} </p>
                <button className="remove" onClick={()=>remove(dog)}>Remove</button>
            </div>
    </div>
  )
}
