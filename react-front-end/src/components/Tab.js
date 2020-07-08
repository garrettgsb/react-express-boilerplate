import React from "react";
import UserProfile from "./UserProfile";
import Warranties from "./Warranties";

export default function Tab(props) {
  // if (props.name === "User Profile") {
  //   return <UserProfile userData={props.state.userData[0]} />;
  // } else if (props.name === "Warranties") {
  //   return <Warranties warranties={props.state.warranties} />;
  //   // return <p>{props.name}</p>;
  // } else if (props.name === "Monthly Payments") {
  //   // return <Payments />;
  //   return <p>{props.name}</p>;
  // } else if (props.name === "Transactions") {
  //   // return <Transactions />;
  //   return <p>{props.name}</p>;
  // }
  if (props.state.currentItem === null) {
    if (props.state.renderForm) {
      return <p>FORM</p>;
    }
    switch (props.name) {
      case "User Profile":
        return <UserProfile userData={props.state.userData[0]} />;
      case "Warranties":
        return (
          <Warranties
            warranties={props.state.warranties}
            setCurrentItem={props.setCurrentItem}
            setWarranties={props.setWarranties}
            setRenderForm={props.setRenderForm}
          />
        );
      case "Monthly Payments":
        // return <Payments />;
        return <p>{props.name}</p>;
      case "Transactions":
        // return <Transactions />;
        return <p>{props.name}</p>;
    }
  } else {
    // return <ItemDetails />;
    return <p>{props.state.currentItem.name}</p>;
  }
}
