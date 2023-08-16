import { useEffect } from "react";
import { useState } from "react";
import styles from './NewRecipe.module.css'
import FormRecipe from '../../components/FormRecipe/FormRecipe'
import Login from '../../components/Login/Login'
import {getCookie,deleteCookie,saveCookie} from '../../utilities/cookie'

export default function NewRecipe(props) {

 const [session, setSession] = useState(false);


 useEffect(() => {
  // Verifica si la cookie "user" existe
  if (getCookie('user')) {
    console.log('La cookie "user" existe.');
    setSession(true);//true
  } else {
    console.log('La cookie "user" no existe.');
    setSession(false);//false
  }
}, []);

 return (
  <div className="page">
   <div className="image-page">
        <img src="/images/pages/NewRecipe.jpg" alt="" />
      </div>

{session? <div className={styles.zona_formulario}>
 <div className={styles.formulario}>
 <FormRecipe setSession={setSession}/> 
 </div>
 

</div> : <div className={styles.zona_formulario}>
 <div className={styles.formulario}>
 <Login setSession={setSession}/>
 </div>

 </div>}

  </div>
 )
 }