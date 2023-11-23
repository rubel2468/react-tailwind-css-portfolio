import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
import { useTypewriter } from 'react-simple-typewriter'
const Header = () => {

    const [text] = useTypewriter({
        words: ['Rubel', 'MERN', 'web developer !'],
        loop: 0
    })

    return (
        <>

<div className="md:grid grid-cols-2 grid-rows-1 gap-3  header-b ">

            <div className=' my-8 text-center'>
                <h2 className=' text-2xl'>Hello, I'm</h2>
                <span className='text-[#860A35] text-3xl my-8 max-w-2xl'>{text}</span>
                <p className='my-[50px] ms-[40px]' > I am a full stack web developer with a passion for creaIting interactive and responsive web applications.  React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git...</p>
    <button class="beautiful-button mx-4">
  Hire Me
</button>
<Link class="beautiful-button mx-4" to="/cv">Cv download</Link>

            </div>
            <div className='my-7 mx-auto'>

                <img className=' sm: marker:flex md: justify-center   img-profile rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ' src="./Image/profile.jpg" alt="" />
            </div>
            </div>
        </>
    )
}

export default Header