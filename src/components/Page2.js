import React from 'react'
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
  const navigate = useNavigate();

  const onClick = () => {
     navigate("/")
   }

  return (
      <div>
          <button onClick={onClick}>Home</button>
        </div>
  )
}

export default Page2