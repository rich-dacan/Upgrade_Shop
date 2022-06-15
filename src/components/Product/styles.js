import styled from "styled-components";

export const Card = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border: solid 1px #fff;

  width: 200px;
  height: 300px;
  text-align: center;
  margin: 15px;
  border-radius: 10px;

  transition: all ease-in .5s;
  opacity: .8 ;

  :hover {
    transform: scale(1.092);
    box-shadow: 0px 10px 20px grey;
    opacity: 1;

  }

  span {
    display: flex;
    justify-content: center;
    background-color: #3FE864;
    padding: 8px;
    border-radius: 8px;

    opacity: 1;
    cursor: pointer;

  }
    span:hover {
      background-color: green;
      opacity: .8;
    }

  h3 {

    font-size: 1rem;
    max-width: 19ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    margin-right: 5px;
    border: none;
    background-color: transparent;
    color: #fff;
  }

  img {
    margin: 0 auto;
    height: 150px;
    width: 150px;

    border-radius: 8px;
  }

`
