import React from "react";
import { PageHeader } from "../profile/node_modules/antd";

import "./Header.scss";
import CartDropdownMenu from "./Components/CartDropDown";
import ProfileDropdownMenu from "./Components/ProfileDropDown";

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
