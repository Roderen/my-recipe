import CircularProgress from '@mui/material/CircularProgress';

type LoaderType = {
  color: string
}

const Loader = ({color = "inherit"}: LoaderType) => {
  return (
    <>
      <CircularProgress color={color} />
    </>
  );
};

export default Loader;