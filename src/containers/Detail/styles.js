import styled from "styled-components";

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #000;
  width: 100%;
  height: 100vh;
  color: #fff;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); // 50% mais escuro
    z-index: 3;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const Background = styled.div`
  width: 100%;
  min-height: 50vh;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  padding: 20px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    pointer-events: none;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: -50px;
  position: relative;
  padding: 20px 10%;
  z-index: 4;
`;

export const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  margin-right: 32px;

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 12px;
  }
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;

  p {
    margin-bottom: 24px;
    text-align: justify;
  }
`;

export const GenreBadge = styled.span`
  display: inline-block;
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 16px;
  padding: 6px 16px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 16px;
  gap: 5px;
`;

export const CastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  img {
    width: 100px;
    height: 150px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 8px;
    background: #222;
  }
  span {
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
  }
`;

