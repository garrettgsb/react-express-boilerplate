import { Draggable } from "react-beautiful-dnd";
import React from "react";

const OrderItems = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="order-container"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              backgroundColor: snapshot.isDragging ? "#c4aa8d" : "#68431b",
              color: snapshot.isDragging ? "black" : "antiquewhite",
              ...provided.draggableProps.style,
            }}
          >
            <div className="order-item-customer">{item.username}</div>
            <div>
              {item.orders.map((order, index) => {
                return (
                  <div className="order-items" key={index}>
                    <span>{Object.keys(order)}</span>
                    <span>{Object.values(order)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default OrderItems;
