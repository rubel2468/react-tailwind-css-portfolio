import React, { useState } from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {
 
    

    return (
      
      <>
     
     <div class="flex justify-end ">
<nav class="self-center top-0 w-full max-w-7xl shadow">
    <div class="flex justify-between items-center text-black">
       
        <ul class="hidden md:flex items-center text-sm font-medium pr-10 ms-0">
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/">Home</Link></li>
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/contuct">Contact</Link></li>
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/skill">Services</Link></li>
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/about">About</Link></li>
        </ul> <button
            class="hidden md:flex md:order-3  uppercase md:mr-9 text-sm border border-white px-3 py-2 my-0 font-semibold hover:bg-yellow-400 hover:text-white rounded">register</button>
        <button class="block order-2 p-3 mx-10 md:hidden hover:bg-yellow-400 rounded-xl group">
            <div class="w-5 my-[3px] h-[3px] bg-black mb-[2px]"></div>
            <div class="w-5 my-[3px] h-[3px] bg-black mb-[2px]"></div>
            <div class="w-5 my-[3px] h-[3px] bg-black"></div>
            <div
                class="absolute top-0 -right-full opacity-0 h-screen w-[60%] border bg-yellow-400 group-focus:right-0 group-focus:opacity-100 transition-all ease-in duration-300 ">
                <ul class="flex flex-col items-center text-[18px] pt-[60px]">
                <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/">Home</Link></li>
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/contuct">Contact</Link></li>
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/skill">Services</Link></li>
            <li
                class="hover:text-white hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                <Link to="/about">About</Link></li>
                </ul>
            </div>
        </button>
    </div>
</nav>
</div> 
      
      </>
    );
};

export default Navbar;
