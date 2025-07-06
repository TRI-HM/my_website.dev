import React from "react";
import Cover from "./components/Cover";
import OutstandingSkills from "./components/OutstandingSkills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Info from "./components/Info";

const Profile = () => {
  return (
    <>
      <div className="gap-12 flex flex-col">
        <Cover />
        <Info />
        <OutstandingSkills />
        <Timeline />
        {/* Todo: Add Education component */}
        {/* <Education /> */}
        <Contact />
      </div>
    </>
  );
};

export default Profile;
