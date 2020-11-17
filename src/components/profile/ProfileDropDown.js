import ProfileMenu from "./ProfileMenu";
import React from "react";
import ProfileMenu from './ProfileMenu'

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
