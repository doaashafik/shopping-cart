import CartMenu from "./CartMenu";
import React from "react";

const CartDropdownMenu = () => {
  return (
    <Dropdown key="more" overlay={CartMenu}>
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
export default CartDropdownMenu;
