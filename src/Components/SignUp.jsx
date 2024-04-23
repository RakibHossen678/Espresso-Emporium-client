import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result.user?.metadata.creationTime;
        const user = { email, createdAt };

        

        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "success!",
                text: "User created successfully",
                icon: "success",
                confirmButtonText: "ok",
              });
            }
            form.reset();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full max-w-3xl mx-auto mt-24 p-8 space-y-3 rounded-xl bg-[#f4f3f09d]">
      <Link
        to="/"
        className="absolute flex items-center  font-rancho text-xl font-semibold top-9 drop-shadow-xl hover:bg-[#D2B48C] hover:px-3 py-1 lg:left-[460px]  left-4"
      >
        <FaArrowLeftLong className="mr-2" /> Back to home
      </Link>
      <h1 className="text-5xl font-bold text-center font-rancho  py-1 text-[#374151] drop-shadow-2xl">
        Sign Up
      </h1>
      <p className="text-center font-raleway text-[#1b1a1ab3] pb-3">
        Sign Up to create new account
      </p>
      <form
        onSubmit={handleSignUp}
        noValidate=""
        action=""
        className="space-y-6"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block ont-raleway font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 outline-none rounded-md "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block ont-raleway font-semibold">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 outline-none rounded-md "
          />
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className="block    font-raleway font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-md outline-none"
          />
          <div className="flex justify-end text-xs text-gray-400"></div>
        </div>
        <div className="space-y-1 text-sm">
          <label
            htmlFor="password"
            className="block    font-raleway font-semibold"
          >
            PhotoURL
          </label>
          <input
            type="text"
            name="photo"
            id="photo"
            placeholder="Enter your photoURL"
            className="w-full px-4 py-3 rounded-md outline-none"
          />
          <div className="flex justify-end text-xs text-gray-400"></div>
        </div>
        <input
          type="submit"
          value="Sign in"
          className="bg-[#D2B48C] py-2 border-2 border-[#331A15] font-rancho text-xl font-semibold w-full text-[#331A15]"
        />
      </form>

      <p className="text-xs text-center sm:px-6 text-gray-400 font-raleway text-[#1b1a1ab3]">
        Already have account?
        <Link to="/signIn">
          <a rel="noopener noreferrer" href="#" className="underline ">
            Sign in
          </a>
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
