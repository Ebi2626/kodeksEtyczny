import styled from "styled-components";

const InnerRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  @media all and (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: space-around;
      justify-content: center;
    }
  }
`;

export default InnerRow;
