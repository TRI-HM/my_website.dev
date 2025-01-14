import React from "react";
import Image from "next/image";
import imageManagement from "@/app/utils/imageManagement";

const CharacterEmergingFromImage = () => {
  return (
    <div>
      <Image
        src={imageManagement.main.src}
        alt="Character Emerging From Image"
        width={500}
        height={500}
        objectFit="cover"
        style={{ filter: "drop-shadow(8px 8px 10px #000)" }}
      />
    </div>
  );
};

export default CharacterEmergingFromImage;
