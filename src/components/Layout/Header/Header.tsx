import React, { useState } from "react";
import {Box, Button, Container, IconButton, InputBase, Paper, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import {useRecipesStore} from "../../../store/store.tsx";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const setSearchTerm = useRecipesStore(store => store.setSearchTerm);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchInput)
    setSearchTerm(searchInput);
    setSearchInput("");
  }

  return (
    <Box sx={{
      boxShadow: 1,
      padding: 2,
    }}>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          columnGap="50px"
        >
          <Box sx={{
            display: "flex",
            alignItems: "center",
            columnGap: 8,
            flexWrap: "nowrap",
            width: "100%"
          }}>
            <Box sx={{ flexShrink: 0 }}>
              <Link to="/" style={{textDecoration: "none"}}>
                <Typography color="green" fontSize="20px">My Recipes</Typography></Link>
            </Box>
            <Box sx={{ maxWidth: "400px", width: "100%" }}>
              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%"}}
              >
                <InputBase
                  sx={{ml: 1, flex: 1}}
                  placeholder="Search"
                  inputProps={{'aria-label': 'Search'}}
                  onChange={e => setSearchInput(e.target.value)}
                />
                <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            alignItems: "center",
            columnGap: 3,
            flexShrink: 0,
          }}>
            <Link to="/" style={{ color: "inherit" }}><AccountCircleIcon fontSize="large" /></Link>
            <Link to="/create-recipe/" style={{ textDecoration: "none" }}>
              <Button variant="contained" style={{ backgroundColor: "green" }}>Create Recipe</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;