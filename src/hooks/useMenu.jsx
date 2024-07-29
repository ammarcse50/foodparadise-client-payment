import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useMenu = () => {
   const {loading}= useAuth()
  const axiosPublic = useAxiosPublic();
  const { data: menu = [], refetch , isPending: menuloading} = useQuery({
    queryKey: ["menu"],
      enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
       
      return res.data;
    },
  });

  return [menu, refetch,menuloading];
};

export default useMenu;
