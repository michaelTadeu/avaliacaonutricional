import React, { Component } from "react";
import PropTypes from "prop-types";
import { ButtonContainer, ButtonText } from "./styles";

class customButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <ButtonContainer onPress={() => onPress()}>
        <ButtonText>{text}</ButtonText>
      </ButtonContainer>
    );
  }
}

customButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default customButton;
