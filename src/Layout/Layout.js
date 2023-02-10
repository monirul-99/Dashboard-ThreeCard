import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  AiOutlineBarChart,
  AiOutlineCreditCard,
  AiOutlineHistory,
  AiOutlineMore,
  AiOutlineSetting,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";

import { RxDashboard } from "react-icons/rx";

const Layout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-[#0B150F] relative">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="w-80 mt-10">
            <div className="space-y-2 pl-14">
              <div className="avatar">
                <div className="w-20 rounded-full  ring-1">
                  <img
                    src="https://lh3.googleusercontent.com/a/AEdFTp6jjsk3edZwHidZQhoWs0NjLme-tnh_EZdJtWyF=s96-c"
                    alt=""
                  />
                </div>
              </div>

              <div className="">
                <h1 className="text-white font-Poppins">Monirul Islam</h1>
                <p className="text-gray-500 font-Poppins text-sm">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <nav
              aria-label="Main Nav"
              className="flex flex-col space-y-5 font-Poppins capitalize mt-16 pl-10"
            >
              <Link
                to="/dashboard"
                className="block px-4 py-2.5 font-medium text-gray-200 hover:bg-[#97F675] hover:text-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <RxDashboard size={18} />
                  <p className="-mb-0.5">Dashboard</p>
                </div>
              </Link>

              <Link className="block px-4 py-2.5 font-medium text-gray-200 hover:bg-[#97F675] hover:text-gray-700">
                <div className="flex items-center space-x-3">
                  <AiOutlineUser size={18} />
                  <p className="-mb-0.5"> Account's</p>
                </div>
              </Link>

              <Link className="block px-4 py-2.5 font-medium text-gray-200 hover:bg-[#97F675] hover:text-gray-700">
                <aside className="flex items-center space-x-3">
                  <AiOutlineBarChart size={18} />
                  <p className="-mb-0.5">analytics</p>
                </aside>
              </Link>

              <Link className="block px-4 py-2.5 font-medium text-gray-200 hover:bg-[#97F675] hover:text-gray-700">
                <aside className="flex items-center space-x-3">
                  <AiOutlineCreditCard size={18} />
                  <p className="-mb-0.5">Payments</p>
                </aside>
              </Link>

              <Link className="block px-4 py-2.5 font-medium text-gray-200 hover:bg-[#97F675] hover:text-gray-700">
                <aside className="flex items-center space-x-3">
                  <AiOutlineTeam size={18} />
                  <p className="-mb-0.5">Team</p>
                </aside>
              </Link>
              <Link className="block px-4 py-2.5 font-medium text-gray-200 hover:bg-[#97F675] hover:text-gray-700">
                <aside className="flex items-center space-x-3">
                  <AiOutlineSetting size={18} />
                  <p className="-mb-0.5">Setting</p>
                </aside>
              </Link>
            </nav>
          </ul>

          <div className="absolute bottom-8 w-full">
            <div className="bg-gray-200 w-4/5 mx-auto p-5 rounded-2xl">
              <aside className="flex justify-between items-center mb-4">
                <h1 className="cursor-pointer">
                  <AiOutlineHistory size={28} />
                </h1>
                <h1 className="cursor-pointer">
                  <AiOutlineMore size={30} />
                </h1>
              </aside>
              <aside>
                <h1 className="font-Poppins font-semibold text-xl mb-2">
                  History Available
                </h1>
                <p className="text-sm font-Poppins">
                  Check your weekly transaction reports
                </p>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
