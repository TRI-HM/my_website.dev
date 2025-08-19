import Image from "next/image";
import React from "react";

type SpecializationItemProps = {
  title: string;
  description: string;
  project?: string;
  iconURL: string;
};

const SpecializationItem = ({
  title,
  description,
  project,
  iconURL,
}: SpecializationItemProps) => {
  return (
    <div className="mb-4 border-4 border-gray-400 rounded-4xl p-10  flex flex-row">
      <div className="basis-3/4 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <p className="italic text-[0.9rem]">{project}</p>
      </div>
      <div className="basis-1/4 flex items-center justify-center">
        <Image
          src={iconURL}
          alt="Specialization Image"
          width={70}
          height={70}
        />
      </div>
    </div>
  );
};

const _Specialization = () => {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Specialization</h2>

      <SpecializationItem
        title="Frontend Development"
        description="Building responsive and interactive user interfaces using React, Next.js, and Tailwind CSS."
        iconURL="/images/profile/icons/dev.webp"
      />
      <SpecializationItem
        title="Backend Development"
        description="Creating robust and scalable server-side applications using Node.js, Express, and MongoDB."
        project="5 Project: E-commerce API"
        iconURL="/images/profile/icons/dev.webp"
      />
      <SpecializationItem
        title="UI/UX Design"
        description="Designing intuitive and engaging user experiences through user research, wireframing, and prototyping."
        iconURL="/images/profile/icons/dev.webp"
      />
    </div>
  );
};

export default _Specialization;
