import { useResetPassword } from "@/apis/auth";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const { mutate: resetPassword } = useResetPassword();
  const { resetToken } = useParams();

  const submitHandler = (e) => {
    e.preventDefault();
    resetPassword({password, resetToken});
  };
  return (
    <div className="2xl:w-[1570px] w-11/12 m-auto h-screen ">
      <div className=" p-16 flex justify-center items-center   rounded-md">
        {/* -------------------------------------------------- */}

        <div className="bg-white p-8 py-10 w-1/3 rounded-md">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Set new password</h1>
            <p className="text-sm">
              Enter the email address associated with your Dukamarket account.
            </p>
          </div>

          <form
            className="space-y-6 w-full"
            action="#"
            method="POST"
            onSubmit={submitHandler}
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md flex flex-col gap-4 ">
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
                  placeholder="New password"
                />
              </div>
              {/* <div>
                <label htmlFor="confrim-password" className="sr-only">
                  Confirm password
                </label>
                <input
                  //   onChange={(e) => setPasswordConfirm(e.target.value)}
                  id="confrim-password"
                  name="confrim-password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder="Confirm new password"
                />
              </div> */}
            </div>
            <div>
              <button className="w-full text-white bg-red-500 px-10 py-3 font-medium rounded-md">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
