import { FaUtensilSpoon } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // send img to imgbb and  get  url
  };
  return (
    <div>
      <SectionTitle
        heading={"Add An Item"}
        subHeading={"Whats new ?"}
      ></SectionTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Recipe name"
              className="input input-bordered"
            />
          </div>
          <div className="flex justify-between gap-3 ">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>

              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full max-w-xs"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option>Coffee</option>
                <option>BBQ</option>
                <option>SHAWARMA</option>
                <option>GRILL</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                {...register("price*", { required: true })}
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea  textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text"></span>
            </label>
            <input type="file" {...register("image", { required: true })} />
          </div>

          <button
            type="submit"
            className="btn bg-orange-400 text-white text-3xl "
          >
            Add item <FaUtensilSpoon></FaUtensilSpoon>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
