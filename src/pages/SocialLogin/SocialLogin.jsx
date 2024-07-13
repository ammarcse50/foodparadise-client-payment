import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useUsers from "../../hooks/useUsers";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SocialLogin = () => {
  const { googleLogin} = useAuth();

//   const [users] =useUsers()
    const axiosPublic = useAxiosSecure()
  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
       const userInfo={

            name: result?.user?.displayName,
            email: result?.user?.email,
            photo: result?.user?.photoURL
          
       }

        axiosPublic.post('/users',userInfo)
        .then(()=>console.log('done added'))
    });
  };

  return (
    <div>
      <button className="btn btn-sm btn-warning mt-10 mx-24" onClick={handleGoogleLogin}>
     <FaGoogle></FaGoogle>   Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
