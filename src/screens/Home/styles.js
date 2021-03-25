import styled from "styled-components/native";
import { Text, Image } from "react-native";
import Colors from "../../constants/Colors";

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-top: 50px;
  align-items: center;
  background-color: ${Colors.background};
`;

export const WelcomeContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Heading = styled(Text)`
  color: #101010;
  font-size: 24px;
  font-weight: bold;
  padding-top: 30px;
  padding-bottom: 8px;
`;

export const WelcomeImage = styled(Image)`
  width: 150px;
  height: 150px;
  resize-mode: contain;
  margin-top: 3px;
  margin-left: -10px;
`;
