import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "/images/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import steak from "/images/menu/steak.jpg";

const Menu = () => {
  const menu = useMenu();
  console.log(menu);

  const dessert = menu.filter((item) => item.category === "Desserts");

  const grillBbq = menu.filter((item) => item.category === "Grilled and BBQ");
  const beverages = menu.filter((item) => item.category === "Beverages");
  const offered = menu.filter((item) => item.category === "Offered");

  return (
    <div>
      <Helmet>
        <title>foodparadise | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={"OUR MENU"}></Cover>

      <SectionTitle
        subHeading={"Donot miss our offer"}
        heading={"TODAY'S  OFFER"}
      ></SectionTitle>

      <MenuCategory
        items={dessert}
        title={"BEEF STEAK"}
        coverImg={steak}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
