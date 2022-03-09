import { Rating } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Restaurant = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: white;
  border-left: 5px solid transparent;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  };
`;

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const RestaurantTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
`;

const RestaurantAddress = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 10px;
`;

const RestaurantPhoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  object-fit: cover;
`

const RestaurantCard = function (props) {
  return <Restaurant>
    <RestaurantInfo>
      <RestaurantTitle>{props.name}</RestaurantTitle>
      <Rating readOnly value={props.rating} precision={0.1} />
      <RestaurantAddress>{props.address}</RestaurantAddress>
    </RestaurantInfo>
    <RestaurantPhoto src={props.image} alt="Foto do Restaurante" />
  </Restaurant>;
};

export default RestaurantCard;