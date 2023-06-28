import { Link, useLocation } from "react-router-dom";
import BillingAddress from "@/components/BillingAddress";
import Delivery from "@/components/Delivery";
import Confirmation from "@/components/Confirmation";
import { useSelector } from "react-redux";

const Checkout = () => {
  const { step } = useSelector((state) => state.checkout);

  const stepsComponents = {
    1: <BillingAddress />,
    2: <Delivery />,
    3: <Confirmation />,
  };

  return (
    <div className=" w-2/5 mx-auto ">
      <header className="mb-16 ">
        <nav className="text-white bg-gray-800 rounded-b-lg p-8 flex items-center justify-between">
          <Link to="/">
            <img src="/images/logo.svg" alt="Dujamarket logo" width={180} />
          </Link>
          <Link to="/" className="text-xs underline capitalize">
            continue shoping
          </Link>
        </nav>
      </header>

      {/* <p className="text-sm">
          There is no shoppingcart available. Add products to the shopping cart
          in the store.
        </p>
       */}

      <div className="flex flex-col gap-6">{stepsComponents[step]}</div>
    </div>
  );
};

export default Checkout;
