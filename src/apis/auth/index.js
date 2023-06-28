import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosDefault, axiosPrivate } from "../AppClient";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setUser } from "@/store/features/authSlice";
import { logout } from "@/store/features/authSlice";

export const register = async (userData) => {
  const { data: resData } = await axiosPrivate({
    url: "auth/register",
    method: "POST",
    data: userData,
  });

  return resData;
};

export const useRegister = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: ({ user, accessToken }) => {
      dispatch(setUser({ ...user, accessToken }));
      navigate("/");
    },
  });
};

export const login = async (userData) => {
  const { data: resData } = await axiosPrivate({
    url: "auth/login",
    method: "POST",
    data: userData,
  });

  return resData;
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ user, accessToken }) => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      dispatch(setUser({ ...user, accessToken }));
      navigate(from, { replace: true });
    },
  });
};

export const refreshTokenFn = async () => {
  const { data } = await axiosPrivate({
    url: "auth/refresh",
    method: "GET",
  });
  return data;
};

export function useRefreshToken({ enabled, onSuccess, onError }) {
  return useQuery({
    queryKey: ["refresh-token"],
    queryFn: refreshTokenFn,
    enabled,
    onSuccess,
    onError,
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useQuery({
    queryKey: ["logout"],
    queryFn: async () => {
      const { data } = await axiosPrivate({
        url: "/auth/logout",
        method: "GET",
      });
      return data;
    },
    enabled: false,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-cart"] });
      dispatch(logout());
    },
  });
}

const forgotPassword = async (userData) => {
  const { data } = await axiosDefault({
    url: "/auth/forgotPassword",
    method: "POST",
    data: userData,
  });

  return data;
};

export const useForgotPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: () => {
      navigate("/otp-verification");
    },
  });
};

const verifyOtp = async (otp) => {
  const { data } = await axiosDefault({
    url: "/auth/otpVerification",
    method: "POST",
    data: otp,
  });

  return data;
};

export const useOtpVerification = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: verifyOtp,
    onSuccess: (data) => {
      navigate(`/reset-password/${data.resetToken}`);
    },
  });
};

const resetPassword = async ({ password, resetToken }) => {
  console.log(password);
  const { data } = await axiosDefault({
    url: `/auth/resetPassword/${resetToken}`,
    method: "PATCH",
    data: { password },
  });

  return data;
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: ({ user, accessToken }) => {
      dispatch(setUser({ ...user, accessToken })),
        navigate("/", { replace: true });
    },
  });
};
