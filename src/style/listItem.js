import styled from "styled-components";

const ListItem = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  color: darkgrey;
  line-height: 20px;
  & > h2 {
    font-size: 22px;
    line-height: 28px;
    color: navy;
    font-family: Montserrat;
    margin-bottom: 10px;
    & > span {
      font-size: 28px;
      color: navy;
      font-family: Montserrat;
      font-weight: bold;
    }
  }
`;

export default ListItem;
