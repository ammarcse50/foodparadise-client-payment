import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
        
    const [menu ]= useMenu();

     const popular = menu.filter(item=>item.category==='popular' )
  return (
    <section className="mb-12">
      <SectionTitle heading={"Popular Items"} subHeading={"OUR MENU"}></SectionTitle>

      <div className="grid grid-cols-2 gap-4">
         {
        popular.map(item=><MenuItem key={item._id} item={item} ></MenuItem>)
      }</div>
     
    </section>
  );
};

export default PopularMenu;
