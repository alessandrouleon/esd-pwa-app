import styled from "styled-components";
import { styled as styledMui } from '@mui/system';
import { COLORS } from "../../styles/theme/colors";
import { Button, ButtonProps } from "@mui/material";

interface StyledOutlinedButtonProps extends ButtonProps {
  customColor?: string;
}

export const Container = styled.div`
  margin: 0;
  padding: 0;
`;

export const StyledOutlinedButton = styledMui(Button)<StyledOutlinedButtonProps>`
  && {
    border: ${({ customColor = COLORS.NEUTRAL_500 }) => `1px solid ${customColor}`};
    font-size: 1.5rem;
    font-weight: 400;
    background-color: ${COLORS.BACKGROUND_BASE};
    border-radius: 1.5rem; 
    padding: 0 1rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${COLORS.PRIMARY_50};
      border: ${({ customColor = COLORS.NEUTRAL_600 }) => `1px solid ${customColor}`};
    }

    &.MuiButton-outlined {
      border-radius: 1rem;
    }
  }
`;

export const Numbers = styled.text`
  text-align: center;
  color: ${COLORS.NEUTRAL_700};
  &:hover {
    color: ${COLORS.NEUTRAL_800};
  }
`;
