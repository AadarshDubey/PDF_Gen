// src/pages/Login.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic (e.g., API call)
    console.log({ email, password });
    // Clear input fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen bg-customBlack text-white flex flex-col">
      <nav className="bg-RichBlack flex justify-between items-center p-[8px] pr-[80px] pb-[8px] pl-[80px] relative z-10">
        <div className="flex items-center">
          <img src="/img/icon.png" alt="Levitation Logo" className=" h-[71px] w-[71px] mr-2" />
          <div className="leading-tight">
            <span className="font-bold text-[20px] font-sans">levitation</span> <br />
            <span className="font-bold text-[10px] font-sans">infotech</span>
          </div>
        </div>
        <button className="bg-RichBlack border-2 border-LimeGreen px-4 py-2 rounded text-LimeGreen">
  Connect People with Technology
</button>

      </nav>

      <div className="flex flex-1 items-center justify-center mr-5">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full p-6">
          <div className="hidden md:block">
            <img
              src="/img/lev.png"
              alt="Office Environment"
              className="rounded-lg shadow-lg p-4"
            />
          </div>

          <div className="mr-28 py-14 mt-14">
            <h2 className="text-2xl font-bold mb-2">Let the Journey Begin!</h2>
            <p className="mb-8 text-gray-400">
            This is basic login page which is used for levitation <br /> assignment purpose. 
            </p>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm mb-2">Email Address</label>
                <div className="flex items-center bg-gray-700 p-2 rounded py-4">
                  <input
                    type="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-700 text-white flex-1 border-none outline-none"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Please use your registered email.
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm mb-2">Password</label>
                <div className="flex items-center bg-gray-700 p-2 py-4 rounded">
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-gray-700 text-white flex-1 border-none outline-none"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Make sure your password is secure.
                </p>
              </div>

              <button
                type="submit"
                className=" px-6  bg-BlackLG py-2 rounded text-LimeGreen "
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <img
          src="/img/Ellipse7.png"
          alt="Ellipse Gradient"
          className="absolute top-0 right-0 w-1/4"
        />    </div>
  );
};

export default Login;
