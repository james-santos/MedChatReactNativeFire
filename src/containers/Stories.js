import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRecipes, getMeals, setError } from '../actions/stories';

class RecipeListing extends Component {
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
    fetchRecipes: PropTypes.func.isRequired,
    fetchMeals: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  componentDidMount = () => this.fetchRecipes();

  /**
    * Fetch Data from API, saving to Redux
    */
  fetchRecipes = () => {
    const { fetchRecipes, fetchMeals, showError } = this.props;
    return fetchRecipes()
      .then(() => fetchMeals())
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
        recipeId={id}
        error={stories.error}
        loading={stories.loading}
        stories={stories.stories}
        reFetch={() => this.fetchRecipes()}
      />
    );
  }
}

const mapStateToProps = state => ({
  stories: state.stories || {},
});

const mapDispatchToProps = {
  fetchRecipes: getRecipes,
  fetchMeals: getMeals,
  showError: setError,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListing);
