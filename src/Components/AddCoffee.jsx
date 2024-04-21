import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const AddCoffee = () => {
  return (
    <div className="container  bg-cover bg-center flex justify-center items-center pt-20 object-cover flex-col">
        <Link to='/' className="absolute flex items-center  font-rancho text-xl font-semibold top-9 drop-shadow-xl hover:bg-[#D2B48C] hover:px-3 py-1 lg:left-72 left-4"><FaArrowLeftLong className="mr-2" /> Back to home</Link>
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
          <form className=" flex flex-col mx-auto space-y-12 ">
            <fieldset className=" gap-6 pt-4  ">
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label  className="text-sm ">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900  "
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="lastname" className="text-sm">
                    Last name
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <label htmlFor="address" className="text-sm">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder=""
                    className="w-full outline-none border-none px-2 py-2 text-gray-900"
                  />
                </div>
              </div>
            </fieldset>
            <input
              type="submit"
              value="Add coffee"
              className="bg-[#D2B48C] py-2 border-2 border-[#331A15] font-rancho text-xl font-medium text-[#331A15]"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddCoffee;
