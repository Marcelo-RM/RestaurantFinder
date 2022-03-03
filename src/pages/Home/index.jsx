import React, { useState } from "react";
import { Container, Header } from "./styles";
import logo from "../../assets/logo.svg"
import { TextField, Input } from '@mui/material';

const Home = function () {

  const [inputValue, setInputValue] = useState("");

  return <Container>
    <Header>
      <img src={logo} alt="Logo - RestaurantFinder" width="50%" style={{ margin: 'auto' }} />
      <TextField
        variant="outlined"
        label="Pesquisar..."
        value={inputValue}
        onChange={(e) => { setInputValue(e.target.value); }} />
    </Header>
  </Container>;
}

export default Home;