import { useState, useEffect } from 'react'
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import ArrowRight from '@mui/icons-material/ArrowRight';

const ImageView = (props) => {
    const pics = props.pics;
    const [index, setIndex] = useState(0);
  
  
    const nextPic = () => {
      if (index + 1 === pics.length) {
        setIndex(0);
      }
      else {
        setIndex(index+1);
      }
    }
      
    const previousPic = () => {
      if (index - 1 === -1 ){
        setIndex(pics.length - 1);
      }
      else {
        setIndex(index - 1);
      }
    }
  
   
    const arrowKeyPress = (event) => {
      if(event.key === "ArrowRight"){
        document.getElementById("next").classList.add("focus");
        document.getElementById("prev").classList.remove("focus");
        nextPic();
        
      }
      else if(event.key === "ArrowLeft"){
        document.getElementById("prev").classList.add("focus");
        document.getElementById("next").classList.remove("focus");
        previousPic();
      }
    }

    const removeFocusOnOffClick = (event) => {
      if(event.target !== "arrow"){
        document.getElementById("prev").classList.remove("focus");
        document.getElementById("next").classList.remove("focus");
      }
    }
 
    useEffect(() => {
      document.addEventListener("keydown", arrowKeyPress);
      document.addEventListener("click", removeFocusOnOffClick);
    });
  
    return(
      <div className="imageView">
        <ArrowLeft sx={{ fontSize: 70 }} className="arrow" id="prev" onClick={previousPic} />
        <img className="Pic" src={pics[index]}/>
        <ArrowRight sx={{ fontSize: 70 }}  className="arrow" id="next" onClick={nextPic} />
      </div>
    );
  }
  
  export default ImageView;
