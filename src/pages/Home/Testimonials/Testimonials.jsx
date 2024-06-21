import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
// import required modules
import { Navigation } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle/SectionTiltle";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <SectionTitle
        subHeading={"OUR CLIENTS REVIEW"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="text-center m-24">
              <Rating
                 style={{maxWidth:200}}
                 className="mx-auto m-4"
                value={review.rating}
           
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
