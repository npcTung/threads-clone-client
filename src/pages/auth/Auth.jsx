import { useTheme } from "@/components";
import icons from "@/lib/icons";
import path from "@/lib/path";
import { setTitle } from "@/lib/utils";
import useCurrentStore from "@/zustand/useCurrentStore";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const { Sun, Moon } = icons;

const Auth = () => {
  const { theme, setTheme } = useTheme();
  const { isLoggedIn } = useCurrentStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate(path.HOME);
  }, [isLoggedIn]);

  let titleObj;
  if (window.location.pathname.split("/")[2] === "login")
    titleObj = "Đăng nhập";
  else if (window.location.pathname.split("/")[2] === "register")
    titleObj = "Đăng ký";
  else if (window.location.pathname.split("/")[2] === "forgot_password")
    titleObj = "Quên mật khẩu";
  else titleObj = "Trang chủ";

  setTitle(titleObj);

  return (
    <div className="w-full h-screen relative">
      <div
        className="absolute top-5 right-5 cursor-pointer"
        title={theme === "dark" ? "Chế độ tối" : "Chế độ sáng"}
        onClick={() => setTheme(theme === "dark" ? "ligth" : "dark")}
      >
        {theme === "dark" ? <Moon /> : <Sun />}
      </div>
      <Outlet />
    </div>
  );
};

export default Auth;
