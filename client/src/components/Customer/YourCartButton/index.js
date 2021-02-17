import { useState, useEffect } from 'react'

import './styles.scss'
import { Button } from '@material-ui/core'

function YourCartButton(props) {

  const [cart, setCart] = useState(props.cart)

  useEffect(() => {
    setCart(props.cart)
  }, [props.cart])

  console.log('cart button', props.cart)

  // const onClick = () => {
  //   console.log('going to cart')
  // }

  return(
    <Button variant='contained' onClick={props.handleOpen}>Your cart ({cart.length}) total: $10.15</Button>
  )
}

export default YourCartButton