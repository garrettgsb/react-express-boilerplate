import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import { appContext } from "../../appContext";
import "./style.scss";

export default function PaymentForm() {
  const [formState, setFormState] = useState("idle");
  const [error, setError] = useState(null);
  const { state, postOrder } = useContext(appContext);

  console.log('state from payment', state)

  const totalFromCart = 1000;

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("submitting");
   
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const { error, token } = await stripe.createToken(
      elements.getElement(CardElement)
    );
    console.log("token", token);
    if (token) {
      setError(null);
      setFormState("submitted");
    } else {
      setError(error);
      setFormState("error");
    }
  };

  if (formState === "submitted") {
    postOrder();
    console.log("state from paymentForm", state)
    return <div>Charge succeeded!</div>;
  }

  const CardElementOptions = {
    style: {
      base: {
        color: "rgb(97, 85, 68)",
        "::placeholder": {
          color: "rgb(97, 85, 68)",
        },
      },
      invalid: {
        color: "red",
        iconColor: "red",
      },
    },
    hidePostalCode: true,
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div id="input">
        <input name="mobile" type="tel" placeholder="mobile" />
        <CardElement options={CardElementOptions} />
      </div>
      <div></div>
      {formState === "error" && <h5>{error.message}</h5>}
      <div>
        <button
          className="pay-button"
          disabled={formState === "submitting"}
          type="submit"
        >
          Pay ${totalFromCart / 100}
        </button>
      </div>
    </form>
  );
}
