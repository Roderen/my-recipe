import { create } from 'zustand'

interface Recipe {
  id: string;
  title: string;
  descr: string;
  by: string;
  image: string;
  ingredients: string[];
}

interface RecipeStore {
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

export const useRecipesStore = create<RecipeStore>((set) => ({
  recipes: [],
  setRecipes: (recipes) => set({recipes}),
}))