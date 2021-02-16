import StoreNav from "./StoreNav";
import "./styles.scss";
import React, { useState, useEffect, useRef } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import OrderColumns from "./OrdersDashboard/OrderColumns";

const orders = [
  {
    id: "1",
    customer_name: "Customer One",
    orders: [{ item1: "qty1" }, { item2: "qty2" }],
  },
  {
    id: "2",
    customer_name: "Customer Two",
    orders: [{ item1: "qty1" }, { item2: "qty2" }],
  },
  {
    id: "3",
    customer_name: "Customer Three",
    orders: [{ item1: "qty1" }, { item2: "qty2" }],
  },
  {
    id: "4",
    customer_name: "Customer Four",
    orders: [{ item1: "qty1" }, { item2: "qty2" }],
  },
  {
    id: "5",
    customer_name: "Customer Five",
    orders: [{ item1: "qty1" }, { item2: "qty2" }],
  },
];

const columnsFromBackend = {
  1: {
    name: "Orders",
    items: orders,
  },
  2: {
    name: "Completed",
    items: [],
  },
};

const onDragEnd = ({ source, destination }, columns, setColumns) => {
  //Returns order to the same place if no destination has set
  if (!destination) return;

  //Takes order to a new column
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    //Takes back the order to the same column
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const StoreOwner = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  // To send SMS when order is completed
  const completedOrder = columns["2"].items.length;
  const isFirstRun = useRef(true);
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    console.log(columns["2"].items[completedOrder - 1]);
  }, [completedOrder]);

  return (
    <div>
      <StoreNav />
      <div className="dnd-container">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div className="dnd-column-container" key={columnId}>
                <h2>{column.name}</h2>
                <OrderColumns key={index} column={column} columnId={columnId} />
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default StoreOwner;
