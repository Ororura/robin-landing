import { Companies } from "@/widgets/companies/ui";
import { RobinName } from "@/widgets/robinName/ui";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
        
      <RobinName />
      <Companies />
    </main>
  );
};

export default Home;
