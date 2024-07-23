import { FC } from "react";
import Image from "next/image";
import s from "./InstagramWidget.module.scss";

const InstagramWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <div className={s.infoContainer}>
          <p className={s.name}>Instagram</p>
          <p className={s.desc}>
            If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I’m an
            avid traveler and I capture the best moments that I would love to cherish with the world
          </p>
          <p className={s.follow}>Follow me on IG</p>
        </div>
      </div>
      <Image src="/plane.png" alt="plane" width={720} height={600} />
    </div>
  );
};

export { InstagramWidget };
