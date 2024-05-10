import styled from "styled-components";
import { COLORS } from "../../styles/theme/colors";

export const Image = styled.img`
  width: 10rem;
  height: 12rem;
  max-height: 13rem;
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
  margin-bottom: 2rem;
`;

export const StyleRegistration = styled.text`
margin-left: 0.5rem;
font-weight: normal;
`;

export const MediaQuery = styled.div`

@media screen and (max-width: 768px) {
   
      margin-bottom: 0.8rem;
    
  }

`;