import Description from './Description.jsx';
import ImageView from './ImageView.jsx';


const Patkis = (props) => {
    const bday = new Date("July 25 2021");
    const ageAsDays = (new Date() - bday)/1000/60/60/24;
    
    const yearsOfAge = Math.floor(ageAsDays/365);
    const monthsOfAge = Math.floor(ageAsDays%365/30);
    const years = yearsOfAge > 1 ? "years":"year";
    const months = monthsOfAge > 1 ? "months":"month";
    const age = `${yearsOfAge}  ${years} and ${monthsOfAge} ${months} old`;
  
    const pics = ['./Pätkis1.jpg', './Pätkis2.jpg', './Pätkis3.jpg', './Pätkis4.jpg', './Pätkis5.jpg', './Pätkis6.jpg', './Pätkis7.jpg'];
    const description = `Henlo frens, my name is Pätkis. I am a ${age} Finnish lapphund and a very good boy. Here are some pictures of me growing from a little pupper to a big doggo.`
    
    return(
      <div className="patkis" tabIndex="0">
        <Description text={description}/>
        <ImageView pics={pics}/>  
      </div>
      );
    
  }

  export default Patkis;