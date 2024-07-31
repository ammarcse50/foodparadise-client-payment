import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://foodparadise-server-payment-production.up.railway.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
