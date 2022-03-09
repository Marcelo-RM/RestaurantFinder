import React, { useState } from "react";
import {
  Container, Header, Wrapper, Map, CarouseTitle
} from "./styles";
import logo from "../../assets/logo.svg"
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';

import ImageCard from '../../components/ImageCard';

import Slider from 'react-slick';
import RestaurantCard from "../../components/RestaurantCard";
import Modal from "../../components/Modal";

const Home = function () {

  const [inputValue, setInputValue] = useState("");
  const [modalOpened, setModalOpened] = useState(true);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 2,
    adaptiveHeight: true
  };

  return <Wrapper>
    <Container>
      <Header>
        <img src={logo} alt="Logo - RestaurantFinder" width="40%" style={{ margin: 'auto' }} />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Pesquisar</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            value={inputValue}
            onChange={(e) => { setInputValue(e.target.value); }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Pesquisar"
          />
        </FormControl>
        <CarouseTitle>Sua área</CarouseTitle>
        <Slider {...settings}>
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
          <ImageCard title="asdf fdsa restaurants" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
        </Slider>
      </Header>
      <RestaurantCard name="Titulo do rest" address="Rua 19 Q:30 Lt:Q" rating="4" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
      <RestaurantCard name="Titulo do rest" address="Rua 19 Q:30 Lt:Q" rating="3" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
      <RestaurantCard name="Titulo do rest" address="Rua 19 Q:30 Lt:Q" rating="3" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />
      <RestaurantCard name="Titulo do rest" address="Rua 19 Q:30 Lt:Q" rating="5" image="https://youmustgo.com.br/wp-content/uploads/2019/09/restaurantes-na-rua-dias-ferreira-5.jpeg" />

    </Container>
    <Map />
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)} >
      TESTE
    </Modal>
  </Wrapper>;
}

export default Home;