import { useForgotPassword } from "@/apis/auth";
import { useRef } from "react";
import Email from "@/utils/Email";
import { render } from "@react-email/components";
import { useSelector } from "react-redux";
import Error from "./Error";
import { FaCircle } from "react-icons/fa";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { mutate: forgotPassword, isLoading } = useForgotPassword();
  const { isAuthenticated } = useSelector((state) => state.auth.user);

  const submitHandler = (e) => {
    e.preventDefault();

    forgotPassword({ email: emailRef.current.value, html: render(<Email />) });
  };

  return !isAuthenticated ? (
    <div className="2xl:w-[1570px] w-11/12 m-auto h-screen ">
      <div className=" p-16 flex justify-center items-center   rounded-md">
        {/* -------------------------------------------------- */}

        <div className="bg-white p-8 py-10 w-1/3 rounded-md">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold mb-2">Password assistance</h1>
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
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={emailRef}
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
            </div>
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <FaCircle size={10} className=" animate-bounced" />
                </div>
              ) : (
                <button className="w-full text-white bg-red-500 px-10 py-3 font-medium rounded-md">
                  Continue
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Error />
  );
};

export default ForgotPassword;
