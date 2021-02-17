import { useState, useEffect } from 'react'

import './styles.scss'
import { Button } from '@material-ui/core'

function YourCartButton(props) {

  const [cart, setCart] = useState(props.cart)
  const [total, setTotal] = useState(props.total)

  

  useEffect(() => {
    setCart(props.cart)
    setTotal(props.total)
  }, [props])


  return(
    <Button variant='contained' onClick={props.handleOpen}>Your cart ({cart.length}) total: ${total}</Button>
  )
}

export default YourCartButton