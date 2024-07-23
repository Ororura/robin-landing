import { FC, PropsWithChildren } from "react";
import s from "./Header.module.scss";
import { Logo } from "../icons/logo";

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className={s.container}>
      //FIXME исправить расположение
      <div className={s.backgroundBox} />
      <Logo />
      <ul className={s.menuList}>
        <li>Experience</li>
        <li>Work</li>
        <li>Photography</li>
        <li className={s.contact}>Contact</li>
      </ul>
    </header>
  );
};

export { Header };
