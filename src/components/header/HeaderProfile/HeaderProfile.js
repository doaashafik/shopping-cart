import ProfileMenu from "./HeaderProfile";
import React from "react";
import { Link } from "react-router-dom";
const ProfileMenu = (
  <Menu>
    <Menu.Item>
      <Link to="/profile">Profile</Link>
      <Link to="/profile">SignOut</Link>
    </Menu.Item>
  </Menu>
);
const ProfileDropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={ProfileMenu}>
      <Button
        style={{
          border: "none",
          padding: 0,
        }}
      >
        <EllipsisOutlined
          style={{
            fontSize: 20,
            verticalAlign: "top",
          }}
        />
      </Button>
    </Dropdown>
  );
};
export default ProfileDropdownMenu;
