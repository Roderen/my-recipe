import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Box, Container, Typography} from '@mui/material';
import Loader from "../../Loader/Loader.tsx";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import {useRecipesStore} from "../../../store/store.tsx";

type RecipeType = {
    paramsId: string | undefined,
}

const CreateRecipe = () => {
    const paramsId: RecipeType = useParams().id;
    const [firestoreData, setFirestoreData] = useState<object>({});
    const data = useRecipesStore((state) => state.recipes) as object;

    const getData = () => {
        const recipe = data.find((item) => item.id === paramsId) as object;
        setFirestoreData(recipe);
    }

    useEffect(() => {
        getData();
    }, [data]);

    return (
        <>
            {!firestoreData ? (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    marginTop="50px"
                >
                    <Loader color="inherit"/>
                </Box>
            ) : (
                <Container>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        gap="30px"
                    >
                        <Box
                            width="40%"
                            height="300px"
                            boxShadow="0 0 1px #000"
                            borderRadius="10px"
                            padding="10px"
                        >
                            <img
                                src={firestoreData.image}
                                width="100%"
                                height="100%"
                                style={{objectFit: "contain", objectPosition: "center center"}}
                            />
                            <Box sx={{
                                marginTop: "15px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <Box sx={{display: "flex", gap: "5px"}}>
                                    <FavoriteBorderIcon cursor="pointer"/>
                                    <TurnedInNotIcon cursor="pointer"/>
                                </Box>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        padding: "3px 6px",
                                        border: "1px solid #eee",
                                        color: "#BEBEBE",
                                        borderRadius: "10px",
                                        width: "fit-content",
                                    }}
                                >by: {firestoreData.by}</Typography>
                            </Box>
                        </Box>

                        <Box width="50%">
                            <Typography variant="h4">{firestoreData.title}</Typography>
                            <Typography
                                style={{
                                    fontSize: "14px",
                                    backgroundColor: `rgba(0, 128, 0, 0.5)`,
                                    width: "fit-content",
                                    padding: "3px 6px",
                                    borderRadius: "5px",
                                    marginTop: "5px",
                                }}
                            >Category</Typography>
                            <Typography variant="subtitle2"
                                        style={{marginTop: "15px"}}>{firestoreData.descr}</Typography>

                            <Box>
                                <ul>
                                    {!firestoreData.ingredients ? '' : firestoreData.ingredients.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            )}
        </>
    );
};

export default CreateRecipe;