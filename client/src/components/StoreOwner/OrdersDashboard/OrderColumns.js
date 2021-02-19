import OrderItems from "./OrderItems";
import { Droppable } from "react-beautiful-dnd";
import React from "react";

const OrderColumns = ({ column, columnId }) => {
  return (
    <div className="droppable-area">
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <div
              className="droppable-columns"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
              }}
            >
              {column.items.map((item, index) => {
                return <OrderItems key={index} item={item} index={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
};

export default OrderColumns;
