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
  height: 6.8rem;
  align-self: center;
  margin-top: 2rem;
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
