import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import { useForm } from "react-hook-form";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();



  const onSubmit = (data) => {
    console.log('clickedd')
    console.log(data);

    createUser(data.email, data.password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire("Account Created!");
    });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            {...register("name", { required: true, pattern: /^[A-Za-z]+$/i})}
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
          {errors.name && (
            <span className="text-red-400">Name is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="input input-bordered"
          />
          {errors.email && (
            <span className="text-red-400">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            })}
            placeholder="password"
            className="input input-bordered"
    
          />
          {errors.password?.type === "required" && (
            <span className="text-red-400">Password is required</span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="text-red-400">
              Password must be more then 6 character
            </span>
          )}
          {errors.password?.type === "maxLength" && (
            <span className="text-red-400">
              Password must be less then 20 character
            </span>
          )}
        </div>

        <div className="form-control mt-6">
           <button  type="submit">Register</button>

         <p>   Alredy Have An Account ? please{" "}
            <Link className="text-blue-400" to={"/login"}>
             Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
