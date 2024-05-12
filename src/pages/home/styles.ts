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
  /* grid-template-columns: repeat(2, minmax(100px, 1fr)); */
  grid-template-columns: 15rem 1fr;
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
`;

export const MediaQuery = styled.div`
  @media screen  and (min-width: 426px) and (max-width: 768px) {
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
      height: calc(100vh - 72.02px);
      filter: brightness(95%);
      background-color: ${COLORS.NEUTRAL_50};
    }

    .contentBody {
      position: absolute;
      width: 95%;
      align-items: center;
      justify-content: center;
      align-content: center;
      padding: 1rem 1.5rem 1.2rem 1.5rem;
      border-radius: 1rem;
    }
  }

  @media screen  and (min-width: 390px) and (max-width: 425px) {
    .contentBodyGrid {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: space-between;
      align-content: center;
    }
    
    .card {
      grid-column: span 2;
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }
    .cardWrapper {
      display: flex;
      flex: 1;
      margin-top: 0.5rem;
      margin: 0.3rem 0;
    }

    .contentBody {
      position: absolute;
      width: 95%;
      align-items: center;
      justify-content: center;
      align-content: center;
      top: 1rem;
      bottom: 0;
      border-radius: 1rem;
    }
  }
`;
