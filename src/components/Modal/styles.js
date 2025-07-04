import styled from 'styled-components';

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    background-color: #000;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1000px;

    iframe {
        border: none;
    }
`


   