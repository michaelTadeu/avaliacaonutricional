import styled from "styled-components/native";
import { Text, Image } from "react-native";
import Colors from "../../constants/Colors";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.background};
`;

export const Heading = styled(Text)`
  color: #101010;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 8px;
`;
