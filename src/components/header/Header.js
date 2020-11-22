import React from "react";
import { PageHeader } from "antd";
import "./Header.scss";
import HeaderCart from "../headerCart/HeaderCart";
import HeaderProfile from "../headerProfile/HeaderProfile";
import { Link, withRouter } from "react-router-dom";

const Header = ({history  }) => {
  const path = history.location.pathname
  console.log(path != '/products')
  return (
    <PageHeader
      className="site-page-header"
      onBack={() =>  path !== '/products' && window.history.back() }
      title={"Ecommerce Shopping"}
      extra={[
      <HeaderProfile key="profile" />,
      <HeaderCart key="cart"/>
    ]}
    />
  );
};
export default withRouter(Header);
