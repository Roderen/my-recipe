import {Box, Container} from "@mui/material";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Title from "../../Text/Title/Title.tsx";
import "./Recipes.scss";
import Descr from "../../Text/Descr/Descr.tsx";
import RecipeCard from "../../RecipeCard/RecipeCard.tsx";
import {useEffect, useState} from "react";
import Loader from "../../Loader/Loader.tsx";
import {useRecipesStore} from "../../../store/store.tsx";

const Recipes = () => {
  const [firestoreData, setFirestoreData] = useState([]);
  const data = useRecipesStore((state) => state.recipes);

  const getData = () => {
    setFirestoreData(data);
  }

  useEffect(() => {
    getData();
  }, [data])

  return (
    <>
      <Box>
        <Container>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Title icon={<LocalDiningIcon fontSize="large" />}>Recipes</Title>
            <Descr>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem cupiditate dicta eum, ipsum iste
              laborum maxime neque nulla numquam quos ratione sint suscipit ut, vel. Facere ipsa omnis voluptas!
            </Descr>
          </Box>
          <Box
            marginTop="40px"
            display="flex"
            alignItems="stretch"
            gap="30px"
            flexWrap="wrap"
          >
            {!firestoreData.length ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="100%"
                marginTop="50px"
              >
                <Loader />
              </Box>
            ) : firestoreData.map((item) =>
              <RecipeCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                by={item.by}
                descr={item.descr}
              />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Recipes;