import React from "react";
import Cover from "./components/Cover";
import OutstandingSkills from "./components/OutstandingSkills";
import Timeline from "./components/Timeline";

const Profile = () => {
  return (
    <>
      <div className="gap-12 flex flex-col">
        <Cover />
        <OutstandingSkills />
        <Timeline />
        {/* Todo: Add Education component */}
        {/* <Education /> */}
        {/* Todo: Contact component */}
        {/* <Contact /> */}
        
      </div>
    </>
  );
};

export default Profile;
