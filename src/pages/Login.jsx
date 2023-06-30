import { useLogin } from "@/apis/auth";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TiWarningOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { FaCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { t } = useTranslation(["login"]);

  const { mutate: loginUser, error, isError, isLoading } = useLogin();
  const errorMsg = error?.response?.data?.msg;

  const location = useLocation();

  const onSubmit = (data) => {
    loginUser({ email: data.email, password: data.password });
  };

  return (
    <div className="2xl:w-[1570px] w-11/12 m-auto h-screen ">
      <div className="grid grid-cols-2  items-start p-16 px-40  rounded-md">
        {/* -------------------------------------------------- */}

        <div>
          <h1 className="w-2/3 capitalize leading-normal text-4xl font-semibold mb-6 rtl:text-3xl text-gray-800">
            {t("dukamarket-account")}
          </h1>
          <p className="mb-10 w-5/6 text-gray-500">
            {t("dukamarket-account-description")}
          </p>
          <Link
            to="/signup"
            className="capitalize text-gray-800 border border-gray-400 px-10 py-3 font-medium rounded-md rtl:font-semibold"
          >
            {t("create-account")}
          </Link>
        </div>

        {/* -------------------------------------------------- */}

        <div className="bg-white p-8 py-10 rounded-md">
          {/* <div className="flex min-h-full w-full">
            <div className="w-full max-w-md"> */}

          <form
            className="space-y-6 w-full"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* <input type="hidden" name="remember" defaultValue="true" /> */}
            <div className="rounded-md flex flex-col gap-4 ">
              {location?.state?.fromReview && (
                <div className="flex justify-center items-center gap-2 text-orange-400">
                  <TiWarningOutline size={24} />
                  To submit review, you must be logged in
                </div>
              )}
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  className="placeholder:capitalize relative block w-full appearance-none rounded-md  border 
                       outline-none border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder={t("email")}
                  {...register("email", {
                    required: "Please provide your email ",
                  })}
                />
                <span className="text-xs text-red-500">
                  {errors.email?.message}
                </span>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  {...register("password", {
                    required: "Please provide your password ",
                  })}
                  className="placeholder:capitalize relative block w-full outline-none appearance-none rounded-md border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                  placeholder={t("password")}
                />
                <span className="text-xs text-red-500">
                  {errors.password?.message}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ltr:ml-2 rtl:mr-2 block text-sm capitalize text-gray-900"
                >
                  {t("remember-me")}
                </label>
              </div>

              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="font-medium capitalize text-blue-600 hover:text-blue-500"
                >
                  {t("forgot-password")}
                </Link>
              </div>
            </div>
            {isError && (
              <h1 className="text-center text-red-500 capitalize">
                {errorMsg}
              </h1>
            )}
            <div>
              {isLoading ? (
                <div className="flex justify-center items-center w-full">
                  <FaCircle size={10} className=" animate-bounced" />
                </div>
              ) : (
                <button className="w-full capitalize text-white bg-red-500 px-10 py-3 font-medium rounded-md">
                  {t("signin")}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Login;
