import {useQuery} from "react-query";
import {fetchRecipes} from "../services/recipeService.ts";
import {useRecipesStore} from "../store/store.tsx";
import { useEffect } from "react";

export const useFetchRecipes = () => {
  const {data: recipes} = useQuery('recipes', fetchRecipes);
  const setRecipes = useRecipesStore(state => state.setRecipes);

  useEffect(() => {
    if(recipes){
      setRecipes(recipes)
    }
  },[recipes, setRecipes])
}