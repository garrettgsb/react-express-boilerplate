import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useContext } from "react";
import { getOrdersInfo } from "../../../helpers/selectors";
import { appContext } from "../../appContext";

import "./styles.scss";

function PreviousOrders() {
  const { state } = useContext(appContext);

  const prevOrders = getOrdersInfo(state.orders);
  
  const reorder = (orderId) => {
    console.log(`I will order ${orderId}`);
  };

  const previous = prevOrders.map((order) => {
    return (
      <div>
        {order.orderItems.map((item) => {
          return (
            <div>
              <Card className="root">
                <CardContent className="content">
                  <div className="order-item-details">
                    <p>{item.name}</p>
                  </div>
                  <div className="price-quantity-container">
                    <p>Qty: {item.quantity}</p>
                    <p>${item.price * item.quantity}</p>
                  </div>
                </CardContent>
                <CardMedia
                  className="cover"
                  image={item.image}
                  title={item.name}
                />
              </Card>
            </div>
          );
        })}

        <div className="reorder-container">
          <p>Total ${order.totalPrice}</p>
          <Button variant="contained" onClick={() => reorder(order.id)}>
            Reorder
          </Button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h3>Previous Orders</h3>
      {previous}
    </div>
  );
}

export default PreviousOrders;
