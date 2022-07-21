import React from "react";
import Lottie from "lottie-react";
import bgAnimate from "../../assets/register-animate.json";
import FormRegister from "./FormRegister/FormRegister";
export default function RegisterPage() {
  return (
    <div
      style={{
        backgroundImage: `url(http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg)`,
        backgroundPosition: `center bottom`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" w-screen h-screen flex  items-center "
    >
      <div className="flex w-full h-full flex-col items-center ">
        <div className="w-1/2  ">
          <Lottie className="mt-20" animationData={bgAnimate} loop={true} />
        </div>
        <div className="w-1/2   mr-20  p-5 rounded bg-white">
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
