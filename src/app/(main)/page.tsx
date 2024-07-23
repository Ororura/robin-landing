import { FC } from "react";
import { CompaniesWidget } from "widgets/companies/ui";
import { PhilosophyWidget } from "widgets/philosophy/ui";
import { RobinName } from "widgets/robinName/ui";
import { SkillsetWidget } from "widgets/skillset/ui";

const Home: FC = () => {
  return (
    <main>
      <RobinName />
      <CompaniesWidget />
      <PhilosophyWidget />
      <SkillsetWidget />
    </main>
  );
};

export default Home;
