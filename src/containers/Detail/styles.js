import styled from "styled-components";

export const ContainerDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const Background = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(${props => props.$img});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
  }

  @media (max-width: 768px) {
    height: 30vh;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-top: -10rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin-top: -5rem;
  }
`;

export const Poster = styled.div`
  flex: 0 0 300px;

  img {
    width: 100%;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    flex: none;
    width: 60%;
  }
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  p {
    line-height: 1.5;
  }
`;

export const GenreBadge = styled.span`
  display: inline-block;
  background-color: #e50914;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
`;

export const CastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
`;

export const CastItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.9rem;

  img {
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;
