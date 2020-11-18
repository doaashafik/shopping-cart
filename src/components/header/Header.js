import React from "react";
import { PageHeader } from "../profile/node_modules/antd";

import "./Header.scss";
import CartDropdownMenu from "./HeaderCart/HeaderCart";
import ProfileDropdownMenu from "./HeaderProfile/HeaderProfile";

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => null}
      title={<CartDropdownMenu />}
      extra={[<ProfileDropdownMenu key="more" />]}
    />
  );
};
export default Header;
