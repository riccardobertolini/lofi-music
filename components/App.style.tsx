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

    display: inline-block;
    font-size: 2em;

    span {
      color: white;
      mix-blend-mode: difference;
      background: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 2px;
      -webkit-text-stroke-color: white;
    }
  }
`

export const Subheading = styled.div`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  line-height: 1;
  color: #fff;
  transition: opacity 0.3s ease;
  cursor: default;
  border-radius:20px;
  background: rgba(98, 98, 98, 0.3);
  border:1px solid rgba(255,255,255,0.15);
  width: auto;
  display: inline-flex;
  justify-content:center;
  align-items:center;
  gap:16px;
  backdrop-filter: blur(16px);
  padding: 6px 6px 6px 20px;

  a {
    background: #800080;
    display: inline-block;
    font-size: 0.7em;
    text-decoration: underline;
    cursor: pointer;
    transition: color 0.5s ease;
    color:#fff;
    border-radius:inherit;
    padding:6px 10px;
    flex:none;
    text-decoration:none
  }
  a:hover {
    background: #cc00cc;
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
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
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
