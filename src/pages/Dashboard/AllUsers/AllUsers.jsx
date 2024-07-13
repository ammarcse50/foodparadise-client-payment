import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  //   const [users] = useUsers();
  //   console.log(users)
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (user) => {
    console.log(user);
  };

  return (
    <div className="overflow-x-auto">
        <div><h3>total Users: {users.length}</h3></div>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => 
            
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>
                <button className="btn btn-ghost btn-xs">
                  <FaUsers className="text-2xl text-red-600" />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="btn btn-ghost btn-xs"
                >
                  <RiDeleteBin6Line className="text-2xl text-red-600" />
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
