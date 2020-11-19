import React, { useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import {
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { HeaderCartProducts } from './HeaderCartProducts/HeaderCartProducts'


const CartDropdownMenu = () => {
  const [visible, setVisible] = useState(false)

 const handleMenuClick = e => {
    if (e.key === '3') {
      setVisible(false);
    }
  };

 const handleVisibleChange = flag =>  setVisible(flag);

  const CartMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item>
        <HeaderCartProducts />
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
    onVisibleChange={handleVisibleChange}
    key="more" visible={visible}  overlay={CartMenu}>
      <Button
        style={{
          border: "none",
          padding: 0,
        }}
      >
        <ShoppingCartOutlined
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
