import React from 'react'
import '../assets/css/home.css' 


import Navbar from './navbar.jsx';
import Footer from './footer.jsx';
import BubblePattern from './bubblePattern';

import maleSapien from '../assets/vectors/landingPageSapiens/male.svg';
import femaleSapien from '../assets/vectors/landingPageSapiens/female.svg';

import aSmartBoy from '../assets/vectors/otherHumanAnimationVectors/aSmartBoy.svg';
import fitGirl from '../assets/vectors/otherHumanAnimationVectors/fitGirl.svg';
import financeGuy from '../assets/vectors/otherHumanAnimationVectors/financeGuy.svg';
import wholesomeFamily from '../assets/vectors/otherHumanAnimationVectors/wholesomeFamily.svg'; 
import studyingGirl from '../assets/vectors/otherHumanAnimationVectors/studyingGirl.svg';
import aBeardGuy from '../assets/vectors/otherHumanAnimationVectors/aBeardGuy.svg'; 


function Home() {
  return (
    
    <div className="container user-select-none">

      <Navbar />
      
      <BubblePattern />


      <div id="content-1">
        
        <div id="text-container">
          <p id="landing-page-text">
            Welcome <br/> To <br/> TrackIt 
          </p>
        </div>

        <div className="sapiens">
            <img id="female" src={femaleSapien} />
            <img id="male" src={maleSapien} />
        </div>
      
      </div>


      <div className="container-div-of-halves height-650">

        <div className="div-half">
          <img className="image-left-align height-400 top-120 left-220" src={aSmartBoy} />
        </div>
        
        <div className="div-half">
          <p className="text-right-align font-50 right-280 top-240">
            TrackIt helps you <span className="bold"> track </span> <br/> all your daily essential <br/> needs <span className="bold"> with ease. </span>
          </p>
        </div>
      
      </div>


      <div className="container-div-of-halves height-750">
        
        <div className="div-half">
          <p className="text-left-align font-45 left-260 top-240">
            Using TrackIt's <span className="bold"> "Caloires <br/> and Macros Tracker" </span> you <br/> can keep track of all your <br/> daily energy and nutrition requirements really <br/> smoothly. 
          </p>
        </div>
      
        <div className="div-half">
          <img className="image-right-align height-550 top-120 right-220" src={fitGirl} />
        </div>

      </div>


      <div className="container-div-of-halves height-600">
      
        <div className="div-half">
          <img className="image-left-align height-350 top-150 left-220" src={financeGuy} />
        </div>
        
        <div className="div-half">
          <p className="text-right-align font-45 top-240 right-180">
            Our <span className="bold"> "Expense tracker" </span> <br/> helps you track your <br/> expenses efficiently.
          </p>
        </div>

      </div>


      <div className="container-div-of-halves height-750">
        
        <div className="div-half">
          <p className="text-left-align font-45 left-260 top-240">
            Our <span className="bold">  "Birthday and <br/> Anniversary Reminder" <br/> </span> ensures that you're <br/> always there for your <br/> loved one on their <br/> special moments.  
          </p>
        </div>
      
        <div className="div-half">
          <img className="image-right-align height-500 top-120 right-180" src={wholesomeFamily} />
        </div>

      </div>


      <div className="container-div-of-halves height-700">
      
        <div className="div-half">
          <img className="image-left-align height-550 top-50 left-280" src={studyingGirl} />
        </div>
        
        <div className="div-half">
          <p className="text-right-align font-45 top-220 right-250">
            Use our <span className="bold"> "Notepad" </span> <br/> feature to keep note of <br/> important things which <br/> you never want to <br/> forget. 
          </p>
        </div>

      </div>


      <div className="container-div-of-halves height-750">
        
        <div className="div-half">
          <p className="text-left-align font-40 left-190 top-240">
            So, what are you waiting <br/> for ?? <br/> Just by simply sign-in, <br/> start using our <span className="bold"> "Quality <br/> Products" </span>  from now onwards for free. <br/>   
          </p> 
        </div>
      
        <div className="div-half">
          <img className="image-right-align height-500 top-120 right-180" src={aBeardGuy} />
        </div>

      </div>


      <Footer />

    </div>
  
  )
}

export default Home