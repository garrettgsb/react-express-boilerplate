import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { appContext } from "../../appContext";
import "./style.scss";

export default function PaymentForm(props) {
  const [formState, setFormState] = useState("idle");
  const [error, setError] = useState(null);
  const { state, postOrder } = useContext(appContext);
  const stripe = useStripe();
  const elements = useElements();

  const history = useHistory();

  const orderData = (order) => {
    const d = new Date(Date.now());
    let dateString = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

    const completeOrder = {
      time_created: dateString,
      total_price: order.total,
      completed: true,
      user_id: state.currentUser,
      store_id: state.currentStore,
      order_items: [],
    };
    order.cart.forEach((e) => {
      const order = { menu_item_id: e.menuItemId };
      let quantityCounter = e.quantity;
      while (quantityCounter > 0) {
        completeOrder.order_items.push(order);
        quantityCounter--;
      }
    });
    return completeOrder;
  };

  const order = orderData(props.order);

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
    if (token) {
      setError(null);
      setFormState("submitted");
      await postOrder(order);
      history.push("/orderconfirmed");
    } else {
      setError(error);
      setFormState("error");
    }
  };

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
        <input
          name="mobile"
          type="tel"
          placeholder="mobile"
          value={state.user[0].phone_number}
        />
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
          Pay ${props.order.total / 100}
        </button>
      </div>
    </form>
  );
}
