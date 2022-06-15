import styled from "styled-components";


export const ContainerCart = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  margin-top: 50px;
  padding: 20px;
  border-radius: 10px;

    ::-webkit-scrollbar
    {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb
    {
      background-color: #27AE60;    
      border-radius: 50px;
    }

  span {
    display: flex;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #A62E2E;
  }

  h1 {
    font-size: 1.5rem;
    margin-right: 10px;
  }

  .total {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 50px;
    width: 100%;
    text-align: center;
    border-top: solid 3px #A62E2E;
    padding: 30px;
  }

  .total__price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 50px;
  }

  .btn__checkout {
    margin-top: 25px;
    padding: 20px;
    border: none;
    border-radius: 10px;
    font-size: 1.5rem;
    background-color: #A62E2E;
    color: #fff;
    animation: rise 5s infinite ease-in-out;
    transition: all ease .5s;
  }
    .btn__checkout:hover {
      background-color: #27AE60;
    }

  @keyframes rise {
    50% {
      transform: translate(0%, 30%);
    }
  }

`
export const ContainerCard = styled.div`

  display: flex;

`