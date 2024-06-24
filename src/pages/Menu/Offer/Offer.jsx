import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
const Offer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setOffers(data.slice(0,4));
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={`TODAY'S OFFER`}
        subHeading={`Donot Miss Our Offer`}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
       
        {offers.map((offer) => (
          <MenuItem key={offer.id} item={offer}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default Offer;
