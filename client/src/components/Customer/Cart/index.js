import { useState } from 'react'

import { Modal } from '@material-ui/core'

function Cart(props) {

  const cartData = (
    <div>
      <h2>I am the cart data</h2>
    </div>
  )



  return(
    <Modal
    open={props.showCart}
    onClose={props.handleClose}
    >
      {cartData}
    </Modal>
  )
}

export default Cart