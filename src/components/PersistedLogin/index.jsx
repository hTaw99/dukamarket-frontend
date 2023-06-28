import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useRefreshToken } from "@/apis/auth";
import { logout, setUser, setUserOnRefresh } from "@/store/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";

export default function PersistLogin() {
  const { isAuthenticated } = useSelector((state) => state.auth.user);
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const { fetchStatus } = useRefreshToken({
    enabled: !isAuthenticated && status === "unknown",
    onSuccess: (data) => {
      dispatch(setUserOnRefresh(data));
    },
    onError: () => {
      dispatch(logout());
    },
  });

  useEffect(() => {
    if (fetchStatus === "idle") {
      setLoading(false);
    }
  }, [fetchStatus]);

  if (isLoading) return <Loading />;
  return <Outlet />;
}
