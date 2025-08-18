import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <div className="h-full p-6 overflow-y-auto">
      <h2 className="text-2xl text-center font-bold mb-4 text-gray-800">
        THEON HUYNH
      </h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <Image
            width={1928}
            height={1928}
            src="/images/profile/avt.jpg"
            alt="Profile Picture"
            className="rounded-4xl mx-auto mb-4 w-1/3 aspect-square object-cover"
          />
          <h3 className="font-semibold uppercase text-center text-2xl space-y-10">
            Huỳnh Minh Trí
          </h3>
          <div>
            <p className="text-gray-600">DOB: 02/5/1996</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
