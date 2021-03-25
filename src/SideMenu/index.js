import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, View } from "react-native";
import {
  MenuContainer,
  MenuHeading,
  SubHeaderContainer,
  MenuText,
  FooterContainer
} from "./styles";

class SideMenu extends Component {
  constructor() {
    super();
    // Array of the sidebar navigation option with Heading, Subheading and screen to navigate //
    // Screen to navigate can be any screen defined in Drawer Navigator in App.js
    this.options = [
      {
        mainHeading: "Home",
        subOptions: [
          { secondaryHeading: "Home Screen", navigationPath: "Home" }
        ]
      },
      {
        mainHeading: "More Info",
        subOptions: [
          { secondaryHeading: "Detail Screen", navigationPath: "Detail" },
          { secondaryHeading: "Settings Screen", navigationPath: "Settings" }
        ]
      }
    ];
  }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <MenuContainer>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View>
                <MenuHeading>{option.mainHeading}</MenuHeading>
                {option.subOptions.map((item, key) => (
                  <SubHeaderContainer key={key}>
                    <MenuText
                      onPress={this.navigateToScreen(item.navigationPath)}
                    >
                      {item.secondaryHeading}
                    </MenuText>
                  </SubHeaderContainer>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <FooterContainer>
          <MenuHeading>levelstudios.co.uk</MenuHeading>
        </FooterContainer>
      </MenuContainer>
    );
  }
}

export default SideMenu;
