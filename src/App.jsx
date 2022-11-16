import { useState } from 'react'
import hero from './assets/assets/mobile/image-hero.jpg';
import desktopHero from './assets/assets/desktop/image-hero.jpg'
import interactive from './assets/assets/mobile/image-interactive.jpg';
import './App.css';
import logo from './assets/assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import close from './assets/assets/icon-close.svg'
import HomePage from './resize';
import { useEffect } from 'react';

function windowCheck(){
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(()=>{
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth])
    }
window.addEventListener('resize', handleResize);
 return () => {
  window.removeEventListener("resize", handleResize)
 }
  }, [])
  return size;
  
}


function App() {
   
  const [mobile, setIsMobile] = useState(0)
 
  const [menu, setMenu] = useState(false)
function mobileSet(){
  const [height, width] = windowCheck();

  
  let state = true
  useEffect(()=> {
    while (width > 900){
      setIsMobile(false)
      return
    }
    while (width < 900){
      setIsMobile(true)
      return
    }
   
  })
  
console.log(state)

}

  

  function openMenu(){
    setMenu(true);
   const menu = document.getElementById('menu');
   menu.style.display = "unset";
  }
  function closeMenu (){
    setMenu(false);
    const menu = document.getElementById('menu');
    menu.style.display ="none";
  }
  return (
    <div className="App">
      {mobileSet()}
<div className='menu' id='menu'>
  
  <img  className='close' src={close} onClick={closeMenu}/>
<ul className='header-nav'>
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
    </ul>

</div>
<div className='menu-desktop'>



<ul className='header-nav-desktop'>
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
    </ul>

</div>
<div className='header-textbox'>
  <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
</div>


     <img className='footer-logo nav-logo' src={logo} />
    
      
      
        
     
        <FontAwesomeIcon icon={faBars} onClick={openMenu} className="navbar"/>
        
      <picture>
      <img src={hero} className='hero' size='(max-width: 900px) 750px,(min-width:901px) 1440px' srcSet={`${desktopHero} 1440w, ${hero} 750w` }  />
     
      </picture>
      
     
      <div className="big-section padded">

      <img className="interactive" src={interactive}/>
      <div className='section1-text'>
      <div className="textbox-1-wrapper">

      <h1 id="section1-title"><span>THE LEADER IN </span><span> INTERACTIVE VR </span></h1>
      <p id="section1-caption">Founded in 2011, Loopstudios has been 
        producing world-class virtual reality projects for some of the best companies around the globe. Our award winning creations have been transformed businesses through digital experiences that bind to their band.</p>

      </div>

      </div>
      
      <h1 className='creations'>OUR CREATIONS</h1>

      
      <div className='photos'>

     
     <img className='desktop' src='src\assets\assets\desktop\image-curiosity.jpg'></img>
     <img className='desktop' src='src\assets\assets\desktop\image-deep-earth.jpg'></img>
     <img className='desktop' src='src\assets\assets\desktop\image-fisheye.jpg'></img>
     <img className='desktop' src='src\assets\assets\desktop\image-from-above.jpg'></img>
     <img className='desktop' src='src\assets\assets\desktop\image-grid.jpg'></img>
    
  
     <img className='desktop' src='src\assets\assets\desktop\image-night-arcade.jpg'></img>
     <img className='desktop' src='src\assets\assets\desktop\image-pocket-borealis.jpg'></img>
     <img className='desktop' src='src\assets\assets\desktop\image-soccer-team.jpg'></img>
      
     <img className='mobile' src='src\assets\assets\mobile\image-curiosity.jpg'></img>
     <img className='mobile' src='src\assets\assets\mobile\image-deep-earth.jpg'></img>
     <img className='mobile' src='src\assets\assets\mobile\image-fisheye.jpg'></img>
     <img className='mobile' src='src\assets\assets\mobile\image-from-above.jpg'></img>
     <img className='mobile' src='src\assets\assets\mobile\image-grid.jpg'></img>
     
     
     <img className='mobile' src='src\assets\assets\mobile\image-night-arcade.jpg'></img>
     <img className='mobile' src='src\assets\assets\mobile\image-pocket-borealis.jpg'></img>
     <img className='mobile' src='src\assets\assets\mobile\image-soccer-team.jpg'></img> 
      </div>
      <button className='button'>SEE ALL</button>
    


      
      </div>
      <footer className='footer'>
    

    <img className='footer-logo' src={logo} />

    

 


    <ul className={mobile ? 'footer-nav' : 'footer-nav-copy'}>
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
    </ul>

    
<div className='socials'>

          <img id="test" src="src\assets\assets\icon-facebook.svg"></img>
          <img  className='social-app' src="src\assets\assets\icon-twitter.svg"></img>
          <img  className='social-app' src="src\assets\assets\icon-pinterest.svg"></img>
          <img  className='social-app' src="src\assets\assets\icon-instagram.svg"></img>

</div>
<p className='copyright'>@2022 LoopStudios. All rights reserved.</p>
    </footer>
    </div>

    
  )
}

export default App
