import PropTypes from "prop-types";
import { FaRegEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CofeeCard = ({ coffee ,setCoffees,coffees}) => {
  const { _id, name, photo, supplier, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining=coffees.filter(cof=>cof._id !==_id)
              setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div className=" lg:p-8 p-2 mx-2 flex items-center space-x-2 lg:space-x-14 bg-[#f5f4f166]  ">
      <div className="flex-shrink-0  lg:mb-6 h-28  lg:h-48 lg:w-32 sm:mb-0">
        <img
          src={photo}
          alt=""
          className="object-cover object-center w-full h-full rounded "
        />
      </div>
      <div className="flex items-center justify-between w-full space-y-4">
        <div>
          <h2 className=" font-raleway py-1">
            <span className="font-semibold ">Name:</span> {name}
          </h2>
          <h2 className="font-raleway py-1">
            <span className="font-semibold ">Chef:</span> {supplier}
          </h2>
          <h2 className="font-raleway py-1">
            <span className="font-semibold ">Qunanity:</span> {quantity}
          </h2>
        </div>
        <div className="space-y-6">
          <div>
            <button className="bg-[#D2B48C] px-2 py-1 rounded-md text-white">
              <FaRegEye className="text-xl" />
            </button>
          </div>
          <div>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="bg-[#3C393B] text-white px-2 py-1 rounded-md">
                <MdModeEditOutline className="text-xl" />
              </button>
            </Link>
          </div>
          <div>
            <button
              onClick={() => handleDelete(_id)}
              className="bg-[#EA4744] text-white px-2 py-1 rounded-md"
            >
              <MdDelete className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
CofeeCard.propTypes = {
  coffee: PropTypes.object,
};
export default CofeeCard;
