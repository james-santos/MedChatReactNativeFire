import React from 'react';
import { Row, Jumbotron } from 'reactstrap';
/*eslint-disable*/
const About = () => (
  <div>
    <Row>
      <Jumbotron className="bg-primary text-white">
        <h1>
        Welcome to MedChat
        </h1>
        <p className="lead">
        MedChat is a platform to allow emergency responders to share their stories and pictures with the world. What else to we love besides a good story? Good food! So if you don't have a story, post your recipe. Create your account with your email and password and then post your content at the welcome page. The Top Stories section shows all user submitted data in order of popularity (upvotes). User data (text body, account info, media) is stored on our Firebase server.
        </p>
        <p>
        MedChat is a platform for individuals to discuss, connect, and share in an open environment, home to some of the most authentic content anywhere online. The nature of this content might be funny, serious, offensive, or anywhere in between. While participating, it’s important to keep in mind this value above all others: show enough respect to others so that we all may continue to enjoy MedChat for what it is.
        </p>
      </Jumbotron>
    </Row>

    <hr />
  </div>
);

export default About;
