import styles from "./Footer.module.css";

export default function Footer(props) {
 return (
  <div className={styles.footer}>
   <div className={styles.footer_cont}>
    <div>
    <img src="/images/logoCommunityCooks120.png" alt="" />
    </div>
    <div>
     Power By: <br />
    <img src="/images/logoSpoonacular.png" alt="" />
    </div>
   </div>
    <div className="text-center"><small>Diego Sierra 2023</small></div>
    
  </div>
 )
 }