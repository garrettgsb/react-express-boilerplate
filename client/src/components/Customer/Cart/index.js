import { useState, useEffect } from 'react'
import { Modal } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import BeanSlider from './BeanSlider'

import './styles.scss'

function Cart(props) {
  const [cartState, setCartSate] = useState(props.cart)
  const [total, setTotal] = useState(props.getTotal(cartState))
  
  useEffect(() => {
    setCartSate(props.cart)
    setTotal(props.getTotal(props.cart))
  }, [props])
  

  const removeFromTotal = (beans) => {
    setTotal(total - beans) 
  }
  const addToTotal = (beans) => {
    setTotal(total + beans) 
  }

  const handleSubmit = (event) => {
    console.log('cart', cartState)
    console.log('total', total)
    event.preventDefault()
  }

  const cart = (
    <div className='cart-data'>
      <h2>Your cart</h2>
      <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
      {cartState.map((item, index) => {
        return (
          <>
          { cartState[index].quantity > 0 &&
          <>
          <p>{cartState[index].itemName}</p>
          <RemoveIcon onClick={(event) => props.setCart((prev) => {
            const cartCopy = [...prev]
            cartCopy[index].quantity -= 1
            return cartCopy 
            }
             )} />
          <input 
            value={cartState[index].quantity}
            onChange={(event) => props.setCart((prev) => {
              const cartCopy = [...prev]
            cartCopy[index].quantity = event.target.value
            return cartCopy 
            }
             )}
          />
          <AddIcon onClick={(event) => props.setCart((prev) => {
               const cartCopy = [...prev]
               cartCopy[index].quantity += 1
               return cartCopy  
            }
             )} />
          <p>${item.price * cartState[index].quantity}</p>
            
          </>
          }
          </>
          )

      })}
      <p>TOTAL: ${total}</p>
      <p>Grind some beans?</p>
      <BeanSlider removeFromTotal={removeFromTotal} addToTotal={addToTotal}/>
      <input type='submit' value='Bean me up Scottie!' />
      </form>

    </div>
  )

  return(
    <Modal
    open={props.showCart}
    onClose={props.handleClose}
    >
      {cart}
    </Modal>
  )
}

export default Cart