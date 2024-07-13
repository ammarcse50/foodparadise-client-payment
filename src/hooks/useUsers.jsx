import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
        const {user}= useAuth()
         const axiosPublic = useAxiosSecure()
     const {data:users=[]}= useQuery({
           
        queryKey: ['users',user?.email],
           
        queryFn: async()=>{
         
             const res= await axiosPublic.get('/users')
             return res.data


        }

     })
    return  [users]
};

export default useUsers;