import { FC } from "react";
import Image from "next/image";
import s from "./RobinName.module.scss";

const RobinName: FC = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.image}>
          <Image src="/RobinPhoto.jpg" alt="RobinPhoto" priority fill />
        </div>
        <div className={s.secondImage}>
          <Image src="/robin2.png" alt="RobinPhoto2" priority fill />
        </div>
        <div className={s.textContainer}>
          <p className={s.robin}>
            I’m Robin Williams. A Product Designer <span style={{ color: "#8491A0" }}>based in Italy.</span>
          </p>
          <p className={s.probably}>
            I’m probably the most passionate designer you will ever get to work with. If you have a great project that
            needs some amazing skills, I’m your guy.
          </p>
        </div>
      </div>
    </>
  );
};

export { RobinName };
