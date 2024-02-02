import React from 'react'
import '../../public/static/css/footer.css'

function Footer() {
  
  return (
    
    <>

      <div id="wavy-design-svg">

        <div id="social-media-handles-container">
        
          <div id="social-media-handles"> 

            <button>
              <img src="../../public/static/vectors/social media and other icons/Instagram Icon.svg" />
            </button>

            <button>
              <img src="../../public/static/vectors/social media and other icons/Facebook Icon.svg" /> 
            </button>

            <button>
              <img src="../../public/static/vectors/social media and other icons/Twitter Icon.svg" />
            </button>

            <button>
              <img src="../../public/static/vectors/social media and other icons/LinkedIn Icon.svg" />
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