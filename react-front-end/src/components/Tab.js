import React from "react";
import UserProfile from "./UserProfile";
import Warranties from "./Warranties";
import Form from "./Form";

export default function Tab(props) {
  if (props.state.currentItem === null) {
    if (props.state.renderForm) {
      return (
        <Form setRenderForm={props.setRenderForm} addItem={props.addItem} />
      );
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
