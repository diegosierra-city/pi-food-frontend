import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
//import {IconMoodX} from '@tabler/icons-react'


export default function  NavBar (){

return(
 <div className={styles.header}>

<div className={`${styles.col}`}>
  <div className={styles.logo}>
<img src="../src/assets/logoCommunityCooks120.png" alt="" />
  </div>
  </div>
  
  <div className={`${styles.menu} ${styles.col}`}>
<Link to="/home"><button className="boton-principal">Home</button></Link>    
<Link to="/new-recipe"><button className="boton-principal">Share your recipe</button></Link>
{/* <Link to="/about"><button className="boton-principal">About</button></Link> */}

  </div>

  


<div className={`${styles.menu} ${styles.col}`}>

</div>
  

  
 </div>
 
)
}




/* import {Link } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar(props) {
 return (
   <header className={styles.menu}>
    <nav>
   <ul>
      <li>
         <img src="../src/assets/logo.png" alt="" className={styles.logo} />
      </li>
<Link to="/home"><li>Home</li></Link>
<Link to="/about"><li>About</li></Link>
    
   </ul>

   <button>Login</button>
  </nav>
   </header>
  
 )
 } */