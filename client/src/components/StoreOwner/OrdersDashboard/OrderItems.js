import { Draggable } from "react-beautiful-dnd";
import React from "react";

const OrderItems = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              userSelect: "none",
              padding: 16,
              margin: "8px",
              minHeight: "50px",
              borderRadius: "50%",
              backgroundColor: snapshot.isDragging ? "#5f9c57" : "#456C86",
              color: "white",
              ...provided.draggableProps.style,
            }}
          >
            <div>{item.username}</div>
            <div>
              {item.orders.map((order, index) => {
                return (
                  <div key={index}>
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
