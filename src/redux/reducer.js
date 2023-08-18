import {
  ADD_RECIPE,
  ALL_RECIPES,
  DETAIL_RECIPES,
  RESET_RECIPES,
  CLEAN_RECIPE,
  SEARCH_RECIPES,
  FILTER_DIETS,
  FILTER_ORIGIN,
  ORDER,
  ALL_DIETS,
  ADD_USER,
  LOGIN,
  PAGE,
  FILTERS
} from "./actions";

const initialState = {
  recipes: [],
  allRecipes: [],
  recipe:{},
  diets: [],
  page: 1,
  filters: {filterDiet:'all',filterOrigin:'all',filterOrder:''}
};

export default function rootReducer(state = initialState, action) {

   switch (action.type) {

    case PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case ALL_RECIPES:
      //console.log('reducer-all',action.payload)
      return {
        ...state,
        recipes: [...action.payload],
        allRecipes: [...action.payload],
      };

    case SEARCH_RECIPES:
      //console.log("reducer-search", action.payload);
      return {
        ...state,
        recipes: [...action.payload],
      };

    case DETAIL_RECIPES:
      //console.log('reducer',action.payload)
      return {
        ...state,
        recipe: [action.payload],
      };

    case RESET_RECIPES:
      //console.log('reducer',action.payload)
      return {
        ...state,
        recipes: [...state.allRecipes],
      };

     case CLEAN_RECIPE:
      //console.log('reducer',action.payload)
      return {
        ...state,
        recipe: {},
      }; 

    case ALL_DIETS:
      //console.log('reducer-all',action.payload)
      return {
        ...state,
        diets: [...action.payload],
      };

    case FILTER_DIETS:
      function searchDiets(array, searchDiet) {
        const results = [];

        array.forEach((item) => {
          if (item.diets) {
            // Formato 1: Array de strings
            if (item.diets.includes(searchDiet)) {
              results.push(item);
            }
          } else if (item.Diets) {
            // Formato 2: Array de objetos
            const dietsNames = item.Diets.map((diet) => diet.name);
            if (dietsNames.includes(searchDiet)) {
              results.push(item);
            }
          }
        });

        return results;
      }
let newRecipes
      if (action.payload === "all") {
        newRecipes = [...state.allRecipes];
      } else {
        newRecipes = searchDiets([...state.allRecipes], action.payload);
      }
      //console.log("reducer-filter", action.payload, newRecipes);

      return {
        ...state,
        recipes: [...newRecipes],
        filters: {...state.filters, filterDiet:action.payload}
      };

    case FILTER_ORIGIN:
      function searchOrigin(array, searchOrigin) {
        const resultsAPI = [];
        const resultsDB = [];

        array.forEach(item => {
           if (typeof item.id === 'number') {
             resultsAPI.push(item);
             }else{
             resultsDB.push(item); 
             } 
          });

        return searchOrigin === "api" ? resultsAPI : resultsDB;
      }
      let newRecipesO
      if (action.payload === "all") {
        newRecipesO = [...state.allRecipes];
      } else {
        newRecipesO = searchOrigin([...state.allRecipes], action.payload);
      }
      //console.log("reducer-filter-origin", action.payload, newRecipesO);

      return {
        ...state,
        recipes: [...newRecipesO],
        filters: {...state.filters, filterOrigin:action.payload}
      };


      case ORDER:
      // Creamos una copia del array original
      const objetosOrdenados = [...state.allRecipes];

      // Utilizamos la función sort para ordenar la copia del array por la propiedad "name"
      if (action.payload == "A") {
        objetosOrdenados.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload == "D") {
        objetosOrdenados.sort((a, b) => {
          if (a.title < b.title) {
            return 1; // Devolvemos 1 en lugar de -1
          }
          if (a.title > b.title) {
            return -1; // Devolvemos -1 en lugar de 1
          }
          return 0;
        });
      }else if (action.payload === "score") {
        objetosOrdenados.sort((a, b) => b.healthScore - a.healthScore);
      }

      return {
        ...state,
        recipes: [...objetosOrdenados],
        filters: {...state.filters, filterOrder:action.payload}
      };


      
    /*   case ADD_FAV:
      console.log('h',action.payload)
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      //console.log('X',state.myFavorites.myFavorites)
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (fav) => fav.id !== Number(action.payload)
        ),
        allCharacters: state.allCharacters.filter(
          (fav) => fav.id !== Number(action.payload)
        ),

      };

      case ALL_FAV:
        return {
          ...state,
          myFavorites: [...action.payload],
          allCharacters: [...action.payload],
        };
      

    

    case ORDER:
      // Creamos una copia del array original
      const objetosOrdenados = [...state.allCharacters];

      // Utilizamos la función sort para ordenar la copia del array por la propiedad "name"
      if (action.payload == "A") {
        objetosOrdenados.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload == "D") {
        objetosOrdenados.sort((a, b) => {
          if (a.name < b.name) {
            return 1; // Devolvemos 1 en lugar de -1
          }
          if (a.name > b.name) {
            return -1; // Devolvemos -1 en lugar de 1
          }
          return 0;
        });
      }

      return {
        ...state,
        myFavorites: [...objetosOrdenados],
      };
 */
    default:
      return { ...state };
  }
}
