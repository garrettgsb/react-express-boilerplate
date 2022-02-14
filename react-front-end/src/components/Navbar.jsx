import React, { useState } from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";

export default function Navbar(props) {
  const { user } = props;

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <Menu size="large">
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />

      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Login/Sign Up</Button>
        </Menu.Item>

        <Dropdown item text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>Newsfeed</Dropdown.Item>
            <Dropdown.Item>Add Plant</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
    </Menu>
  );
}
