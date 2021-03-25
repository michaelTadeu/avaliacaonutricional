import styled from "styled-components/native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

export const ButtonText = styled(Text)`
  font-size: 18px;
  line-height: 27px;
  color: #fff;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${Colors.tintColor};
  border-radius: 5px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
`;
