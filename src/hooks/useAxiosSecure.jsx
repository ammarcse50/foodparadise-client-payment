import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "https://foodparadise-server.vercel.app",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  //request interceptor for every secure api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("request stop by  innterceptor ", token);

      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // interceptors 401 & 403

  axiosSecure.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async (error) => {
      const status = error.response.status;

      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }

      // console.log("status error in the interceptor", error);

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
