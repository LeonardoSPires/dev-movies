import styled from "styled-components";

export const MainHeader = styled.header`
  background-color: ${(props =>
    props.scrolled ? "#000" : 'transparent' )};
  transition: ease-in-out 0.7s;
  position: fixed;
  width: 100vw;
  z-index: 10;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

    img {
        width: 30%;
        min-height: 70px;
        margin: 10px 0;
    }
`;

export const Menu = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
    `;

export const Li = styled.li`
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
    cursor: pointer;
    position: relative;

    a{
        color: #fff;
        
    }
    a::after {
        content: "";
        height: 3px;
        width: 100%;
        background-color: #005;
        position: absolute;
        bottom: -10px;
        left: 0;
    }
    
`

