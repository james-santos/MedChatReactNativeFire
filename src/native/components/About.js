import React from 'react';
import {
  Container, Content, Text, H1, H2,
} from 'native-base';
import Spacer from './Spacer';
/*eslint-disable*/
const About = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>
        Welcome to MedChat
      </H1>
      <Spacer size={10} />
      <Text>
     MedChat is a platform to allow emergency responders to share their stories and pictures with the world. What else to we love besides a good story? Good food! So if you don't have a story, post your recipe.

    {' '}

    Create your account with your email and password and then post your content at the welcome page. The Top Stories section shows all user submitted data in order of popularity (upvotes). User data (text body, account info, media) is stored on our Firebase server.

        {' '}
      </Text>

      <Spacer size={30} />
      <H2>
        Be Respectful
      </H2>
      <Spacer size={10} />
      <Text>
      MedChat is a platform for individuals to discuss, connect, and share in an open environment, home to some of the most authentic content anywhere online. The nature of this content might be funny, serious, offensive, or anywhere in between. While participating, it’s important to keep in mind this value above all others: show enough respect to others so that we all may continue to enjoy MedChat for what it is.
        {' '}
      </Text>

      <Spacer size={30} />
      <H2>
        Post your story or recipe here:
      </H2>
      <Spacer size={10} />
      <Text>
        Form
        {' '}
      </Text>
    </Content>
  </Container>
);

export default About;
