import React, { useState } from "react";
import {BrowserRouter as ReactRouter,Route,Routes} from "react-router-dom"
import ProfileDetail from "./components/ProfileDetail";
import EditOption from "./components/EditOption";


const Profile = () => {
  const [IsOpen, SetIsOpen] = useState(false);
  const changeedit = () => {
    SetIsOpen((prev) => !prev);
  };
  console.log(IsOpen);
  return (
    <div className="container mx-auto">
      {IsOpen ? (
        <EditOption changeedit={changeedit} />
      ) : (
        <div>
          <ProfileDetail changeedit={changeedit} />
        
        </div>
      )}

      {/* bottom section */}
    </div>
  
  );
};
export default Profile;
