import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { MdLogin } from "react-icons/md";
import { useState } from "react";

import { Link } from "react-router-dom";

import bglogin from "../../../assets/Admin/bg.jpg";
import InputBox from "../../../assets/components/InputBox";
import Button from "../../../assets/components/Button";

function SignUp() {
    const [userName, SetuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const sendOtp = () => {
    console.log(phone_number);
  };
  return (
    <div
      className=" bg-[cover-left-70%] md:bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bglogin})` }}
    >
      <div className=" w-[100vw] flex items-center justify-evenly md:justify-end h-[100vh]">
        <div className="py-16 md:mr-10 lg:mr-24  bg-opacity-25 backdrop-blur-4 backdrop-opacity-25 rounded-10 shadow-3xl border border-green-900 border-opacity-20  w-[80vw]  md:w-[45vw] lg:w-[30vw] rounded-lg ">
          <h1 className="text-black  text-xl md:text-2xl flex justify-center gap-2  w-full">
            Welcome to{" "}
            <Link
              to={"/"}
              className="text-secondary gap-2 flex items-center  font-semibold"
            >
              Thaaragai
              <GiThreeLeaves />
            </Link>
          </h1>
          <h5 className="flex items-center justify-center mt-8 font-semibold text-lg md:text-2xl tracking-[10px]">
            SIGNUP{" "}
            <span className="text-xl md:text-2xl text-secondary">
              <MdLogin />
            </span>
          </h5>

          <form className="mt-10 flex justify-center flex-wrap gap-6">
            <div className="w-5/6">
              <InputBox
                id={userName}
                value={userName}
                changeFun={SetuserName}
                placeholder="Enter Your Username"
              />
            </div>
            <div className="w-5/6">
              <InputBox
                id={email}
                value={email}
                changeFun={setEmail}
                placeholder="Enter Your Email"
              />
            </div>
            <div className="w-5/6">
              <InputBox
                id={password}
                value={password}
                type={"password"}
                changeFun={setPassword}
                placeholder="Enter Password"
              />
            </div>
            <div className="w-5/6">
              <Button lblName={"SignIn"} onclick={sendOtp} />
            </div>

            <div className="flex ">
                <p>Already have Account</p>
              <Link className="text-secondary" to={'/login'}>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
