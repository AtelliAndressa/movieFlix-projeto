import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  
  height: 30%;
  padding: 10px;
  cursor: pointer;
`;

export const StyleCartLogin = styled(StyledNavbar)`
  width: 10%;
  height: 100%;
  padding-right: 30px;
`;
