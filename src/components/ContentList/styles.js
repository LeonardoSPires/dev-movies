import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
    padding-top: 1rem;
  }
`;
