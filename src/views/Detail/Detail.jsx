import axios from "axios";
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { detailRecipe,cleanRecipe } from "../../redux/actions";
import styles from './Detail.module.css'

export default function Detail() {
 const {id}=useParams()
 const dispatch = useDispatch()

 //const recipes = useSelector((state) => state.recipes)
 //const recipe = recipes.find(recipe => recipe.id === id) //search in Store
let recipe = useSelector((store) => store.recipe)

 useEffect(()=>{
   dispatch(detailRecipe(id))
   window.scrollTo({
    top: 0,
    behavior: "smooth", // Hace que el desplazamiento sea suave
  });
   return ()=>dispatch(cleanRecipe())
 },[dispatch, id])

 return (
  <div className={`${styles.detail} page`}>
    
{recipe.length === 1 && recipe[0]?.title? <div className={styles.cont}>
 <div>
  
<h2>{recipe[0].title} </h2> 
<small>ID: {recipe[0].id} 
<br />Health Score: <strong>{recipe[0].healthScore}</strong></small>
<img src={recipe[0].image} alt="" />

<div className={styles.text} dangerouslySetInnerHTML={{ __html: recipe[0].summary }} /> 
 </div>

<div className={styles.text}>
 <h3>Steb by Step</h3>
 
 {recipe[0]?.steps?.length > 0 ? recipe[0]?.steps.map((step,i) => <div key={`${recipe[0].id}-${i}`}><strong>Step {step.number}:</strong> {step.step} </div>) : recipe[0]?.analyzedInstructions[0]?.steps?.length > 0 ? recipe[0]?.analyzedInstructions[0]?.steps.map((step,i) => <div key={`${recipe[0].id}-${i}`}><strong>Step {step.number}:</strong> {step.step} </div>) : "No steps"} 

 <h3>Diets</h3>
 <ul>
 {recipe[0]?.diets?.length > 0 ? recipe[0]?.diets.map((diet,i) => <li key={`${recipe[0].id}-${i}`}>{diet}</li>) : recipe[0]?.Diets?.length > 0 ? recipe[0]?.Diets.map((diet,i) => <li key={`${recipe[0].id}-${i}`}>{diet.name}</li>) : "No diets"} 
 </ul>
 

</div>

</div> : null}

    
    
  </div>
 
 )
 }