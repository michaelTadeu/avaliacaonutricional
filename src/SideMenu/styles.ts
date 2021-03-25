import styled from "styled-components/native";
import { Text } from "react-native";
import Colors from "../constants/Colors";

export const MenuContainer = styled.View`
  padding-top: 40px;
  flex: 1;
  background-color: ${Colors.background};
`;

export const MenuHeading = styled(Text)`
  color: ${Colors.white};
  background-color: ${Colors.darkGrey};
  padding-vertical: 10px;
  padding-horizontal: 5px;
`;

export const SubHeaderContainer = styled.View`
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

export const MenuText = styled(Text)`
  color: ${Colors.darkGrey};
`;

export const FooterContainer = styled.View`
  padding-top: 5px;
  padding-left: 5px;
  padding-bottom: 5px;
  padding-right: 5px;
  background-color: ${Colors.darkGrey};
`;
