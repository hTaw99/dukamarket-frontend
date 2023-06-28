import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { lazy } from "react";

import Layout from "@/layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import Products from "./pages/Products";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import RequireAuth from "./components/RequireAuth";
import PersistLogin from "./components/PersistedLogin";
import { useGetCart } from "./apis/cart";
import { useDispatch } from "react-redux";
import OtpVerification from "./pages/OtpVerification";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout";
import { useTranslation } from "react-i18next";
import AfterPayment from "./pages/AfterPayment";

// const Home = lazy(() => import("./pages/Home"));
// const Layout = lazy(() => import("@/layout"));
// const Products = lazy(() => import("./pages/Products"));
// const Login = lazy(() => import("./pages/Login"));
// const Signup = lazy(() => import("./pages/Signup"));
// const Product = lazy(() => import("./pages/Product"));
// const Cart = lazy(() => import("./pages/Cart"));
// const OtpVerification = lazy(() => import("./pages/OtpVerification"));
// const ResetPassword = lazy(() => import("./pages/ResetPassword"));
// const Checkout = lazy(() => import("./pages/Checkout"));
// const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
// const Error = lazy(() => import("./pages/Error"));
// const AfterPayment = lazy(() => import("./pages/AfterPayment"));

function App() {
  // ##########################################
  const dispatch = useDispatch();
  const { data } = useGetCart();
  // useEffect(() => {
  //   if (data) {
  //     dispatch(setCart(data));
  //   }
  // }, [data]);
  // ##########################################
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  const router = createBrowserRouter([
    {
      element: <PersistLogin />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Layout />,

          children: [
            { index: true, element: <Home /> },
            { path: ":productId", element: <Product /> },
            { path: "products", element: <Products /> },
            { path: "forgot-password", element: <ForgotPassword /> },
            { path: "otp-verification", element: <OtpVerification /> },
            {
              path: "reset-password/:resetToken",
              element: <ResetPassword />,
            },
            // {
            //   element: <RequireAuth />,
            //   children: [
            //     {
            //       path: ":productId",
            //       element: <Product />,
            //     },
            //   ],
            // },
            { path: "cart", element: <Cart /> },
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
          ],
        },
        {
          element: <RequireAuth />,
          children: [
            { path: "checkout", element: <Checkout /> },
            { path: "checkout/order/:orderId", element: <AfterPayment /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

// function App() {
//   // ##########################################
//   useGetCart();
//   // ##########################################
//   const { i18n } = useTranslation();
//   document.body.dir = i18n.dir();

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route element={<PersistLogin />}>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="products" element={<Products />} />
//             <Route path=":productId" element={<Product />} />
//             <Route path="cart" element={<Cart />} />
//             <Route
//               path="reset-password/:resetToken"
//               element={<ResetPassword />}
//             />
//             <Route path="otp-verification" element={<OtpVerification />} />
//             <Route
//               path="reset-password/:resetToken"
//               element={<ResetPassword />}
//             />
//             <Route path="login" element={<Login />} />
//             <Route path="signup" element={<Signup />} />
//           </Route>
//           {/* private Routes */}
//           <Route element={<RequireAuth />}>
//             <Route path="checkout" element={<Checkout />}></Route>
//             <Route
//               path="checkout/order/:orderId"
//               element={<AfterPayment />}
//             ></Route>
//           </Route>
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
export default App;
