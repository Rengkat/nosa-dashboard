"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";
import { useLoginMutation } from "../../../../Redux/services/AuthSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addAdminDetail } from "../../../../Redux/services/AppSlice";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setNotification({ message: "Please fill in all fields.", type: "error" });
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(addAdminDetail(res.user));
      router.push("/");
    } catch (error) {
      let errorMessage = "An error occurred during login.";
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      setNotification({ message: errorMessage, type: "error" });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="w-20 h-24 mx-auto">
        <Image src="/logo.png" height={500} width={500} alt="Logo" className="object-cover" />
      </div>
      <div>
        <h1 className="text-black font-extrabold text-3xl md:text-4xl text-center my-6">
          Login as Admin
        </h1>
        {notification.message && (
          <div
            className={`p-3 mb-4 rounded-md text-center ${
              notification.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}>
            {notification.message}
          </div>
        )}
        <form className="w-full">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="block p-3 w-full border-2 rounded-md mt-4 outline-none border-gray-300 placeholder:text-gray-400"
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="block p-3 w-full border-2 rounded-md mt-4 outline-none border-gray-300 placeholder:text-gray-400"
            type="password"
            placeholder="Password"
          />
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="text-white bg-primary-500 shadow flex items-center justify-center gap-3 w-full mt-6 p-3 rounded-md font-bold hover:bg-primary-600 transition-colors">
            <MdOutlineLogin fontSize={24} />
            <span className="text-xl">{isLoading ? "Logging in..." : "Login"}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
