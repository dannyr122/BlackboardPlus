import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const HeaderSidebar = () => {
  return (
    <>
      <header className="flex justify-between h-20 bg-black fixed inset-x-0	inset-y-0	z-100">
        <div className="flex justify-center items-center pl-5">
          <Link to="/">
            <img className="logo" src="/CustomNavigationLogo.png" />
          </Link>
        </div>
        <div className="flex justify-center items-center pr-14">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          ></UserButton>
        </div>
      </header>

      <nav className="sidebar fixed bg-black text-white left-0 bottom-0 top-20 w-24 z-200">
        <Link to="/courses">
          <div className=" hover:bg-gray-400 h-20 flex flex-col justify-center items-center cursor-pointer">
            <img src="icons/courses.svg" className="w-6" />
            <div>Courses</div>
          </div>
        </Link>
        <Link to="/grades">
          <div className="sidebar hover:bg-gray-400 h-20 flex flex-col justify-center items-center cursor-pointer">
            <img src="icons/grades.svg" className="w-6" />
            <div>Grades</div>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default HeaderSidebar;
