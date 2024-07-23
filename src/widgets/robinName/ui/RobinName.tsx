import { FC } from "react";
import Image from "next/image";
import s from "./RobinName.module.scss";

const RobinName: FC = () => {
  return (
    <div className={s.container}>
      <Image
        className={s.image}
        src="/RobinPhoto.jpg"
        width="750"
        height="650"
        alt="RobinPhoto"
        priority
      />
      <div className={s.textContainer}>
        <p className={s.robin}>
          I’m Robin Williams. A Product Designer{" "}
          <span style={{ color: "#8491A0" }}>based in Italy.</span>
        </p>
        <p className={s.probably} style={{ fontSize: "18px" }}>
          I’m probably the most passionate designer you will ever get to work
          with. If you have a great project that needs some amazing skills, I’m
          your guy.
        </p>
      </div>
    </div>
  );
};

export { RobinName };
