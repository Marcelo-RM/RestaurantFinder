import React from "react";
import styled from 'styled-components'


const Card = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 6px;
  padding: 5px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const CardTitle = styled.span`
  font-family: ${(props) => props.theme.fonts.regular};
  color: white;
  font-size: 16px;
`;

const ImageCard = function (props) {

  return <Card image={props.image} >
    <CardTitle>{props.title}</CardTitle>
  </Card>;

};

export default ImageCard;