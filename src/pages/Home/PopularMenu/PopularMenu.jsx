import { useEffect, useState } from "react";
import SectionTiltle from "../../../components/SectionTitle/SectionTiltle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {

    const [popularData,setPopularData] = useState([])

    useEffect(()=>{

        fetch('menu.json')
        .then(res=>res.json()
    .then(data=>{
        const popularItems = data.filter(item=> item.category=== 'Popular')
          setPopularData(popularItems)
          console.log(popularItems)
    })
)



    },[])
  return (
    <section className="mb-12">
      <SectionTiltle heading={"Popular Items"} subHeading={"OUR MENU"}></SectionTiltle>

      <div className="grid grid-cols-2 gap-4">
         {
        popularData.map(item=><MenuItem key={item._id} item={item} ></MenuItem>)
      }</div>
     
    </section>
  );
};

export default PopularMenu;
