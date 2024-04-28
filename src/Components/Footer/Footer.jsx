import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F6F3EE]">
      <div className="pt-10">
        <div className="grid grid-cols-2 border-black border-b border-t">
          <div className="border-black border-r py-20 pl-20">
            <h1 className="font-semibold font-mono text-[20px]">Pages</h1>
            <div className="mt-3 flex flex-col gap-2">
              <Link to='/'><p>Home</p></Link>
              <Link to='/addArtAndCraft'><p>Add Art & Craft</p></Link>
              <Link to='/allArtAndCraftItems'><p>All Art & Craft Items</p></Link>
              <Link to='/myArtAndCraftList'><p>My Art & Craft List</p></Link>
            </div>
          </div>
          <div className=" py-20 pl-20">
            <div className="mt-3 flex flex-col gap-2">
              <h1 className="font-semibold font-mono text-[20px]">Info</h1>
              <p>Faq</p>
              <p>Photo gallery</p>

            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
            <div className="hover:bg-black hover:text-white cursor-pointer py-5 flex justify-center border-r border-black">
                <h1>Facebook</h1>
            </div>
            <div className="hover:bg-black hover:text-white cursor-pointer py-5 flex justify-center border-r border-black">
                <h1>Instagram</h1>
            </div>
            <div className="hover:bg-black hover:text-white cursor-pointer py-5 flex justify-center border-r border-black">
                <h1>Behance</h1>
            </div>
            <div className="hover:bg-black hover:text-white cursor-pointer py-5 flex justify-center border-r border-black">
                <h1>Pinterest</h1>
            </div>
            <div className="hover:bg-black hover:text-white cursor-pointer py-5 flex justify-center">
                <h1>Youtube</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
