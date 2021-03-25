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

export const BodyText = styled(Text)`
  color: #101010;
  font-size: 15px;
`;

export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const RoundImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${Colors.tintColor};
`;
