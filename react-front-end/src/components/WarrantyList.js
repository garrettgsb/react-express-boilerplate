import React from "react";
import WarrantyListItem from "./WarrantyListItem";

export default function Warranties(props) {
  const warrantyItems = props.warranties.map((warranty) => {
    return (
      <WarrantyListItem
        key={warranty.id}
        warranty={warranty}
        setCurrentItem={props.setCurrentItem}
      />
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Warranty name</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>{warrantyItems}</tbody>
    </table>
  );
}
