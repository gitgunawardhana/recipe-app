import React from "react";
import logo from "../../assets/logo.png";
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };


  return (
    <div className="flex items-center justify-between px-6 md:px-14 lg:px-36 bg-white">
      <div className="min-w-28 max-w-28">
        <img className="max-w-28" src={logo}></img>
      </div>
      <div className="min-w-28 max-w-56 flex flex-wrap justify-center items-center gap-2 uppercase text-sm">
        <button
          className={localStorage.getItem("page") === "dashboard"?"font-semibold text-sm uppercase":"text-sm uppercase"}
          onClick={() => {
            navigate("/dashboard");
            localStorage.setItem("page", "dashboard");
          }}
        >
          Home
        </button>
        <button
          className={localStorage.getItem("page") === "favorites"?"font-semibold text-sm uppercase":"text-sm uppercase"}
          onClick={() => {
            navigate("/favorites");
            localStorage.setItem("page", "favorites");
          }}
        >
          Favorite
        </button>
      </div>
      <div className=" sm:min-w-28 sm:max-w-28 flex justify-end">
        <button onClick={handleLogout} className="flex items-center">
          <IoLogOutOutline />
        </button>
      </div>
    </div>
  );
};
