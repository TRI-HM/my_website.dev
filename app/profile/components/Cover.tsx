import Image from "next/image";
import React from "react";
import TypingEffect from "./typingEffect/TypingEffect";

const Cover = () => {
  return (
    <section
      className="flex flex-row items-center h-screen bg-gray-100 p-6"
      style={{
        backgroundImage: "url('/images/profile/cover-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="flex flex-col w-3/5">
        <div className="ml-32">
          <h1 className="text-white text-[3.5rem] font-bold mb-4">
            I&#39;m{" "}
            <TypingEffect
              strings={[
                "Huỳnh Minh Trí",
                "Theon Huynh",
                "Web Developer",
                "Project Management",
                "Full Stack Developer",
              ]}
              typeSpeed={60}
              backSpeed={30}
            />
          </h1>
          <p className="text-3xl text-gray-500">
            Welcome to your profile page. Here you can manage your account
            settings.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="p-4 w-fit rounded-lg shadow-lg bg-white">
          <Image
            src="/images/profile/cover.jpg"
            width={300}
            height={200}
            alt="Cover Image"
            // layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Cover;
