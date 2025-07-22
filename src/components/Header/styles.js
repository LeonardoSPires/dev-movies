import styled from "styled-components";

export const MainHeader = styled.header`
   background: ${props => props.$scrolled ? "#000" : "transparent"};
  transition: ease-in-out 0.5s;
  position: fixed;
  width: 100vw;
  z-index: 10;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 30%;
    min-height: 80px;
    margin: 10px 0;
    max-width: 300px;
    height: auto;
  }

  @media (max-width: 900px) {
    padding: 0 10px;
    img {
      width: 40%;
      min-height: 50px;
      max-width: 180px;
    }
  }

  @media (max-width: 600px) {

    align-items: center;
    img {
      width: 80%;
      min-height: 40px;
      margin: 10px auto 0 auto;
      display: block;
    }
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;

  @media (max-width: 900px) {
    gap: 20px;
  }

  @media (max-width: 600px) {
    gap: 10px;
    width: 100%;
    padding: 0;
    justify-content: end;
  }
`;

export const Li = styled.li`
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
  }
  a:hover {
 
    color:#c2bbbb;
    transition: color 0.4s ease-in-out;
  }

  a::after {
    content: "";
    height: 3px;
    width: 100%;
    background-color: #007;
    position: absolute;
    bottom: -10px;
    left: 0;

  }
  a:hover::after {
    background-color: #003;
    transition: background-color 0.3s ease-in-out;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    a {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    a {
      font-size: 0.8rem;
    }
  }
`;

