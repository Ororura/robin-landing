import { FC } from "react";
import { Footer } from "shared/ui/footer";
import { CompaniesWidget } from "widgets/companies/ui";
import { DribbleWidget } from "widgets/dribble/ui";
import { GetStartedWidget } from "widgets/getStarted/ui";
import { HugWidget } from "widgets/hug/ui";
import { InstagramWidget } from "widgets/instagram/ui";
import { PeopleSayWidget } from "widgets/peopleSay/ui";
import { PhilosophyWidget } from "widgets/philosophy/ui";
import { PhotographyWidget } from "widgets/photography/ui";
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
      <DribbleWidget />
      <PeopleSayWidget />
      <PhotographyWidget />
      <GetStartedWidget />
      <Footer />
    </main>
  );
};

export default Home;
