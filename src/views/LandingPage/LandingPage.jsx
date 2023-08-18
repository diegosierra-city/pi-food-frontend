import { Link } from "react-router-dom"
import Slider from "../../components/Slider/Slider"
import styles from "./LandingPage.module.css"


export default function LandingPage(props) {


 return (
  <div className={styles.slide}>
   <Slider />
   
   
    <div className={styles.btn_start}>
      <Link to={'/home'}>
      <img src="/images/logoCommunityCooks400.png" alt=""   />
      <div className={styles.welcome}>Welcome</div>
      </Link>
    </div>
   
  </div>
 )
 }