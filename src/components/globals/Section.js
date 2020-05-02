import styled from "styled-components";
import { setRem } from "../../styles";

const Section = styled.section`
  padding: ${setRem(64)} ${setRem(80)};
  background: ${props => props.color};
`;

export default Section;
