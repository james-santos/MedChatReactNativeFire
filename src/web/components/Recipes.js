import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Error from './Error';

const StoryListing = ({ error, loading, stories }) => {
  // Error
  if (error) return <Error content={error} />;

  // Build Cards for Listing
  const cards = stories.map(item => (
    <Card key={`${item.id}`}>
      <Link to={`/story/${item.id}`}>
        <CardImg top src={item.image} alt={item.title} />
      </Link>
      <CardBody>
        <CardTitle>
          {item.title}
        </CardTitle>
        <CardText>
          {item.body}
        </CardText>
        <Link className="btn btn-primary" to={`/story/${item.id}`}>
          View Story
          {' '}
          <i className="icon-arrow-right" />
        </Link>
      </CardBody>
    </Card>
  ));

  // Show Listing
  return (
    <div>
      <Row>
        <Col sm="12">
          <h1>
            Stories
          </h1>
          <p>
            The following data is read directly from Firebase.
          </p>
        </Col>
      </Row>
      <Row className={loading ? 'content-loading' : ''}>
        <Col sm="12" className="card-columns">
          {cards}
        </Col>
      </Row>
    </div>
  );
};

StoryListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

StoryListing.defaultProps = {
  error: null,
};

export default StoryListing;
