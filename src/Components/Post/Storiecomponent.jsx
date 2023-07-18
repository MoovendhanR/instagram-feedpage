import React, { useRef } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
const Storiecomponent = ({storie}) => {
    const containerRef = useRef(null);

    
  const handleScrollLeft = () => {
    if (containerRef.current) {
        containerRef.current.scrollLeft -= 1; // Adjust the scroll distance as needed
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 1; // Adjust the scroll distance as needed
    }
  };

  return (
    <div className="post">
         <div className="stories" ref={containerRef}>
       {
        storie.map((storie,index) =>(
       <div key={index}>
        <div className="image-container">
        <img src={storie.image} alt="stories"/>
        </div>
        <span>{storie.name}</span>
       </div>
        ))
       }
         </div>
       <div className="storie-button">
       <button onClick={handleScrollLeft}>{<ArrowBackIosNewOutlinedIcon/>}</button>
        <button onClick={handleScrollRight}>{<ArrowForwardIosOutlined/>}</button>
       </div>
    </div>
  )
}

export default Storiecomponent
