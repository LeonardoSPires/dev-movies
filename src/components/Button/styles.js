import styled, { css } from "styled-components"; 

const buttonStyles = css`
    border: 3px solid #fff;
    background: transparent;
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background: #fff;
        color: #ff0000;
        transition: 0.3s;
    }

    @media (max-width: 600px) {
        padding: 8px 12px;
        font-size: 16px;
        width: 90%;
        min-width: 120px;
        margin: 0 auto;
        display: block;
    }
`

export const ButtonWithe = styled.button`
    ${buttonStyles}
`

export const ButtonRed = styled.button`
    ${buttonStyles}
    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgba(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 7px 15px rgba(255 0 0 / 30%);
        background: #ff0000;
        color: #fff;
        transition: 0.3s;
    }
`