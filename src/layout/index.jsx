import { lazy, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Topbar from "./topbar";
import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";

// import CartSideModel from "@/components/Models/CartSideModel";
// import QuickViewModel from "@/components/Models/QuickViewModel";
// import PictureModel from "@/components/Models/PictureModel";
// import CompareModel from "@/components/Models/CompareModel";

const CartSideModel = lazy(() => import("@/components/Models/CartSideModel"));
const QuickViewModel = lazy(() => import("@/components/Models/QuickViewModel"));
const PictureModel = lazy(() => import("@/components/Models/PictureModel"));
const CompareModel = lazy(() => import("@/components/Models/CompareModel"));

export default function LayoutPage() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // smooth
    });
  }, [pathname]);

  // useEffect(() => {
  //   const onScroll = () => {
  //     document.body.className = 'custom-scroll'
  //   }
  //   window.addEventListener('scroll', onScroll);
  //   return () => {
  //     window.removeEventListener(onScroll)
  //   }
  // }, [])

  return (
    <div>
      <Topbar />
      <Header />
      <Navbar />
      <main className="py-8 bg-gray-100">
        <Outlet />
      </main>
      <Footer />
      {/* ------- models ------ */}
      <CartSideModel />
      <QuickViewModel />
      <CompareModel />
      <PictureModel />
    </div>
  );
}
