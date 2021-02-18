import { useContext } from 'react'
import { appContext } from '../../appContext'

export default function StoreSummary(props) {

  const context = useContext(appContext)
  console.log(context.state)

  return(
    <div>
      <h3>Order Summary</h3>
      <p>You have earned {Math.floor(props.total / 10)} beans</p>
      <p>total: ${props.total}</p>
    </div>
  )
}