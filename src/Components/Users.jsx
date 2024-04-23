import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users=useLoaderData()
    console.log(users)
    return (
        <div>
            
        </div>
    );
};

export default Users;