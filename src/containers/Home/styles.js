import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 100vh;
  max-width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color:rgba(0, 0, 0, 0.5);
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  max-width: 1500px
`;
export const Info = styled.div`
  position: relative;
  z-index: 2;
  color: #fff;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 0.8rem;
    font-weight: 500;
    margin: 30px 0 20px 0;
  }
`;

export const Poster = styled.div`
  z-index: 2;
  img {
    width: 300px;
    border-radius: 30px;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;