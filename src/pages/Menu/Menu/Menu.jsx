import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "/images/menu/banner3.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import coffee from "/images/menu/coffee.jpg";
import bbqImg from "/images/menu/bbq.jpg";
import sharmaImg from "/images/menu/shawarma1.jpg";
import grillImg from "/images/menu/Grill.jpg"

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);

  const coffees = menu.filter((item) => item.category === "coffee");

  const bbqs = menu.filter((item) => item.category === "bbq");
  const sharmas = menu.filter((item) => item.category === "shawarma");
  const grills = menu.filter((item) => item.category === "Grill");
  // const offered = menu.filter((item) => item.category === "Offered");

  return (
    <div className="mx-auto max-w-7xl">
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

      <MenuCategory items={bbqs} title={"BBQ"} coverImg={bbqImg}></MenuCategory>

      <SectionTitle
        subHeading={"SHAWARMA"}
        heading={"TODAY'S  OFFER"}
      ></SectionTitle>

      <MenuCategory
        items={sharmas}
        title={"SHAWARMA"}
        coverImg={sharmaImg}
      ></MenuCategory>
      <SectionTitle
        subHeading={"Grill"}
        heading={"TODAY'S  OFFER"}
      ></SectionTitle>

      <MenuCategory
        items={grills}
        title={"GRILL"}
        coverImg={grillImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
