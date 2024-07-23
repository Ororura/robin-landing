import { FC } from "react";
import s from "./SkillsetWidget.module.scss";
import { ProductIcon } from "./assets/ProductIcon";
import { VisualIcon } from "./assets/VisualIcon";
import { MotionIcon } from "./assets/MotionIcon";

const SkillsetWidget: FC = () => {
  return (
    <div className={s.container}>
      <div>
        <p className={s.skillset}>Skillset</p>
        <p className={s.description}>
          With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full
          fledged project. Whatever your needs are, I can pretty much take on any challenge.
        </p>
      </div>
      <div className={s.gridContainer}>
        <div>
          <div className={s.skillsContainer}>
            <ProductIcon />
            <p className={s.skillName}>Product Design</p>
            <p className={s.skillDesc}>
              Working at Facebook has taught me a lot about how to understand users, solve problems and build great
              products.
            </p>
          </div>
          <div className={s.skillsContainer}>
            <MotionIcon />
            <p className={s.skillName}>Motion Design</p>
            <p className={s.skillDesc}>
              I started my design journey with motion design in my college days. Motion is something that really
              fascinates me because of the flexibility of story telling.
            </p>
          </div>
        </div>
        <div>
          <div className={s.skillsContainer}>
            <VisualIcon />
            <p className={s.skillName}>Visual Design</p>
            <p className={s.skillDesc}>
              My experience at dribbble has helped me learn to develop the eye for design. Colors, typography, layout
              and the whole package.
            </p>
          </div>
          <div className={s.skillsContainer}>
            <ProductIcon />
            <p className={s.skillName}>Photography</p>
            <p className={s.skillDesc}>
              Clicking pictures really brings out the creative in me. Photography really makes you look and percieve
              things in a different way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SkillsetWidget };
