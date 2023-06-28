import { useRegister } from "@/apis/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const { mutate: addUser } = useRegister();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    addUser({
      name: firstName + " " + lastName,
      email,
      password,
      passwordConfirm,
    });
  };

  return (
    <div className="2xl:w-[1570px] w-11/12 m-auto h-screen">
      <div className="flex h-full justify-center items-start">
        <div className="bg-white  w-1/3 p-8 py-10  rounded-md">
          {/* <div className="flex min-h-full w-full">
            <div className="w-full max-w-md"> */}

          <form
            onSubmit={submitHandler}
            className="space-y-6 w-full"
            action="#"
            method="POST"
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <h1 className="text-2xl text-center font-semibold text-gray-800">
              Create an Dukamrket account
            </h1>
            <div className="rounded-md flex flex-col gap-4 ">
              <div className="flex justify-between items-center gap-4">
                <div className="w-full">
                  <label htmlFor="first-name" className="sr-only">
                    First name
                  </label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    id="first-name"
                    name="firstname"
                    type="name"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                    placeholder="First name"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="last-name" className="sr-only">
                    Last name
                  </label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    id="last-name"
                    name="lastname"
                    type="name"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="confrim-password" className="sr-only">
                  Confirm password
                </label>
                <input
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  id="confrim-password"
                  name="confrim-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-gray-600">
                  Already have an account?
                  <Link to="/login" className="text-blue-500">
                    Login
                  </Link>
                </a>
              </div>
            </div>

            <div>
              <button className="w-full text-white bg-red-500 px-10 py-3 font-medium rounded-md">
                Create account
              </button>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Signup;
