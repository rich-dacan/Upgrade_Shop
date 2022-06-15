import styled from "styled-components";

export const HeaderStyles = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 30px;

  box-shadow: 0px 10px 50px grey;

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  h1 {
    font-family: 'Water Brush', cursive;
    font-size: 1.5rem;
  }

  i {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  button {
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 15px;
    border-radius: 10px;
    border: none;
    font-weight: 700;
    transition: all ease .5s;
    
  }
    button:hover {
      color: #fff;
      background-color: grey;
    }

  p {
    background-color: green;
    font-size: .6rem;
    color: #fff;
    width: 20px;
    padding: 3px;
    margin-left: 5px;
    border-radius: 100px;
    transition: all ease .25s;
  }
    p:hover {
      background-color: #fff;
      color: #121214;

    }

  @media screen and (min-width: 566px) {
    h1 {
      font-size: 3rem;
    }
  }


`