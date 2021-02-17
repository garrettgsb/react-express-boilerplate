export default function StoreSummary(props) {
  return(
    <div>
      <h3>Order Summary</h3>
      <p>You have earned {Math.floor(props.total / 10)} beans</p>
      <p>total: ${props.total}</p>
    </div>
  )
}