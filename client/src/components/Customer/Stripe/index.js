import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {CardElement} from '@stripe/react-stripe-js'
import {PaymentRequestButtonElement} from '@stripe/react-stripe-js'

export default function stripe () {

const stripePromise = loadStripe(`pk_test_51IGXvFAMgCbxHz3urVmHmA0XfLStJZm7YsJ6YvsRN2RABBdID5rM5Qu1JHsAVFeheOZ9tFsT81EtBL72oKVYl5wY001azf4Dn5`)


return (
  <Elements stripe={stripePromise}>
    <CardElement/>
      <button type="submit">
        Pay
      </button>
  </Elements>
)

}