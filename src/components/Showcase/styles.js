import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  overflow-x: scroll;
  width: 100%;
  margin-top: 50px;
  max-width: 95vw;

  ::-webkit-scrollbar {
    height: 5px;       
  }
  ::-webkit-scrollbar-thumb {
    background-color: #27AE60;    
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: hidden;
    /* height: 100vh; */
    justify-content: center;
  }

`