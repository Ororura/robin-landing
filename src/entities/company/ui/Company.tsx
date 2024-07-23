import { FC } from "react";
import s from "./Company.module.scss";

type Props = {
  workNumber: string;
  name: string;
  position: string;
  description: string;
  color: string;
};

const Company: FC<Props> = ({ workNumber, name, position, description, color }) => {
  return (
    <div className={s.container}>
      <p className={s.workNumber}>{workNumber}</p>
      <p style={{ color: color, margin: "0", fontSize: "24px", fontWeight: "700" }}>
        {`${name}, `} <span style={{ color: "white" }}>{position}</span>
      </p>
      <p className={s.description}>{description}</p>
    </div>
  );
};

export { Company };
