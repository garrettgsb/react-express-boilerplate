import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


import "./style.scss"

export default function Stripe() {
  
  const stripePromise = loadStripe(
    `pk_test_51IGXvFAMgCbxHz3urVmHmA0XfLStJZm7YsJ6YvsRN2RABBdID5rM5Qu1JHsAVFeheOZ9tFsT81EtBL72oKVYl5wY001azf4Dn5`
  );

  return (
    <Elements stripe={stripePromise}>
     <PaymentForm/>
    </Elements>
  );
}