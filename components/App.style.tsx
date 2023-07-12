import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  text-align: center;
  padding: 50px 0;
  line-height: 1;
  color: #fff;

  div {
    width: 100%;
    text-transform: uppercase;
    font-weight: bold;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 2em;
  }
`

export const TilesContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;

  width: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`

export const Footer = styled.div`
  margin-top: 100px;
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 13px;
  font-weight: lighter;

  a,
  a:visited {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 15px;
  }
`
