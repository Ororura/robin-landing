import { FC } from "react";
import s from "./Companies.module.scss";

const Companies: FC = () => {
  return (
    <div className={s.container}>
      <p className={s.work}>work experience</p>
      <p className={s.companiesText}>Companies I have worked for in the past</p>
    </div>
  );
};

export { Companies };
