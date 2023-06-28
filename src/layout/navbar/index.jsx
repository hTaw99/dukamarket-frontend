import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation(["navbar"]);
  return (
    <nav className="sticky top-0 z-40 py-3 bg-primary-1">
      <div className="container text-white">
        <ul className="flex gap-10">

          <li className={`flex items-center gap-2  ${i18n.language === "ar" ? "border-l pl-10": "border-r pr-10"}   border-gray-500 cursor-pointer hover:text-red-500`}>
            <RxHamburgerMenu size={24} />
            <Link className="text-sm font-semibold uppercase">
              {t("all-categories")}
            </Link>
          </li>


          <li className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <Link to="/" className="text-sm font-semibold uppercase">
              {t("home")}
            </Link>
          </li>


          <li className="flex items-center gap-1 cursor-pointer hover:text-red-500">
            <Link to="products" className="text-sm font-semibold uppercase">
              {t("shop")}
            </Link>
          </li>


        </ul>
      </div>
    </nav>
  );
}
