import './App.css'
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Header from "./components/Layout/Header/Header.tsx";
import Recipes from "./components/Layout/Recipes/Recipes.tsx";
import ViewRecipe from "./components/Layout/ViewRecipe/ViewRecipe.tsx";
import CreateRecipe from './components/Layout/CreateRecipe/CreateRecipe.tsx';
import {useFetchRecipes} from "./hook/useFetchRecipes.ts";

function App() {
  useFetchRecipes();

  return (
    <Box>
      <Header />
      <Box sx={{ margin: "2rem 0" }}>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/create-recipe/" element={<CreateRecipe />} />
          <Route path="/view-recipe/:id" element={<ViewRecipe />} />
        </Routes>
      </Box>
    </Box>
  )
}

export default App
