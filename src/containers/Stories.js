import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getStories, getShift, setError } from '../actions/stories';

class StoryListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    stories: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      error: PropTypes.string,
      stories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({}),
    }),
    fetchStories: PropTypes.func.isRequired,
    fetchShift: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchStories();

  /**
    * Fetch Data from API, saving to Redux
    */
   /*eslint-disable*/
   fetchStories = () => {
    const { fetchStories, fetchShift, showError } = this.props;
    return fetchStories()
      .then(() => fetchShift())
      .catch((err) => {
        console.log(`Error: ${err}`);
        return showError(err);
      });
  }

  render = () => {
    const { Layout, stories, match } = this.props;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        storyId={id}
        error={stories.error}
        loading={stories.loading}
        stories={stories.stories}
        reFetch={() => this.fetchStories()}
      />
    );
  }
}

const mapStateToProps = state => ({
  stories: state.stories || {},
});

const mapDispatchToProps = {
  fetchStories: getStories,
  fetchShift: getShift,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(StoryListing);
