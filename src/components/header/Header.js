import React from "react";
import { PageHeader } from "antd";
import "./Header.scss";
import HeaderCart from "./HeaderCart/HeaderCart";
import HeaderProfile from "./HeaderProfile/HeaderProfile";

const Header = () => {
  return (
    <PageHeader
      className="site-page-header"
      backIcon={false}
      subTitle="Products Shopping Cart"
      title={<HeaderCart />}
      extra={[<HeaderProfile key="more" />]}
    />
  );
};
export default Header;
