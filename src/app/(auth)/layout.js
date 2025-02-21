"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Loading from "./loading";

const AuthLayout = ({ children }) => {
  const router = useRouter();
  const isLogin = useSelector((state) => state.app?.isLogin);
  const [isLoading, setIsLoading] = useState(true);
  console.log(isLogin);
  useEffect(() => {
    if (isLogin === false) {
      router.replace("/login");
    } else if (isLogin === true) {
      router.replace("/");
    }
    setIsLoading(false);
  }, [isLogin, router]);

  if (isLoading) {
    return <Loading />;
  }

  if (isLogin) {
    return null;
  }

  return (
    <div className="bg-primary-900 min-h-screen flex items-center justify-center p-4">
      {children}
    </div>
  );
};

export default AuthLayout;
