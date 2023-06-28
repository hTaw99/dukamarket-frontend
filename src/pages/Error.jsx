import { Link, useRouteError } from "react-router-dom";
import errorVideo from "../assets/error.mp4";
import notFoundImage from "/images/notFound.png";
import notAuthorizedImage from "/images/notAuthorized.png";

const Error = () => {
  const error = useRouteError();
  console.log({error})

  if (error?.response?.status === 404 || error.status === 404) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-1/4">
          <img src={notFoundImage} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-gray-800 font-semibold mb-2">
            Page Not found
          </h1>
          <p className="text-gray-500 mb-6">
            the page you are looking for can't be found.
          </p>
          <Link
            className="px-4 py-2 rounded-md bg-red-500 text-white capitalize"
            to={"/"}
          >
            go to home
          </Link>
        </div>
      </div>
    );
  }

  if (error?.response?.status === 401 || error?.response?.status === 403) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-1/4">
          <img src={notAuthorizedImage} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-gray-800 font-semibold mb-2">
            Not authorized
          </h1>
          <p className="text-gray-500 mb-6">
          You are not authorized to see this content.
          </p>
          <Link
            className="px-4 py-2 rounded-md bg-red-500 text-white capitalize"
            to={"/"}
          >
            go to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white flex rounded-md py-12 flex-col justify-start gap-8 items-center 2xl:w-[1570px] w-11/12 m-auto">
        <video muted="muted" autoPlay="autoplay" loop="loop">
          <source src={errorVideo} type="video/mp4" />
        </video>
        <div className="text-center">
          <h1 className="text-neutral-800 text-2xl font-extrabold mb-4">{`Oops! Something went wrong :(`}</h1>
          <div className="text-gray-500">
            <p className="mb-2">the page you are looking for can't be found.</p>
            <p>Maybe the links below can be helpful.</p>
            <p>
              Go back to DukaMarket
              {/* <Link to="/" className="underline">
              homepage
            </Link> */}
            </p>
          </div>
        </div>

        <a href="/" className="underline">
          Go to homepage
        </a>
      </div>
    </>
  );
};

export default Error;

// Oops! Something went wrong :(
//   The page you are looking for can't be found.

//   Maybe the links below can be helpful.

//   Go back to the IKEA homepage
