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
  flex: 1;
  align-items: center;
  justify-content: center;
  align-content: center;
  padding: 1rem 1.5rem 1.2rem 1.5rem;
  border-radius: 1rem;
  border: solid 1px ${COLORS.NEUTRAL_400};
`;

export const ContentBodyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  align-items: center;
  justify-content: space-between;
  align-content: center;
`;

export const TwoColumnSpan = styled.div`
  grid-column: span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex: 1;
  margin-top: 1rem;
  grid-column: span 2; /* Ocupa as duas colunas */
`;

export const MediaQuery = styled.div`
  @media screen and (max-width: 768px) {

    .contentBodyGrid {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: space-between;
      align-content: center;
    }

    .bodyStyles {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 768px;
      height: calc(100vh - 72.02px);
      filter: brightness(95%);
      background-color: ${COLORS.NEUTRAL_50};
    }
  }
`;