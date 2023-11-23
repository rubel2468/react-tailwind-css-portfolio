import React from 'react'
import { Link } from 'react-router-dom'

function Cv() {
  return (
    <div className='flex flex-col items-center mx-auto my-9'>
      <Link class="beautiful-button  my-6" to="/">  <button>Back To Home </button>
</Link>
<img src="./Image/Cv.jpg" alt="cv " />


    </div>
  )
}

export default Cv