import React from "react";

import Button from "../../components/Button";
import { openLSWebSite } from "./helpers";
import { Heading, Container, WelcomeContainer, WelcomeImage } from "./styles";

function Home(props) {
  const { navigation } = props;
  return (
    <Container>
      <WelcomeContainer>
        <WelcomeImage
          /* eslint-disable global-require */
          source={
            __DEV__
              ? require("../../../assets/images/dev.png")
              : require("../../../assets/images/prod.png")
          }
          /* eslint-enable global-require */
        />
      </WelcomeContainer>

      <Heading>Tell me about...</Heading>
      <Button
        text={"David Pears"}
        onPress={() => navigation.navigate("Detail")}
      />

      <Button text={"Level Studios"} onPress={openLSWebSite} />
    </Container>
  );
}

export default Home;
