import React from 'react'

function About() {
  return (
    <>
      <section>
        <div class="flex items-center justify-around " >
          <div class="flex-col items-center justify-sp ">
            <div class="flex">
              <div class="flex lg:flex-row flex-col p-4 space-x-4 space-y-4 max-w-7xl justify-around w-full h-auto lg:h-60 items-center ">
                <div class="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl md:mt-4">
                  <div class="flex-col space-y-2 items-center px-0 md:px-6">
                    <div class="flex items-center justify-between space-x-6">
                      <div class="flex items-center space-x-1 ">
                        <div class="text-lg font-medium text-violet-500"><ion-icon name="chatbubble-ellipses-outline"></ion-icon></div>
                        <div class="text-sm font-medium text-gray-500">Responses</div>
                      </div>
                     
                    </div>
                    <div class="text-3xl font-bold">1427</div>
                    <div class="font-bold text-red-500 flex items-center space-x-1">
                      <div class="text-xl"><ion-icon name="trending-down-outline"></ion-icon></div>
                      <div class="text-sm">2.5% less</div>
                    </div>
                  </div>
                </div>
                <div class="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl">
                  <div class="flex-col space-y-2 items-center px-0 md:px-6">
                    <div class="flex items-center justify-between space-x-6">
                      <div class="flex items-center space-x-1 ">
                        <div class="text-lg font-medium text-violet-500"><ion-icon name="briefcase-outline"></ion-icon></div>
                        <div class="text-sm font-medium text-gray-500">Projects</div>
                      </div>
                     
                    </div>
                    <div class="text-3xl font-bold">127</div>
                    <div class="font-bold text-green-500 flex items-center space-x-1">
                      <div class="text-xl"><ion-icon name="trending-up-outline"></ion-icon></div>
                      <div class="text-sm">4.9% more</div>
                    </div>
                  </div>
                </div>
                <div class="border rounded h-40 w-[100%] md:w-72 flex items-center justify-center ml-4 lg:px-0 px-6 bg-white shadow-xl">
                  <div class="flex-col space-y-2 items-center px-0 md:px-6">
                    <div class="flex items-center justify-between space-x-6">
                      <div class="flex items-center space-x-1 ">
                        <div class="text-lg font-medium text-violet-500"><ion-icon name="document-outline"></ion-icon></div>
                        <div class="text-sm font-medium text-gray-500">Reports</div>
                      </div>
                    
                    </div>
                    <div class="text-3xl font-bold">456</div>
                    <div class="font-bold text-green-500 flex items-center space-x-1">
                      <div class="text-xl"><ion-icon name="trending-up-outline"></ion-icon></div>
                      <div class="text-sm">3.7% more</div>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>

        </div>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>


      </section>

      <section className='about' data-aos="fade-down">

        <div class="flex justify-center p-4">
          <div class="flex flex-col justify-center items-center ">
            <div class="text-white text-3xl font-medium">About Us </div>
            <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">


              <div class="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">

                <div class="flex flex-col md:flex-row items-center justify-center  ">
                  <div class="  items-center justify-center flex py-2">
                    <div class="flex flex-col  items-center justify-center text-center">
                      <img src="Image/profile.jpg" alt="" class="rounded-full" />
                      <div class="text-stone-600 font-medium m-2">  I am a full stack web developer with a passion for creaIting interactive and responsive website.  React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git...
                        .</div>
                      <div class="font-bold">Md. Rubel</div>
                      <div class="text-cyan-600 italic"><a href="#">MERN Developer</a></div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </section>


    </>
  )
}

export default About