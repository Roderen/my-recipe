import {Box, Typography} from "@mui/material";
import React from "react";
import "./Descr.scss";

type DescrProp = {
  size?: string,
  children: React.ReactNode
}

const Descr = ({size = "400px", children}: DescrProp) => {
  return (
    <>
      <Box maxWidth={size} width={"100%"}>
        <Typography variant="subtitle2">
          {children}
        </Typography>
      </Box>
    </>
  );
};

export default Descr;