import React from "react";

import Button from "../../components/Button";
import Card from "../../components/Card/styles";
import {
  Heading,
  Container,
  ImageContainer,
  RoundImage,
  BodyText
} from "./styles";

const developer = {
  name: "David Pears",
  photo:
    "https://media-exp1.licdn.com/dms/image/C4D03AQELrQFg9rkp2w/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=xusupmO_W6sBg9S4w8EALPjjYjN-VU8sSOpGuXKA0ZM",
  title: "Software Developer",
  home: "London",
  language: "React-Native"
};

function Detail(props) {
  const { navigation } = props;
  return (
    <Container>
      <Heading>Detail Screen</Heading>
      <Card>
        <ImageContainer>
          <RoundImage
            source={{
              uri: developer.photo
            }}
          />
        </ImageContainer>
        <BodyText>Name: {developer.name}</BodyText>
        <BodyText>Title: {developer.title} </BodyText>
        <BodyText>Location: {developer.home}</BodyText>
        <BodyText>Language: {developer.language}</BodyText>
      </Card>

      <Button
        text={"Go to Settings"}
        onPress={() => navigation.navigate("Settings")}
      />
    </Container>
  );
}

export default Detail;
