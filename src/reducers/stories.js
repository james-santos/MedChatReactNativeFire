import Store from '../store/stories';

export const initialState = Store;

export default function storyReducer(state = initialState, action) {
  switch (action.type) {
    case 'FAVOURITES_REPLACE': {
      return {
        ...state,
        favourites: action.data || [],
      };
    }
    case 'SHIFT_REPLACE': {
      return {
        ...state,
        error: null,
        loading: false,
        shift: action.data,
      };
    }
    case 'STORIES_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    case 'STORIES_REPLACE': {
      let stories = [];

      // Pick out the props I need
      if (action.data && typeof action.data === 'object') {
        stories = action.data.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
          ingredients: item.ingredients,
          method: item.method,
        }));
      }

      return {
        ...state,
        error: null,
        loading: false,
        stories,
      };
    }
    default:
      return state;
  }
}
