import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
   const { recipes, handleFilterDietCard} = props;
   console.log('Cards',recipes)
   return <div className={styles.cards}>
    
{recipes?.map((recipe,i) => {
 return <Card key={i} recipe={recipe} handleFilterDietCard={handleFilterDietCard}/>
})}

   </div>;
}