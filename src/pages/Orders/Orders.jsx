import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";

import coverOrder from "/images/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../components/FoodCard/FoodCard";

const Orders = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const menu = useMenu();
  console.log(menu);

  const coffees = menu.filter((item) => item.category === "Coffee");

  const bbqs = menu.filter((item) => item.category === "Grilled and BBQ");
  const shawarmas = menu.filter((item) => item.category === "Sharma");
  const Grills = menu.filter((item) => item.category === "Grill");

  return (
    <div>
      <Cover img={coverOrder}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Coffee</Tab>
          <Tab>BBQ</Tab>
          <Tab>Shawarma</Tab>
          <Tab>Grill</Tab>
        </TabList>
        <TabPanel>
          <div className="grid grid-cols-3">
            {coffees.map((coffee) => (
              <FoodCard key={coffee.id} item={coffee}></FoodCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel><div className="grid grid-cols-3">
            {bbqs.map((bbq) => (
              <FoodCard key={bbq.id} item={bbq}></FoodCard>
            ))}
          </div></TabPanel>
        <TabPanel><div className="grid grid-cols-3">
            {shawarmas.map(shawarma => (
              <FoodCard key={shawarma.id} item={shawarma}></FoodCard>
            ))}
          </div></TabPanel>
        <TabPanel><div className="grid grid-cols-3">
            {Grills.map(grill => (
              <FoodCard key={grill.id} item={grill}></FoodCard>
            ))}
          </div></TabPanel>
      </Tabs>
    </div>
  );
};

export default Orders;
