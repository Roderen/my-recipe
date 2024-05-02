import {Box, Button, Input} from '@mui/material';
import {useState} from 'react';

interface IngredientsProps {
  onIngredientsChange: (selectedIngredients: string[]) => void;
}

const Ingredients = ({onIngredientsChange}: IngredientsProps) => {
  const [ingredientsInput, setIngredientsInput] = useState('');
  const [ingredientsList, setIngredientsList] = useState<string[]>([]);

  const handleClick = () => {
    setIngredientsList([...ingredientsList, ingredientsInput]);
    onIngredientsChange(ingredientsList);
  }

  return (
    <>
      <Box sx={{display: "flex", alignItems: "stretch", gap: "10px"}}>
        <Input
          disableUnderline={true}
          sx={{border: "1px solid #eee"}}
          type="text"
          onChange={e => setIngredientsInput(e.target.value)}
        />
        <Button type="button"
                onClick={handleClick}
                variant="outlined"
                color="success"
                style={{minWidth: "100px", width: "fit-content", padding: "7px 10px"}}
        >Add</Button>
      </Box>
      {!ingredientsList.length ? '' : (
        <Box
          sx={{
            width: '100%',
            maxHeight: 100,
            minHeight: 50,
            maxWidth: 360,
            overflowY: 'auto',
            border: '1px solid #e2e2e2',
            marginTop: '10px'
          }}
        >
          <ul>
            {ingredientsList.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </Box>
      )}
    </>
  );
};

export default Ingredients;