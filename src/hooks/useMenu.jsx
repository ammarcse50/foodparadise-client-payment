import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
// import useAuth from "./useAuth";

const useMenu = () => {
  //  const {loading}= useAuth()
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], refetch , isPending: menuLoading} = useQuery({
    queryKey: ["menu"],
     
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
       
      return res.data;
    },
  });
 
  return [menu, refetch,menuLoading];
};

export default useMenu;
