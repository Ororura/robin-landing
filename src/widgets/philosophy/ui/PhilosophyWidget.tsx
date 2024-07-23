import { FC } from "react";
import Image from "next/image";
import s from "./PhilosophyWidget.module.scss";

const PhilosophyWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <p className={s.philosophy}>Philosophy & values</p>
        <p className={s.philosophyText}>
          I think everyone wants the same thing - relationship with humanity,
          peace with the metaphysical, and experience with the universe. I try
          to grasp these things with my values: authenticity, creativity, &
          hospitality.
        </p>
        <p className={s.aboutMe}>More about me</p>
      </div>
      <Image src="/philosophy.jpg" alt="philosophy" width={720} height={600} />
    </div>
  );
};

export { PhilosophyWidget };
