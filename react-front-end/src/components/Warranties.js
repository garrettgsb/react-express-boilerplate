import React from "react";
import WarrantyList from "./WarrantyList";
import WarrantyListItem from "./WarrantyListItem";
import Search from "./Search";

export default function Warranties(props) {
  // const warrantyItems = props.warranties.map((warranty) => {
  //   return <WarrantyListItem key={warranty.id} warranty={warranty} />;
  // });
  return (
    <div>
      <Search setWarranties={props.setWarranties} />
      {/* <WarrantyDashboard /> */}
      <WarrantyList
        warranties={props.warranties}
        setCurrentItem={props.setCurrentItem}
      />
      {/* {warrantyItems} */}
      {/* {props.warranties.map((warranty) => (
        <WarrantyListItem warranty={warranty} />
      ))} */}
    </div>
  );
}
