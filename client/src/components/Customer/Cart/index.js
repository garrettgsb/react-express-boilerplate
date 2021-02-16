import { useState } from 'react'
import { Modal } from '@material-ui/core'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import './styles.scss'

function Cart(props) {

  const cartData = [
    {
      menuItemId: 1,
      itemName: 'latte',
      price: 2.50,
      quantity: 1
    },
    {
      menuItemId: 2,
      itemName: 'hot chocolate',
      price: 2.00,
      quantity: 2
    },
    {
      menuItemId: 1,
      itemName: 'latte',
      price: 2.50,
      quantity: 1
    }
  ]

  const [cartState, setCartSate] = useState(cartData)
  

  const total = cartState.reduce((a, b) => {
    return a + (b.price * b.quantity)
  }, 0)

  const cart = (
    <div className='cart-data'>
      <h2>Your cart</h2>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      {cartData.map((item, index) => {
        console.log(cartState)
        return (
          <>
          { cartState[index].quantity > 0 &&
          <>
          <p>{cartState[index].itemName}</p>
          <RemoveIcon onClick={(event) => setCartSate((prev) => {
            const cartCopy = [...prev]
            cartCopy[index].quantity -= 1
            return cartCopy 
            }
             )} />
          <input 
            value={cartState[index].quantity}
            onChange={(event) => setCartSate((prev) => {
              const cartCopy = [...prev]
            cartCopy[index].quantity = event.target.value
            return cartCopy 
            }
             )}
          />
          <AddIcon onClick={(event) => setCartSate((prev) => {
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