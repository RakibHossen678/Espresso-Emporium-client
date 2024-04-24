import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        fetch(`https://espresso-emporium-server-weld.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              //remove the user from UI
              const remaining=users.filter(user=>user._id !== id)
              setUsers(remaining)
            }
          });
        //
      }
    });
  };
  return (
    <div className="w-6/12 mx-auto my-20">
      <h2 className="text-5xl font-bold text-center font-rancho  py-5 text-[#374151] drop-shadow-xl">
        Users Information
      </h2>
      <div className="overflow-x-auto font-raleway">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,idx) => (
              <tr key={user._id}>
                <th>{idx+1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user?.lastLoggedAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-[#EA4744] text-white px-2 py-1 rounded-md"
                  >
                    <MdDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
