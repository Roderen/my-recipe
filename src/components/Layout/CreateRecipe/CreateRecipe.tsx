import {Box, Container, Input, FormGroup, FormLabel, Button, Typography} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {useForm} from "react-hook-form";
// import {createRecipe} from "../../../services/recipeService.ts";
import {useState} from "react";
import "./CreateRecipe.scss"
import Ingredients from "./Ingredients/Ingredients.tsx";

interface RecipeUpload {
  title: string,
  descr: string,
  by: string,
  image: File | string,
  ingredients: string[],
}

const CreateRecipe = () => {
  const {register, handleSubmit} = useForm<RecipeUpload>();
  const [fileName, setFileName] = useState('');

  const onSubmit = async (e: RecipeUpload) => {
    console.log(e)
    // try {
    //   await createRecipe(e);
    // } catch (err) {
    //   console.log(err)
    // }
  }

  const getFileName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFileName(e.target.value.split(/(\\|\/)/g).pop());
  }

  const handleIngredientsChange = (ingredientName: RecipeUpload) => {
    console.log(ingredientName)
    register("ingredients", {value: ingredientName})
  }

  return (
    <>
      <Container
        sx={{
          p: 1,
          border: "1px solid #eee",
          borderRadius: "5px",
        }}
      >
        <Box>
          <form onSubmit={handleSubmit(onSubmit)} className="create__recipe-form">
            <FormGroup className="form-group">
              <Typography variant="body1">Title:</Typography>
              <Input
                {...register("title")}
                disableUnderline={true}
                sx={{border: "1px solid #c0c0c0"}}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Typography variant="body1">Description:</Typography>
              <Input
                {...register("descr")}
                disableUnderline={true}
                sx={{border: "1px solid #c0c0c0"}}
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Typography variant="body1">By:</Typography>
              <Input
                {...register("by")}
                disableUnderline={true}
                sx={{border: "1px solid #c0c0c0"}}
              />
            </FormGroup>
            <FormGroup className="form-group image">
              <Typography variant="body1">Image:</Typography>
              <FormLabel>
                <AddPhotoAlternateOutlinedIcon fontSize="large" />
                <Typography variant="body1" sx={{marginTop: "5px"}}>Upload a file</Typography>
                {!fileName ? '' : (
                  <Typography variant="body2" sx={{marginTop: "10px"}}>{fileName}</Typography>
                )}
                <Input
                  {...register("image")}
                  onInput={getFileName}
                  disableUnderline={true}
                  sx={{border: "1px solid #eee"}}
                  type="file"
                />
              </FormLabel>
            </FormGroup>
            <FormGroup className="form-group">
              <Typography variant="body1">Ingridients:</Typography>
              <Ingredients onIngredientsChange={handleIngredientsChange} />
            </FormGroup>
            <Button type="submit"
                    variant="contained"
                    color="success"
                    style={{minWidth: "150px", padding: "7px 10px"}}>Submit</Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default CreateRecipe;