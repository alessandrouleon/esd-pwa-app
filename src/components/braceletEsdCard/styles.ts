import styled from "styled-components";
import { styled as styledMui } from "@mui/system";
import { COLORS } from "../../styles/theme/colors";
import { Button } from "@mui/material";

export const ContainerButton = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  align-items: center;
  justify-content: space-between;
  align-content: center;
  margin: 0;
  padding: 0 0 0.5rem 0;
  margin-bottom: 1rem;
`;

export const StyledButton = styledMui(Button)`
  && {
    border: ${COLORS.PRIMARY_500}
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.BACKGROUND_BASE};
    border-radius: 1.5rem; 
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
`;

export const TextButton = styled.text`
  text-align: center;
  color: ${COLORS.NEUTRAL_700};
  &:hover {
    color: ${COLORS.NEUTRAL_800};
  }
`;

export const Image = styled.img`
  width: 9rem;
  height: 8rem;
  align-self: center;
  margin-top: 1rem;
`;

export const MoldImage = styled.div`
  width: 11rem;
  height: 11.2rem;
  padding-left: 1rem;
  align-self: center;
  margin: 1rem 0;
  border-radius: 0.8rem;
  background-color: ${COLORS.NEUTRAL_EX100};
  box-shadow: ${COLORS.NEUTRAL_EX200};
`;


export const MediaQuery = styled.div`

@media screen  and (min-width: 426px) and (max-width: 768px) {
    margin-bottom: 0.2rem;

    .image {
      display: flex;
      width: 90%;
      margin-top: 1rem;
      height: 75%;
      align-self: center;
    }

    .moldImage {
      width: 15rem;
      height: 12rem;
      align-self: center;
      margin: 1rem 0;
    }
    .containerButton {
      display: grid;
      position: relative;
      bottom: 0.5rem;
      margin: 0 2.5rem;
    }
  }

@media screen and (min-width: 390px) and (max-width: 425px) {
    margin-bottom: 0.2rem;
  
      .card {
      display: grid;
      grid-template-columns: auto;
      max-height: 14rem;
    }

    .image {
      display: flex;
      width: 70%;
      margin-top: 0.8rem;
      height: 80%;
      margin-left: 1.5rem;
      align-self: center;
    }

    .moldImage {
      width: 15rem;
      height: 8rem;
      align-self: center;
      margin: 1rem 0;
    }

    .containerButton {
      display: grid;
      position: relative;
      bottom: 2rem;
      margin: 0 1.5rem;
    }
  }
`;
