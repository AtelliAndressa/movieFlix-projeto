import styled from "styled-components";

export const StyledContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const StyledLogin = styled.div`
   text-align: center;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  color: black;
  width: 18%;
  height: 50%;
  justify-content: center;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid blue;
  padding: 5px;
`;

export const StyledTitle = styled.div`
  width: 18vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
  text-align: center;
  label {
    font-weight: 600;
    font-size: 19px;
    color: #0d1128;
  }
  p {
    opacity: 0.7;
  }
`;

