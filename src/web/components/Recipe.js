import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ErrorMessages from '../../constants/errors';
import Loading from './Loading';
import Error from './Error';

const StoryView = ({
  error,
  loading,
  stories,
  storyId,
}) => {
  // Loading
  if (loading) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  // Get this Story from all stories
  let story = null;
  if (storyId && stories) {
    story = stories.find(item => parseInt(item.id, 10) === parseInt(storyId, 10));
  }

  // Story not found
  if (!story) return <Error content={ErrorMessages.story404} />;

  // Build listing
  const ingredients = story.ingredients.map(item => (
    <ListGroupItem key={`${item}`}>
      {item}
    </ListGroupItem>
  ));

  // Build Method listing
  const method = story.method.map(item => (
    <ListGroupItem key={`${item}`}>
      {item}
    </ListGroupItem>
  ));

  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            {story.title}
          </h1>
          <p>
            by
            {' '}
            {story.author}
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg="4" className="story-view-card">
          <Card>
            <CardHeader>
              About this story
            </CardHeader>
            <CardBody>
              <CardText>
                {story.body}
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" className="story-view-card">
          <Card>
            <CardHeader>
              Ingredients
            </CardHeader>
            <ListGroup className="list-group-flush">
              {ingredients}
            </ListGroup>
          </Card>
        </Col>
        <Col lg="4" className="story-view-card">
          <Card>
            <CardHeader>
              Method
            </CardHeader>
            <ListGroup className="list-group-flush">
              {method}
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <Row className="pb-3">
        <Col sm="12">
          <Link className="btn btn-secondary" to="/stories">
            <i className="icon-arrow-left" />
            {' '}
            Back
          </Link>
        </Col>
      </Row>
    </div>
  );
};

StoryView.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  storyId: PropTypes.string.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

StoryView.defaultProps = {
  error: null,
};

export default StoryView;
