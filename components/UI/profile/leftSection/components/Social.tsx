import Image from "next/image";
import React from "react";

type SocialType = {
  linkURL: string;
  iconURL: string;
};
const Social = (props: SocialType) => {
  return (
    <div>
      <a href={props.linkURL} target="_blank" rel="noopener noreferrer">
        <Image src={props.iconURL} alt="Social Icon" width={24} height={24} />
      </a>
    </div>
  );
};

export default Social;
