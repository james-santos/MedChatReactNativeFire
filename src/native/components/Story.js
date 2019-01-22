import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {
  Container, Content, Card, CardItem, Body, H3, List, ListItem, Text,
} from 'native-base';
import ErrorMessages from '../../constants/errors';
import Error from './Error';
import Spacer from './Spacer';

const RecipeView = ({
  error,
  stories,
  recipeId,
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get this Story from all Stories
  let recipe = null;
  if (recipeId && stories) {
    recipe = stories.find(item => parseInt(item.id, 10) === parseInt(recipeId, 10));
  }

  // Story not found
  if (!recipe) return <Error content={ErrorMessages.recipe404} />;

  // Build Ingredients listing
  const ingredients = recipe.ingredients.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>
        {item}
      </Text>
    </ListItem>
  ));

  // Build Method listing
  const method = recipe.method.map(item => (
    <ListItem key={item} rightIcon={{ style: { opacity: 0 } }}>
      <Text>
        {item}
      </Text>
    </ListItem>
  ));

  return (
    <Container>
      <Content padder>
        <Image source={{ uri: recipe.image }} style={{ height: 100, width: null, flex: 1 }} />

        <Spacer size={25} />
        <H3>
          {recipe.title}
        </H3>
        <Text>
          by
          {' '}
          {recipe.author}
        </Text>
        <Spacer size={15} />

        <Card>
          <CardItem header bordered>
            <Text>
              Here's My Story
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                {recipe.body}
              </Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              Tags or Other Agencies
            </Text>
          </CardItem>
          <CardItem>
            <Content>
              <List>
                {ingredients}
              </List>
            </Content>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
            <Text>
              Comments or Notes
            </Text>
          </CardItem>
          <CardItem>
            <List>
              {method}
            </List>
          </CardItem>
        </Card>

        <Spacer size={20} />
      </Content>
    </Container>
  );
};

RecipeView.propTypes = {
  error: PropTypes.string,
  recipeId: PropTypes.string.isRequired,
  stories: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

RecipeView.defaultProps = {
  error: null,
};

export default RecipeView;
