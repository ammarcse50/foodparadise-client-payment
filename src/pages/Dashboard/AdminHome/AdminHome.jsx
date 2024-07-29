import useAuth from "../../../hooks/useAuth";

const AdminHome = () => {
    const {user}= useAuth()
    return (
        <div>
            <h2 className="text-xl">Admin Home</h2>
            <span>hi,Welcome</span>
            {
                user? <h3>{user?.displayName}</h3>:''
            }
        </div>
    );
};

export default AdminHome;