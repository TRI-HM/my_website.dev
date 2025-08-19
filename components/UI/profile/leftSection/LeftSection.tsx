import Image from "next/image";
import React from "react";
import Social from "./components/Social";

const LeftSection = () => {
  return (
    <div className="h-full p-6 overflow-y-auto items-center flex">
      <div className="bg-white p-4 rounded-2xl shadow">
        <span className="flex flex-row">
          <h2 className="basis-2/3 text-2xl text-center font-bold mb-4 text-gray-800">
            THEON HUYNH
          </h2>
          <h3 className=" flex-1 text-xl text-center font-semibold mb-4 text-gray-600">
            Frontend Developer
          </h3>
        </span>
        <Image
          width={1928}
          height={1928}
          src="/images/profile/avt.jpg"
          alt="Profile Picture"
          className="rounded-4xl mx-auto mb-4 w-2/3 aspect-square object-cover"
        />
        <p className="font-semi text-center text-3xl space-y-10">
          hello@huynhminhtri.com
        </p>
        <div className="text-center space-y-2 p-6">
          <p className="text-gray-600">DOB: 02/5/1996</p>
          <p className="text-gray-600">Ho Chi Minh city</p>
        </div>
        <div className="flex space-x-6 justify-center">
          <Social linkURL="#" iconURL="/images/profile/icons/facebook.webp" />
          <Social linkURL="#" iconURL="/images/profile/icons/instagram.webp" />
          <Social linkURL="#" iconURL="/images/profile/icons/linkedin.webp" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
