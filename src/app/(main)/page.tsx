import { FC } from "react";
import { CompaniesWidget } from "widgets/companies/ui";
import { RobinName } from "widgets/robinName/ui";

const Home: FC = () => {
  return (
    <main>
      <RobinName />
      <CompaniesWidget />
    </main>
  );
};

export default Home;
