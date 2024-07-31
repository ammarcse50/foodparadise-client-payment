import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic()
  console.log(rating);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = user?.displayName;

    const liked = form.liked.value;
    const suggestion = form.suggestion.value;
    const details = form.message.value;

    const data = { name, liked, suggestion, details };

     
    axiosPublic.post('/reviews',data)
    .then(res=>{
        
      if(res.data.insertedId)
      {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your rating has been submitted",
          showConfirmButton: false,
          timer: 1500
        });

      }
     
    })


  };

  return (
    <div>
      <div className="card bg-base-100 w-1/2 mx-auto  shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-bold text-3xl">RATE US!</h2>
          <Rating
            style={{ maxWidth: 200 }}
            className="mx-auto m-4"
            value={rating}
            onChange={(e) => setRating(e)}
          />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Which recipe you liked most?</span>
            </label>
            <input
              type="text"
              name="liked"
              placeholder=""
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Do you have any suggestion for us?
              </span>
            </label>
            <input
              type="text"
              name="suggestion"
              placeholder=""
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Kindly express your care in a short way.
              </span>
            </label>
            <textarea
              name="message"
              id="message"
              className="input input-bordered h-24 rounded-none"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Review</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
