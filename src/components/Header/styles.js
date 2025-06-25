import styled from "styled-components";

export const MainHeader = styled.header`
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100vw;
    height: 70px;
    background-color:transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    img{
        width: 25%;
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
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 0;
    }
`

export const Link = styled.a`
`
