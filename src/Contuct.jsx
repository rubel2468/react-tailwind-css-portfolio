import React from 'react'

const Contuct = () => {
  return (

    <>
    <div class="grid " data-aos="flip-right">
<div class=" h-72 flex items-center justify-center">
    <div class="flex flex-col max-w-4xl items-center justify-center">
        <div class=" text-white text-4xl font-bold">Contact Us</div>
        <div class="m-2 text-white ">Contact us by filling this contact form.</div>
    </div>
</div>
<div class=" h-auto flex justify-center">
    <div class="h-auto  -mt-20 w-[80%] md:w-1/2 text-stone-700 font-medium shadow-lg">
        <div class="m-4 font-bold">Your E-mail Address </div> <input placeholder="enter your email "
            class="border-2 ml-4 border-gray-400 h-10 w-3/4 text-gray-400 rounded"/>
        <div class="m-4 font-bold">Subject </div> <input
            class="border-2 ml-4 border-gray-400 h-10 w-3/4 text-gray-400 rounded"/>
        <div class="m-4 font-bold">Your comment Here....... </div> <input
            class="border-2 ml-4 border-gray-400 h-20 w-3/4 text-gray-400 rounded"/>
        <div class="bg-purple-900 p-2 m-4 text-white w-max font-normal hover:bg-purple-700 cursor-pointer"> SEND
        </div>
    </div>
</div>
</div>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> 
    </>
  )
}

export default Contuct