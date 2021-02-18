import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import "./style.scss"


export default function Stripe(props) {
  
  const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <Elements stripe={stripePromise}>
     <PaymentForm order={props.order} beansSpent={props.beansSpent}/>
    </Elements>
  );
}

