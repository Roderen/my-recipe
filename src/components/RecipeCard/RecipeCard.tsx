import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material';
import "./RicepeCard.scss";
import { Link } from 'react-router-dom';

type RecipeCardProp = {
  id: string,
  image: string,
  title: string,
  by: string,
  descr: string,
}

const RecipeCard = ({id, image, title, by, descr}: RecipeCardProp) => {
  return (
    <>
      <Card sx={{
        width: "calc(33.3333% - 20px)",
        borderRadius: 2,
      }}>
        <CardContent>
          <CardMedia
            sx={{height: 200}}
            image={image}
            title={title}
          />
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "5px",

          }}>
            <Typography variant="h6" fontWeight="700">
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                p: 0.5,
                border: "1px solid #eee",
                color: "#BEBEBE",
                borderRadius: "10px",
              }}
            >
              by {by}
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            className="text-clip"
            height="44px"
          >
            {descr}
          </Typography>
        </CardContent>
        <Box
          sx={{backgroundColor: "#eee",}}
        >
          <CardContent sx={{padding: "15px!important"}}>
            <Link to={"/view-recipe/" + id} style={{textDecoration: "none", color: "green"}}>
              <Typography variant="subtitle2">
                View
              </Typography>
            </Link>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default RecipeCard;