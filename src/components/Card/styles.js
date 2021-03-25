import { View } from "react-native";
import styled from "styled-components";
import Colors from "../../constants/Colors";

const Card = styled(View)`
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${Colors.background};
  shadow-color: #000;
  shadow-offset: {
    width: 0px;
    height: 4px;
  }
  shadow-opacity: 0.32;
  shadow-radius: 5.46px;
  elevation: 9;
`;

export default Card;
