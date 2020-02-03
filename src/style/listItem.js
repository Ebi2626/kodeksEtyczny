import styled from "styled-components";

const ListItem = styled.div`
  position: relative;
  display: block;
  margin-bottom: 20px;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: #777;
  line-height: 20px;
  & > strong {
    color: #333;
  }
  & > h2 {
    font-size: 22px;
    line-height: 28px;
    color: navy;
    font-family: Montserrat;
    margin-bottom: 10px;
    & > span {
      margin-right: 5px;
      font-size: 28px;
      color: navy;
      font-family: Montserrat;
      font-weight: bold;
    }
  }
`;

export default ListItem;
