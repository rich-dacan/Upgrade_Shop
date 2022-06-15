import styled from "styled-components";

export const CardCart = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  width: 95vw;
  margin-top: 50px;

  img {
    height: 70px;
    width: 70px;

    border-radius: 8px;
  }

  h3 {

    font-size: .8rem;
    max-width: 9ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    border: none;
    background-color: transparent;
    padding: 10px;
    color: #fff;
    transition: all ease .5s;
  }
    button:hover {
      background-color: grey;
      border-radius: 8px;
    }
    
  @media screen and (min-width: 768px) {
    h3 {

      font-size: 1rem;
      width: 100%;
      white-space: normal;
    }
    img {
      height: 100px;
      width: 100px;

      border-radius: 8px;
  }
  }
`