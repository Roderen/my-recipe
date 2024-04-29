import {Box, Container, Input, FormGroup, FormLabel, Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {createRecipe} from "../../../services/recipeService.ts";

type RecipeUpload = {
  title: string,
  descr: string,
  by: string,
  image: File | string
}

const CreateRecipe = () => {
  const {register, handleSubmit} = useForm<RecipeUpload>();

  const onSubmit = async (e: RecipeUpload) => {
    try {
      await createRecipe(e);
    } catch (err) {
      console.log(err)
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <FormLabel>Title:</FormLabel>
              <Input
                {...register("title")}
                disableUnderline={true}
                sx={{border: "1px solid #eee"}}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Description:</FormLabel>
              <Input
                {...register("descr")}
                disableUnderline={true}
                sx={{border: "1px solid #eee"}}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>By:</FormLabel>
              <Input
                {...register("by")}
                disableUnderline={true}
                sx={{border: "1px solid #eee"}}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Image:</FormLabel>
              <Input
                {...register("image")}
                disableUnderline={true}
                sx={{border: "1px solid #eee"}}
                type="file"
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default CreateRecipe;