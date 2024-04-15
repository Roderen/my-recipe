import {Box, Container, Input, FormGroup, FormLabel, Button} from "@mui/material";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {v4} from "uuid";
import {Context} from "../../../main.tsx";
import {addDoc, collection} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";

type RecipeUpload = {
  title: string,
  descr: string,
  by: string,
  image: File | string
}

const CreateRecipe = () => {
  const {register, handleSubmit} = useForm<RecipeUpload>();
  const fr = useContext<object | null>(Context);

  const onSubmit = async (e: RecipeUpload) => {
    const img = ref(fr.storage, `recipe-images/${v4()}`)
    const valRef = collection(fr.firestore, "recipes");
    const file = e.image[0]

    try {
      const data = await uploadBytes(img, file);
      const val = await getDownloadURL(data.ref);
      e.image = val;
      await addDoc(valRef, e);
    } catch (err) {
      console.log(err);
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