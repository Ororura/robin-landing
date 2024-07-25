import { FC } from "react";
import Image from "next/image";
import s from "./PhilosophyWidget.module.scss";

const PhilosophyWidget: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.textContainer}>
        <p className={s.philosophy}>Philosophy & values</p>
        <p className={s.philosophyText}>
          I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and
          experience with the universe. I try to grasp these things with my values: authenticity, creativity, &
          hospitality.
        </p>
        <p className={s.aboutMe}>More about me</p>
      </div>
      <div className={s.image}>
        <Image src="/philosophy.jpg" alt="philosophy" fill objectFit='cover' priority />
      </div>
    </div>
  );
};

export { PhilosophyWidget };
