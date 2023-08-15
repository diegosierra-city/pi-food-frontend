import { useState } from 'react';
import style from './Card.module.css';
//import { IconTrashXFilled, IconHelpHexagonFilled, IconHeartFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import {addFav,removeFav} from '../../redux/actions'
import { useEffect } from 'react';

export default function Card(props) {
const {recipe, handleFilterDietCard} = props;

    

   return (
      <div className={style.card}>
         <div className={style.image}>
      <img src={recipe.image} alt="" />      
         </div>
         
         
<h2>{recipe.title}</h2>
<Link to={`/detail/${recipe.id}`}>
<button className='boton-principal'> view recipe</button>
</Link>
<div className={style.diets}>Diets: 
   {recipe?.diets?.length > 0 ? recipe?.diets.map((diet,i) => <div onClick={()=>handleFilterDietCard(diet)} key={`${recipe.id}-${i}`}>{diet}</div>) : recipe?.Diets?.length > 0 ? recipe?.Diets.map((diet,i) => <div onClick={()=>handleFilterDietCard(diet.name)} key={`${recipe.id}-${i}`}>{diet.name}</div>) : "No diets"}
  
</div>

  
      </div>
   );
}