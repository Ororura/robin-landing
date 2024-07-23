import { FC } from "react";
import s from "./Companies.module.scss";
import { Company } from "entities/company/ui";

const CompaniesWidget: FC = () => {
  return (
    <div className={s.container}>
      <p className={s.work}>work experience</p>
      <p className={s.companiesText}>Companies I have worked for in the past</p>
      <div className={s.companyEntityContainer}>
        {/* TODO Переделать на redux */}
        <Company
          color="#3CC74E"
          workNumber="01"
          name="Google"
          position="Interaction Designer"
          description="I currently am the lead designer on the interaction design team for Google Play."
        />
        <Company
          color="#609BFF"
          workNumber="02"
          name="Facebook"
          position="Product Designer"
          description="I’ve worked on a wide variety of internal tools for facebook over the past 6 years."
        />
        <Company
          color="#E95D90"
          workNumber="03"
          name="Dribble"
          position="Graphic Designer"
          description="I started my design career with Dribbble. I was incharge of creating illustrations for the platform."
        />
      </div>
    </div>
  );
};

export { CompaniesWidget };
