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
        nextPic();
        
      }
      else if(event.key === "ArrowLeft"){
        previousPic();
      }
    }
    const arrowKeyUp = (event) => {
      if(event.key === "ArrowRight"){
        document.getElementById("next").classList.remove("focus");
        nextPic();
      }
      else if(event.key === "ArrowLeft"){
        previousPic();
      }
    }
    useEffect(() => {
      document.addEventListener("keydown", arrowKeyPress);
    });
  
    return(
      <div className="imageView">
        <ArrowLeft sx={{ fontSize: 70 }} tabIndex="0" className="arrow" id="prev" onClick={previousPic} />
        <img className="Pic" src={pics[index]}/>
        <ArrowRight sx={{ fontSize: 70 }} tabIndex="0" className="arrow" id="next" onClick={nextPic} />
      </div>
    );
  }
  
  export default ImageView;