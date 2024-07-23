import { FC } from "react";
import { CompaniesWidget } from "widgets/companies/ui";
import { HugWidget } from "widgets/hug/ui";
import { InstagramWidget } from "widgets/instagram/ui";
import { PhilosophyWidget } from "widgets/philosophy/ui";
import { ProjectWidget } from "widgets/projects/ui";
import { RobinName } from "widgets/robinName/ui";
import { SkillsetWidget } from "widgets/skillset/ui";

const Home: FC = () => {
  return (
    <main>
      <RobinName />
      <CompaniesWidget />
      <PhilosophyWidget />
      <SkillsetWidget />
      <HugWidget />
      <ProjectWidget />
      <InstagramWidget />
    </main>
  );
};

export default Home;
