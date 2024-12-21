"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  const isLogin = useSelector((state) => state.app?.isLogin);
  useEffect(() => {
    if (isLogin) {
      router.replace("/");
    }
  }, [isLogin, router]);

  if (isLogin) return null;

  return (
    <div className="bg-primary-900 w-full h-screen flex items-center justify-center">
      <p>{children}</p>
    </div>
  );
};

export default AuthLayout;
