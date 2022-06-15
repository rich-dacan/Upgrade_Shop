import styled from "styled-components";

export const FiltersSection = styled.section`

  display: flex;
  justify-content: space-between;
  width: 100%;

  overflow-x: scroll;

  ul {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 25px;

  }

  li {
    list-style: none;
    margin-right: 10px;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    border: #fff solid 1px;
    border-radius: 10px;
    padding: 8px;

    transition: all ease .5s;
  }
    span:hover {
      background-color: #fff;
      color: #121214;
    }

  button {
    margin-right: 5px;
    background-color: transparent;
    border: none;
    color: #fff;
  }
    button:hover {
      color: #121214;
    }


  @media screen and (min-width: 650px) {
    overflow-x: hidden;

    ul {
      margin: 0;
      justify-content: space-around;
    }
  }

`