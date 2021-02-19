import { useHistory } from "react-router-dom";

import { Modal } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import BeanSlider from "./BeanSlider";

import "./styles.scss";
import { convertCentsToDollars } from "../../../helpers/math";

function Cart(props) {
  const history = useHistory();

  // 1 bean = 50c
  const removeFromTotal = (beans) => {
    props.setTotal(props.total - beans * 50);
  };
  const addToTotal = (beans) => {
    props.setTotal(props.total + beans * 50);
  };

  const handleSubmit = (event) => {
    props.handleClose();
    history.push("/checkout");
    event.preventDefault();
  };

  const cart = (
    <div className="cart-data">
      <h2>Your cart</h2>
      <form autoComplete="off" onSubmit={(event) => handleSubmit(event)}>
        {props.cart.map((item, index) => {
          return (
            <>
              {props.cart[index].quantity > 0 && (
                <>
                  <p>{props.cart[index].itemName}</p>
                  <RemoveIcon
                    onClick={(event) =>
                      props.setCart((prev) => {
                        const cartCopy = [...prev];
                        cartCopy[index].quantity -= 1;
                        // remove item from cart
                        cartCopy[index].quantity === 0 &&
                          cartCopy.splice(index, 1);
                        return cartCopy;
                      })
                    }
                  />
                  <input
                    value={props.cart[index].quantity}
                    onChange={(event) =>
                      props.setCart((prev) => {
                        const cartCopy = [...prev];
                        cartCopy[index].quantity = event.target.value;
                        return cartCopy;
                      })
                    }
                  />
                  <AddIcon
                    onClick={(event) =>
                      props.setCart((prev) => {
                        const cartCopy = [...prev];
                        cartCopy[index].quantity += 1;
                        return cartCopy;
                      })
                    }
                  />
                  <p>
                    $
                    {convertCentsToDollars(
                      item.price * props.cart[index].quantity
                    )}
                  </p>
                </>
              )}
            </>
          );
        })}
        <p>TOTAL: ${convertCentsToDollars(props.total)}</p>
        <p>Grind some beans?</p>
        <BeanSlider
          removeFromTotal={removeFromTotal}
          addToTotal={addToTotal}
          beansSpent={props.beansSpent}
          setBeansSpent={props.setBeansSpent}
          total={props.cart}
        />
        <input type="submit" value="Bean me up Scottie!" />
      </form>
    </div>
  );

  return (
    <Modal open={props.showCart} onClose={props.handleClose}>
      {cart}
    </Modal>
  );
}

export default Cart;