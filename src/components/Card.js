import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";


export const Card = ({ dog }) => {
  const { addToCart, remove, cartList } = useCart();
  const { id, pic, name, breed, price } = dog;
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const dogInCart = cartList.find(dogAdded => dogAdded.id === id);

    dogInCart
      ? setIsInCart(true)
      : setIsInCart(false)

  }, [cartList, id])

  return (
    <div className="card">
      <div className="image-container" >
        <img src={pic} alt={name} />
      </div>
      <div>
        <p>I am {name}</p>
        <p>my breed {breed} </p>
      </div>
      <div className="card-cta">
        <p>Price $ {price}</p>

        {isInCart
          ? (<button className="remove" onClick={() => remove(dog)}>Remove</button>)
          : (<button className="add" onClick={() => addToCart(dog)}>Add to Cart</button>)}
      </div>
    </div>
  )
}
