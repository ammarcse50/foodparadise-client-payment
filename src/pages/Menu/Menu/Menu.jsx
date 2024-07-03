import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "/images/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import coffee from "/images/menu/coffee.jpg";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);

  const coffees = menu.filter((item) => item.category === "Coffee");



  const bbqs = menu.filter((item) => item.category === "Grilled and BBQ");
  const sharmas = menu.filter((item) => item.category === "Sharma");
  // const offered = menu.filter((item) => item.category === "Offered");

  return (
    <div>
      <Helmet>
        <title>foodparadise | Menu</title>
      </Helmet>
          {/* COFFEE SECTION  */}
      <Cover img={menuImg} title={"OUR MENU"}></Cover>

      <SectionTitle
        subHeading={"Donot miss our offer"}
        heading={"TODAY'S  OFFER"}
      ></SectionTitle>

      <MenuCategory
        items={coffees}
        title={"COFFEE"}
        coverImg={coffee}
      ></MenuCategory>

       {/* SHAWARMA SECTION  */}
    

<SectionTitle
  subHeading={"BBQ"}
  heading={"TODAY'S  OFFER"}
></SectionTitle>

<MenuCategory
  items={bbqs}
  title={"BBQ"}
  coverImg={coffee}
></MenuCategory>

<SectionTitle
  subHeading={"SHAWARMA"}
  heading={"TODAY'S  OFFER"}
></SectionTitle>

<MenuCategory
  items={sharmas}
  title={"SHAWARMA"}
  coverImg={coffee}
></MenuCategory>

    </div>
  );
};

export default Menu;
