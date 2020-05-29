import React from 'react';
import "./Nav.scss";
import { INav } from "../../organisms/Navigation/Navigation";
import { NavLink } from "react-router-dom";

interface IProps {
  item: INav;
}

const Nav: React.FC<IProps> = ({ item }) => {
  return (
    <NavLink to={item.url} className="nav">
      <span className="nav__icon">{item.icon}</span>
      <span className="nav__label">{item.label}</span>
    </NavLink>
  );
};

export default Nav;