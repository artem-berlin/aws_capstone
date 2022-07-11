import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: yellow;
  color: blue;
  display: flex;
 
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Help Ukraine, support the Ukrainian Army!</Container>;
};

export default Announcement;
