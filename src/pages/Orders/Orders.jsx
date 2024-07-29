import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";

import coverOrder from "/images/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import OrderTab from "./orderTab/OrderTab";
import { useParams } from "react-router-dom";

const Orders = ({ items }) => {
  
  const categories = ["COFFEE", "BBQ", "SHAWARMA"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(menu);

  console.log(category);
  const coffees = menu.filter((item) => item.category === "Coffee");

  const bbqs = menu.filter((item) => item.category === "Grilled and BBQ");
  const shawarmas = menu.filter((item) => item.category === "Sharma");
  const Grills = menu.filter((item) => item.category === "Grill");

  return (
    <div>
      <Cover img={coverOrder}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab selectedClassName="bg-orange-500 text-white rounded">COFFEE</Tab>
          <Tab selectedClassName="bg-orange-500 text-white rounded">BBQ</Tab>
          <Tab selectedClassName="bg-orange-500 text-white rounded">
            SHAWARMA
          </Tab>
          <Tab selectedClassName="bg-orange-500 text-white rounded">Grill</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={coffees}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={bbqs}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={shawarmas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={Grills}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Orders;
