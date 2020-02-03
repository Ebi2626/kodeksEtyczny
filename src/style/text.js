import styled from "styled-components";

const Text = styled.p`
  display: block;
  max-width: 800px;
  margin: 10px auto;
  font-size: 18px;
  font-family: Montserrat;
  text-align: center;
  padding: 5px;
  @media all and (max-width: 800px) {
    font-size: 16px;
  }
`;

export default Text;
