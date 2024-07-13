import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import useUsers from "../../../hooks/useUsers";

const AllUsers = () => {
  

   const [users]= useUsers()

  const handleDelete = (user) => {};

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            <tr>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost btn-xs"
                >
                  <FaUsers className="text-2xl text-red-600" />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost btn-xs"
                >
                  <RiDeleteBin6Line className="text-2xl text-red-600" />
                </button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
