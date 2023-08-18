export const ADD_RECIPE = 'ADD_RECIPE'
export const ALL_RECIPES = 'ALL_RECIPES'
export const DETAIL_RECIPES = 'DETAIL_RECIPES'
export const RESET_RECIPES = 'RESET_RECIPES'
export const CLEAN_RECIPE = 'CLEAN_RECIPE'
export const SEARCH_RECIPES = 'SEARCH_RECIPES'
export const FILTER_DIETS = 'FILTER_DIETS'
export const FILTER_ORIGIN = 'FILTER_ORIGIN'
export const ORDER = 'ORDER'
export const ALL_DIETS = 'ALL_DIETS'
export const ADD_USER = 'ADD_USER'
export const LOGIN = 'LOGIN'
export const PAGE = 'PAGE'
export const FILTERS = 'FILTERS'

import axios from 'axios'
/* //cargo las variables de .env
import dotenv from 'dotenv'
dotenv.config();
const {
 URL_API
} = process.env; */





export const savePage = (pag) => {
   return {
   type: PAGE,
   payload: pag
   }
   }

export const getAllRecipes = () => {
 //console.log('T',recipe)
return async (dispatch) => {
 try {
   let response = await  axios.get('http://localhost:3001/recipes')
   let data = response.data
   //console.log('data',data)
   return dispatch({
    type: 'ALL_RECIPES',
    payload: data,
 });

 } catch (error) {
   console.log(error)
 }
 
};
};

export const addRecipe = (recipe) => {
 //console.log('T',recipe)
return async () => {
 try {
  let response = await axios.post(`http://localhost:3001/recipes`,recipe)
   let data = response.data
   //console.log('data',data)
   /* return dispatch({
    type: 'ADD_RECIPE',
    payload: data,
 }); */
return 'Recipe add ok'
 } catch (error) {
   console.log(error)
 }
 
};
};


export const getAllDiets = () => {
   //console.log('T',recipe)
  return async (dispatch) => {
   try {
     let response = await  axios.get('http://localhost:3001/diets')
     let data = response.data
     //console.log('data',data)
     return dispatch({
      type: 'ALL_DIETS',
      payload: data,
   });
  
   } catch (error) {
     console.log(error)
   }
   
  };
  };

export const searchRecipes = (name) => {
return async (dispatch) => {
   //console.log('action',name)
 try {
   let response = await axios(`http://localhost:3001/recipes`,{
      params: {
        name: name
      }
    })
   let data = response.data
   //console.log('action data search',data)
   return dispatch({
    type: 'SEARCH_RECIPES',
    payload: data,
 });

 } catch (error) {
   console.log(error)
 }
 
};
};

export const detailRecipe = (id) => {
   //console.log('T',recipe)
  return async (dispatch) => {
   try {
     let response = await  axios.get(`http://localhost:3001/recipes/${id}`)
     let data = response.data
     //console.log('dataAction',data)
     return dispatch({
      type: 'DETAIL_RECIPES',
      payload: data,
   });
  
   } catch (error) {
     console.log(error)
   }
   
  }
  }




export const resetRecipes = () => {
   return {
      type: 'RESET_RECIPES'
   } 
   }

export const cleanRecipe = () => {
   return {
      type: 'CLEAN_RECIPE'
   } 
   }   

   export const filterRecipesDiets = (diet) => {
      return {
      type: FILTER_DIETS,
      payload: diet
      }
      }

export const filterRecipesOrigin = (origin) => {
      return {
      type: FILTER_ORIGIN,
      payload: origin
      }
      }

   export const orderRecipes = (type) => {
      return {
      type: ORDER,
      payload: type
      }
      } 
    export const saveFilters = (filters) => {
      return {
      type: ORDER,
      payload: filters
      }
      }     

      export const loginUser = (type,user) => {
         //console.log('T',recipe)
  return async () => {
    try {
      let response = await  axios.post(`http://localhost:3001/user/${type}`,user)
      let data = response.data
      //console.log('dataAction',data)
      saveCookie = ('user', data, 8)//8horas
   
    } catch (error) {
      console.log(error)
    }
    
   }
        }

/* export const addRecipe = (recipe) => {
 //console.log('T',recipe)
return async (dispatch) => {
 try {
   let response = await  axios.post('http://localhost:3001/rickandmorty/fav', recipe)
   let data = response.data
   return dispatch({
    type: 'ADD_FAV',
    payload: data,
 });

 } catch (error) {
   console.log 
 }
 
};
}; */

/*
//solo redux
export const removeFav = (id) => {
return {
type: REMOVE_FAV,
payload: id
}
} */

/* /// redux y express
export const removeFav = (id) => {
 return async (dispatch) => {
    try {
       let response = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
       let data = response.data
       return dispatch({
          type: 'REMOVE_FAV',
          payload: id,
    });
    }catch (error) {
       console.log(error)
    }
   
 };


};

/// redux y express
export const allFav = () => {
return (dispatch) => {
  axios.get(`http://localhost:3001/rickandmorty/fav`).then(({ data }) => {
     return dispatch({
        type: 'ALL_FAV',
        payload: data,
  });
  });
};
};




export const order = (sentido) => {
return {
type: ORDER,
payload: sentido
}
}
 */