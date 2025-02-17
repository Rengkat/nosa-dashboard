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
    <div className="w-full max-w-[80%] mx-auto lg:max-w-[70%] bg-white rounded-lg shadow-md py-20 px-8">
      {" "}
      <div className="w-20 h-24 mx-auto">
        <Image src={"/logo.png"} height={500} width={500} className="object-cover" />
      </div>
      <div>
        <h1 className="text-black font-extrabold text-4xl capitalize text-center my-10">
          Login as Admin
        </h1>
        <form className="w-full max-w-[50%] mx-auto">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="block p-[1rem] w-full border-[2px] rounded-md mt-5 outline-none border-gray-300 placeholder:text-gray-400 "
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="block p-[1rem] w-full border-[2px] rounded-md mt-5 outline-none border-gray-300 placeholder:text-gray-400 "
            type="password"
            placeholder="Password"
          />
          <button
            onClick={handleSubmit}
            className="text-white bg-primary-500 shadow flex items-end gap-5 w-full mt-5 p-4 rounded-md justify-center font-bold">
            <MdOutlineLogin fontSize={30} /> <span className="text-xl">Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
