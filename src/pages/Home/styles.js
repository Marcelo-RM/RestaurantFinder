import styled from "styled-components";

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