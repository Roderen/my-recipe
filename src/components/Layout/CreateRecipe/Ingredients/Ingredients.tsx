import {Box, Button, Input} from '@mui/material';
import {useState} from 'react';

interface IngredientsProps {
  onIngredientsChange: (selectedIngredients: string) => void;
  ingredientsList: string[];
  error?: object;
}

const Ingredients = ({onIngredientsChange, ingredientsList, error}: IngredientsProps) => {
  const [ingredientsInput, setIngredientsInput] = useState<string>('');

  const handleClick = () => {
    onIngredientsChange(ingredientsInput);
    setIngredientsInput('');
  }

  return (
    <>
      <Box sx={{display: "flex", alignItems: "stretch", gap: "10px"}}>
        <Input
          disableUnderline={true}
          sx={error ? {border: "1px solid red"} : {border: "1px solid #eee"}}
          type="text"
          onChange={e => setIngredientsInput(e.target.value)}
          value={ingredientsInput}
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