import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 16px;
`;

export const Map = styled.div`
  background-color: purple;
  width: 100px;
`;

export const CarouseTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;
