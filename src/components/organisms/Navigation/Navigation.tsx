import React from 'react';
import "./Navigation.scss";
import {ReactComponent as Logo} from "../../../assets/svg/logo.svg"
import {ReactComponent as Mail} from "../../../assets/svg/mail.svg"
import {ReactComponent as Team} from "../../../assets/svg/team.svg"
import {ReactComponent as Files} from "../../../assets/svg/files.svg"
import {ReactComponent as Logout} from "../../../assets/svg/logout.svg"
import Nav from "../../atoms/Nav/Nav";

export interface INav {
  url: string;
  label: string;
  icon: React.ReactNode;
}

const Navigation = () => {
  const navigation: INav[] = [
    {
      url: "/mail",
      label: "Почта",
      icon: <Mail/>
    },
    {
      url: "/team",
      label: "Команда",
      icon: <Team/>
    },
    {
      url: "/files",
      label: "Файлы",
      icon: <Files/>
    },
    {
      url: "/logout",
      label: "Выход",
      icon: <Logout/>
    },
  ];
  const navJSX = navigation.map((e: INav) => <Nav item={e} key={e.url}/>)
  return (
    <nav className="navigation">
      <span className="navigation__logo"></span>
      {navJSX}
    </nav>
  );
};

export default Navigation;
