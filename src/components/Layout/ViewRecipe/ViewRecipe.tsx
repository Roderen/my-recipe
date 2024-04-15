import { useParams } from 'react-router-dom';

const CreateRecipe = () => {
  const paramsId: string|undefined = useParams().id;

  return (
    <>
      {paramsId}
    </>
  );
};

export default CreateRecipe;