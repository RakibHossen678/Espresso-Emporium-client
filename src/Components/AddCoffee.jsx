import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Swal from 'sweetalert2'

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee)

    //sent data to server

    fetch('http://localhost:5000/coffee',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'success!',
          text: 'Coffee added successfully',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      }
    })
  };
  return (
    <div className="container  bg-cover bg-center flex justify-center items-center py-20  object-cover flex-col">
      <Link
        to="/"
        className="absolute flex items-center  font-rancho text-xl font-semibold top-9 drop-shadow-xl hover:bg-[#D2B48C] hover:px-3 py-1 lg:left-64  left-4"
      >
        <FaArrowLeftLong className="mr-2" /> Back to home
      </Link>
      <div className="lg:w-8/12 mx-1  lg:mx-auto py-6 bg-[#F4F3F0]">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-rancho text-4xl font-semibold py-3 text-[#374151] drop-shadow-2xl">
            Add New Coffee
          </h1>
          <p className="font-raleway text-[#1b1a1ab3] pb-3">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <section className="px-6 ">
          <form onSubmit={handleAddCoffee} className=" flex flex-col mx-auto space-y-12 ">
            <fieldset className=" gap-6 pt-4  ">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm  font-raleway font-semibold ">
                    Name
                  </label>
                  <input
                  required
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm font-raleway font-semibold">
                    Available Quantity
                  </label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    placeholder="Enter coffee quantity"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm font-raleway font-semibold">
                    Supplier Name
                  </label>
                  <input
                  required
                    id="text"
                    type="supplier"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label className="text-sm font-raleway font-semibold">
                    Taste
                  </label>
                  <input
                    id="taste"
                    type="text"
                    name="taste"
                    placeholder="Enter coffee taste"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-raleway font-semibold"
                  >
                    Category
                  </label>
                  <input
                    id="category"
                    type="text"
                    name="category"
                    placeholder="Enter coffee category"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-raleway font-semibold"
                  >
                    Details
                  </label>
                  <input
                    id="details"
                    type="text"
                    name="details"
                    placeholder="Enter your coffee details"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <label
                    htmlFor="address"
                    className="text-sm font-raleway font-semibold"
                  >
                    Photo
                  </label>
                  <input
                    id="photo"
                    type="text"
                    name="photo"
                    placeholder="Enter your photo"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
              </div>
            </fieldset>
            <input
              
              type="submit"
              value="Add coffee"
              className="bg-[#D2B48C] py-2 border-2 border-[#331A15] font-rancho text-xl font-semibold text-[#331A15]"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCoffee;
