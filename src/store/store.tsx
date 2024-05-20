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
  searchTerm: string,
  setSearchTerm: (term: string) => void;
  recipes: Recipe[];
  setRecipes: (recipes: Recipe[]) => void;
}

export const useRecipesStore = create<RecipeStore>((set) => ({
  searchTerm: "",
  setSearchTerm: (term) => set({searchTerm: term}),
  recipes: [],
  setRecipes: (recipes) => set({recipes}),
}))