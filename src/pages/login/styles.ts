import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 72.02px);
  filter: brightness(95%);
  background-color: ${COLORS.NEUTRAL_50};
`;

export const ContentBody = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;
  padding-top: 2rem;
`;

