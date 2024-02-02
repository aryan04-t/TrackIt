import React from 'react';
import '../assets/css/footer.css';

import instagramIcon from '../assets/vectors/socialMediaAndOtherIcons/instagramIcon.svg'; 
import faceebookIcon from '../assets/vectors/socialMediaAndOtherIcons/facebookIcon.svg'; 
import twitterIcon from '../assets/vectors/socialMediaAndOtherIcons/twitterIcon.svg'; 
import linkedInIcon from '../assets/vectors/socialMediaAndOtherIcons/linkedInIcon.svg'; 



function Footer() {
  
  return (
    
    <>

      <div id="wavy-design-svg">

        <div id="social-media-handles-container">
        
          <div id="social-media-handles"> 

            <button>
              <img src={instagramIcon} />
            </button>

            <button>
              <img src={faceebookIcon} /> 
            </button>

            <button>
              <img src={twitterIcon} />
            </button>

            <button>
              <img src={linkedInIcon} />
            </button>
          
          </div>

        </div>

        <div id="footer-content-container">
          © 2024 TrackIt | All Rights Reserved 
        </div>

      </div>

    </>  

  )

}

export default Footer