import styled from "styled-components";

export const Container = styled.div`
  .shuffler {
    height: 36px;
    width: 36px;
    cursor: pointer;
    color: #fff;
    position: relative;
    content: "";
    background-size: contain;
    background-image: url('/img/shuffle.png');
    display: block;
    background-repeat: no-repeat;
  }

  @media (max-width: 768px) {
    .shuffler {
      height: 35px;
      width: 35px;
    }
  }
`;