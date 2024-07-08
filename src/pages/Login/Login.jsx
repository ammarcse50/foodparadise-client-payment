import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
const Login = () => {
    const {signInUser} = useContext(AuthContext)
  const [disabled, setDisabled] = useState(true);

  const captchaRef = useRef(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
      setDisabled(false);
    } else {
        setDisabled(true)
      alert("Captcha Does Not Match");
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;

//     const user = { email, password };

//     signInUser(email,password)
//     .then(res=>console.log(res.user))
//     .catch(err=>console.log(err))
//   };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })} 
            name="email"
            placeholder="email"
            className="input input-bordered"
           
          />
           {errors.email && <span className='text-red-400'>Email is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: true , minLength:6 ,maxLength:20})} 
            name="password"
            placeholder="password"
            className="input input-bordered"
          
          />
           {errors.password && <span className='text-red-400'>Password is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Captcha</span>
          </label>
          <LoadCanvasTemplate />
          <input
            ref={captchaRef}
            type="captcha"
            id="captcha"
            name="captcha"
            placeholder="captcha"
            className="input input-bordered"
            required
          />

          <button className="btn " onClick={handleValidateCaptcha}>Validate</button>
        </div>
        <div className="form-control mt-6">
          <button type="submit" disabled={disabled} className="btn btn-primary">
            Login
          </button>
          <p>New Here ? please <Link to={'/signup'}  className="text-blue-400">Register</Link ></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
