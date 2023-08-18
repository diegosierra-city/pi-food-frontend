import styles from "./Slider.module.css";
import { useState, useEffect } from "react";

export default function Slider(props) {
const [slide, setSlide] = useState(0);



  
  useEffect(()=>{
    const images = document.querySelectorAll(".image-container img");
    let currentIndex = 0;
  function changeImage() {
    //console.log('play')
    if(images[currentIndex]) images[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % images.length;
    if(images[currentIndex]) images[currentIndex].style.opacity = 1;
  }
  
  // Cambiar la imagen cada 5 segundos
  const interval = setInterval(changeImage, 5000);
  
  return () => {
    clearInterval(interval);/// pare al salir
  };
  },[])
 

  //setInterval(playSlider, 10000);
  return (
    <div>
     <div className={`${styles.slideZone} image-container`}>
      <img src="/images/landing/bg02.jpg?1" alt="" className="z-4"/>
      <img src="/images/landing/bg01.jpg?1" alt="" className="z-3" />
<img src="/images/landing/bg03.jpg?1" alt="" className="z-2" />
      <img src="/images/landing/bg04.jpg?1" alt="" className="z-1" />
   </div>
    </div>
    
   

  );
}
