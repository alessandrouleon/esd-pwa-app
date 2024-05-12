import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";

import { ReactElement } from "react";
import { IconButtonProps } from "@mui/material/IconButton";

export interface HeaderProps {
  arrowIcon?: ReactElement<IconButtonProps>;
  company?: string;
  systemName?: string;
  icon?: ReactElement<IconButtonProps>;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  min-height: 4.501rem;
  background-color: ${COLORS.PRIMARY_500};
`;

export const ButtonArrowBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 0.5rem;
  padding-left: 0.8rem !important;
  border-radius: 100%;
  color: ${COLORS.BACKGROUND_BASE};
  padding: 0.3rem;
  transition-duration: 1s;
  transition-property: background-color; 

  &:hover {
    background-color: ${COLORS.PRIMARY_400};
  }
  &:active {
    background-color: ${COLORS.PRIMARY_300};

    transform: scale(0.95);
  }
`;

export const MediaQuery = styled.div`

@media screen and (max-width: 768px) {
    .classSystemName {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 390px) and (max-width: 767px) {
   height: 3.5rem;
  }

`;
