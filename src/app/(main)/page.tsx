import { FC } from "react";
import { CompaniesWidget } from "widgets/companies/ui";
import { PhilosophyWidget } from "widgets/philosophy/ui";
import { RobinName } from "widgets/robinName/ui";

const Home: FC = () => {
  return (
    <main>
      <RobinName />
      <CompaniesWidget />
      <PhilosophyWidget />
    </main>
  );
};

export default Home;
