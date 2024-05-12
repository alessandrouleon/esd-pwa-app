import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";

export const Image = styled.img`
  width: 10rem;
  height: 11.5rem;
  align-self: center;
  margin-top: 1rem;
`;

export const StylesName = styled.text`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${COLORS.NEUTRAL_800};
  padding: 0.5rem;
`;

export const StylesNameDescription = styled.text`
  margin-left: 0.5rem;
  font-weight: normal;
`;

export const Occupation = styled.text`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  color: ${COLORS.NEUTRAL_800};
  padding: 0.5rem;
`;

export const OccupationDescription = styled.text`
  margin-left: 0.5rem;
  font-weight: normal;
`;

export const Registration = styled.text`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  color: ${COLORS.NEUTRAL_800};
  padding: 0.5rem;
  margin-bottom: 2.8rem;
`;

export const StyleRegistration = styled.text`
  margin-left: 0.5rem;
  font-weight: normal;
`;

export const MediaQuery = styled.div`
  @media screen and (min-width: 426px) and (max-width: 768px) {
    margin-bottom: 0.8rem;
    .card {
      display: grid;
      flex: 1;
      grid-template-columns: 10rem 1fr;
      grid-row-gap: 1em;
      margin-right: 0;
    }

    .contentImage {
      width: 9rem;
      height: 10rem;
    }

    .image {
      flex: 1;
      height: 7rem;
      align-self: center;
      margin-bottom: 2rem;
    }

    .contentLegend {
      width: 100%;
      height: 8rem;
      display: flex;
      padding-top: 2.5rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .stylesName {
      flex: 1;
      margin-left: 0;
      font-size: 1rem;
      padding: 0.3rem;
    }
  }

  @media screen and (min-width: 390px) and (max-width: 425px) {
    margin-bottom: 0.8rem;

    .card {
      display: flex;
      flex: 1;
      /* width:62%; */
      height: 4rem;
      grid-template-columns: 5rem 1fr;
      grid-row-gap: 1em;
      margin-right: 0;
    }

    .contentImage {
      width: 4.5rem;
      height: 4.5rem;
    }

    .image {
      flex: 1;
      height: 3.5rem;
      align-self: center;
      margin-bottom: 2rem;
    }

    .contentLegend {
      width: 100%;
      height: 4rem;
      display: flex;
      padding-top: 0.5rem;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .stylesName {
      flex: 1;
      margin-left: 0;
      font-size: 0.7rem;
      margin-top: 0;
      padding: 0.125rem;
    }
  }
`;
