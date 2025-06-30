import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgCard = styled.img`
  border-radius: 30px;
  width: 300px;
  height: 450px;
  box-shadow: 7px 10px 20px #005;
  margin: 0 5px;

  @media (max-width: 900px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 600px) {
    width: 120px;
    height: 180px;

  }
`;
export const TitleCard = styled.h3`
  color: #fff;
  margin-top: 15px;
  text-align: center;
  
  @media (max-width: 600px) {
      font-size: 0.8rem;
  }
    
`;
